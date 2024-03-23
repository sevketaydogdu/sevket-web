import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import { Main, TamaguiProvider, Theme, View } from 'tamagui';

import config from '../tamagui.config';

import SHeader from '@/components/customHeader';
import Footer from '@/components/footer';
import ResponsiveLayout from '@/components/layouts/responsiveLayout';
import { DarkTheme } from '@/constants/navigatiorTheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    SatoshiBlack: require('../assets/fonts/Satoshi-Black.ttf'),
    SatoshiRegular: require('../assets/fonts/Satoshi-Regular.ttf'),
    SatoshiBold: require('../assets/fonts/Satoshi-Bold.ttf'),
    SatoshiLight: require('../assets/fonts/Satoshi-Light.ttf'),
    SatoshiVariable: require('../assets/fonts/Satoshi-Variable.ttf'),
    ...FontAwesome.font,
  });
  const scrollRef = useRef<number | undefined>(undefined);
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <TamaguiProvider config={config}>
        <Theme name="dark">
          <>
            {Platform.OS === 'web' ? (
              <>
                <ResponsiveLayout>
                  <View
                    // onScroll={(e) => scrollRef.current === e.nativeEvent.targetContentOffset?.y}
                    jc="space-between"
                    fd="column"
                    f={1}
                    $gtLg={
                      {
                        // maxWidth: 1200,
                      }
                    }
                    //
                  >
                    <SHeader scrollRef={scrollRef} />

                    <Main>
                      <Slot />
                    </Main>

                    <Footer />
                  </View>
                </ResponsiveLayout>
              </>
            ) : (
              <>
                <StatusBar style="light" />
                <Stack>
                  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                  <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
                </Stack>
              </>
            )}
            {/* <MainModal /> */}
          </>
        </Theme>
      </TamaguiProvider>
    </ThemeProvider>
  );
}

// StyleSheet.flatten([styles.container, globalStyles.webkitScrollbar]);
