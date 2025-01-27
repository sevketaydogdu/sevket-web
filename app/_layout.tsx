import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { Platform, View } from 'react-native';

import SHeader from '@/components/customHeader';
import Footer from '@/components/footer';
import { DarkTheme } from '@/constants/navigatiorTheme';
import GithubBadge from '@/screens/home/components/githubBadge';
import { TamaguiProvider, Theme } from 'tamagui';
import config from 'tamagui.config';

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

  useEffect(() => {
    document.title = 'Sevket Ayodgdu - React Native Developer';
  });
  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <>
        <ThemeProvider value={DarkTheme}>
          <Theme name={'dark'}>
            <>
              {Platform.OS === 'web' ? (
                <>
                  <View
                  // overflowY="scroll"
                  // f={1}
                  // fd="column"
                  // // f={1}
                  // overflow="hidden"
                  // // bg="$red10"
                  // $gtLg={{
                  //   // mx: `15rem`,
                  //   maw: 1200,
                  //   mx: 'auto',
                  // }}
                  // $gtMd={{
                  //   mx: `5rem`,
                  //   // p: "$2",
                  //   mt: '$2',
                  // }}
                  // $gtSm={{ p: '$2', mt: '$2' }}
                  // $gtXs={{ p: '$2', mt: '$2' }}
                  // $xs={{ p: '$2', mt: '$2' }}
                  >
                    <SHeader scrollRef={scrollRef} />

                    <Slot
                      screenOptions={({ route }) => ({
                        title: route.name,
                      })}
                    />

                    <Footer />
                  </View>

                  <GithubBadge />
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
        </ThemeProvider>
      </>
    </TamaguiProvider>
  );
}

// StyleSheet.flatten([styles.container, globalStyles.webkitScrollbar]);
