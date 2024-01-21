import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider } from '@react-navigation/native';
import SHeader from 'components/customHeader';
import ResponsiveLayout from 'components/layouts/responsiveLayout';
import Colors from 'constants/Colors';
import { DarkTheme } from 'constants/navigatiorTheme';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { Header, Main, TamaguiProvider, Theme, Text, View } from 'tamagui';

import config from '../tamagui.config';

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
                <SHeader scrollRef={scrollRef} />
                <ScrollView
                  style={styles.container}
                  contentContainerStyle={styles.container}
                  onScroll={(e) => scrollRef.current === e.nativeEvent.targetContentOffset?.y}>
                  <ResponsiveLayout>
                    <Main>
                      <Slot />
                    </Main>
                  </ResponsiveLayout>
                  <View style={{ backgroundColor: 'red' }}>
                    <Text>footer</Text>
                  </View>
                </ScrollView>
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
          </>
        </Theme>
      </TamaguiProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.black[100],
    flexDirection: 'column',
    // justifyContent: "space-between",
  },
});
// StyleSheet.flatten([styles.container, globalStyles.webkitScrollbar]);
