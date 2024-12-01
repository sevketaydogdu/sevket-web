import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import Head from 'expo-router/head';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { Main, TamaguiProvider, Theme, View } from 'tamagui';

import config from '../tamagui.config';

import SHeader from '@/components/customHeader';
import Footer from '@/components/footer';
import { ResponsiveView } from '@/components/responsive-view';
import { DarkTheme } from '@/constants/navigatiorTheme';
import { MainScrollProvider, useMainScroll } from '@/context/main-scroll-provider';
import GithubBadge from '@/screens/home/components/githubBadge';
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
  const [scrollY, setScrollY] = useState(0);

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
    if (Platform.OS === 'web') {
      const handleScroll = () => {
        scrollRef.current = window.scrollY;
        setScrollY(window.scrollY); // Update state to trigger re-render if needed
      };
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <MainScrollProvider scrollY={scrollY}>
        <ThemeProvider value={DarkTheme}>
          <TamaguiProvider config={config}>
            <Theme name="dark">
              <Head>
                <title>Sevket Aydogdu - React Native Developer</title>
              </Head>
              <InnerLayout />
            </Theme>
          </TamaguiProvider>
        </ThemeProvider>
      </MainScrollProvider>
    </>
  );
}

const InnerLayout = () => {
  const { scrollY } = useMainScroll();
  return (
    <>
      {Platform.OS === 'web' ? (
        <>
          <ResponsiveView
            style={{
              paddingHorizontal: 16,
              marginTop: 16,

              // backgroundColor: 'blue',
            }}
            $gtLg={{
              maxWidth: 1024,
              marginHorizontal: 'auto',
              // backgroundColor: 'blue',
            }}
            $gtMd={
              {
                // marginHorizontal: `5rem`,
                // backgroundColor: 'orange',
              }
            }
            $gtSm={{
              padding: 16,
              // backgroundColor: 'purple',
            }}
            $xs={{
              // padding: 16,
              marginTop: 16,
            }}>
            {/* <View
                    f={1}
                    // fd="column"
                    // f={1}
                    // overflow="hidden"
                    // bg="$red10"
                    $gtLg={{
                      // mx: `15rem`,
                      maw: 1200,
                      mx: 'auto',
                    }}
                    $gtMd={{
                      mx: `5rem`,
                      // p: "$2",
                      mt: '$2',
                    }}
                    $gtSm={{ p: '$2', mt: '$2' }}
                    $gtXs={{ p: '$2', mt: '$2' }}
                    $xs={{ p: '$2', mt: '$2' }}> */}
            <div
              style={{
                position: 'sticky',
                top: 0,
                zIndex: 111,
              }}>
              <SHeader scrollY={scrollY} />
            </div>

            <ResponsiveView
              style={{
                flex: 1,
                minHeight: '50vh' as any,
              }}>
              <Slot
                screenOptions={({ route }) => ({
                  title: route.name,
                })}
              />
            </ResponsiveView>

            <Footer />
          </ResponsiveView>
          {/* </View> */}

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
  );
};
