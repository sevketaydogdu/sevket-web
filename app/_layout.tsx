import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import Head from 'expo-router/head';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Appearance,
  ColorSchemeName,
  Platform,
  useColorScheme,
  View,
} from 'react-native';
import { TamaguiProvider, Theme } from 'tamagui';

import config from '../tamagui.config';

import { DarkTheme } from '@/constants/navigatiorTheme';
import '../global.css';

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
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  return <InnerRootLayout />;
}
const InnerRootLayout = () => {
  const colorScheme = useColorScheme();
  if (Platform.OS === 'web') {
    Appearance.setColorScheme = (scheme) => {
      if (scheme) {
        document.documentElement.setAttribute('data-theme', scheme);
      }
    };

    Appearance.getColorScheme = (): ColorSchemeName => {
      const systemValue = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
      const userValue = document.documentElement.getAttribute('data-theme');
      return (userValue && userValue !== 'null' ? userValue : systemValue) as ColorSchemeName;
    };

    Appearance.addChangeListener = (listener) => {
      // Listen for changes of system value
      interface ColorSchemeChangeListener {
        (event: { colorScheme: ColorSchemeName }): void;
      }

      interface SystemValueListenerEvent {
        matches: boolean;
      }

      const systemValueListener = (e: SystemValueListenerEvent): void => {
        const newSystemValue: ColorSchemeName = e.matches ? 'dark' : 'light';
        const userValue = document.documentElement.getAttribute('data-theme');
        listener({
          colorScheme:
            userValue && userValue !== 'null' ? (userValue as ColorSchemeName) : newSystemValue,
        });
      };
      const systemValue = window.matchMedia('(prefers-color-scheme: dark)');
      systemValue.addEventListener('change', systemValueListener);

      // Listen for changes of user set value
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.attributeName === 'data-theme') {
            listener({ colorScheme: Appearance.getColorScheme() });
          }
        }
      });
      observer.observe(document.documentElement, { attributes: true });

      function remove(): void {
        systemValue.removeEventListener('change', systemValueListener);
        observer.disconnect();
      }

      return { remove };
    };
  }
  return (
    <View className=" flex-1">
      <TamaguiProvider config={config}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Theme name="dark">
            <Slot
              screenOptions={({ route }) => ({
                title: route.name,
              })}
            />
            {/* <>
            <StatusBar style="light" />
            <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            </Stack>
            </> */}
          </Theme>
        </ThemeProvider>
      </TamaguiProvider>
    </View>
  );
};
