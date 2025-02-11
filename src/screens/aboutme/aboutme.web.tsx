import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Image, Pressable, ScrollView } from 'react-native';
import { Text, View, XStack, YStack } from 'tamagui';

import { Button } from '@/components/buttons/styledButton';
import { FooterText, FooterTitleText, ParagraphText } from '@/components/ui/text';
import Colors from '@/constants/Colors';
import { socialButtons } from '@/constants/menu';

const aboutMeText = `
a passionate React Native developer with a love for turning ideas into reality through
code. With over +4 years of experience in mobile development, I've had the pleasure of
working on 5+ projects spanning various industries.


Before delving into the world of mobile apps, I honed my skills as a UX/UI designer.
This background has given me a unique perspective on crafting seamless user experiences
that blend functionality with aesthetics.

  Born in 1993, I'm a lifelong learner who thrives on staying ahead of the curve. I'm
always eager to explore new technologies, push boundaries, and expand my skill set. If
you're curious about my coding journey, you can explore my projects on GitHub.

  Beyond coding, I'm a firm believer in the power of exploration. Whether it's trying out
a new programming language, experimenting with design concepts, or pursuing
unconventional hobbies, I'm always up for the challenge.

I'm excited to connect with fellow enthusiasts, exchange ideas, and embark on new
adventures together. Let's create something amazing!
`;
export const categorizedTech = {
  framework: ['React Native', 'Next.js'],
  development: [
    'TypeScript',
    'Es6',
    'Expo',
    'Expo Router',
    'React Navigation',
    'Expo Libraries',
    'GitHub',
  ],
  stateManagement: ['Redux', 'Redux Toolkit', 'Redux Persist', 'Redux Thunk', 'Context API'],
  navigation: ['React Navigation'],
  styling: ['Styled Components', 'Tamagui', 'Native Base'],
  firebase: ['Firebase Analytics', 'Firebase Crashlytics', 'Firebase Firestore'],
  features: ['In App Purchase', 'Reanimated', 'Monorepo'],
  libraries: [
    'Rest API',
    'lottie',
    'netinfo',
    'expo vector icons',
    'react-native-svg',
    'react-native-svg-transformer',
    'i18n',
    'react-native-localize',
    'haptics',
    'react-native-safe-area-context',
    'react-native-reanimated',
    'react-native-gesture-handler',
    'async-storage',
    'expo-secure-store',
    'react-native-clipboard',
    'react-native-device-info',
    'react-native-splash-screen',
    'react-native-webview',
    'react-native-onesignal',
    'react-native-firebase',
    'yup',
    'react-hook-form',
    'moment',
    'patch-package',
    'expo-sqlite',
    'expo-av',
    'expo-notifications',
    'expo-updates',
    'axios',
    'signalr',
    'flash-list',
    'expo-share-intent',
    'expo-linear-gradient',
    'expo-document-picker',
    'expo-image-picker',
    'expo-file-system',
    'lodash',
    'react-native-gifted-charts',
    'react-query',
    'swr',
    'react-native-apple-authentication',
    'react-native-google-signin',
  ],
};
type TechCategory = keyof typeof categorizedTech;

const AboutMeWeb = () => {
  return (
    <View>
      <Head>
        <title>About Me | Sevket Aydogdu - React Native Developer</title>
      </Head>
      <XStack
        w={256}
        $md={{
          w: '100%',
          px: '$5',
        }}
        animation="quick"
        enterStyle={{ opacity: 0, scale: 0.5 }}
        exitStyle={{ opacity: 0, scale: 0.9 }}
        alignSelf="center">
        <Image
          source={require('../../../assets/images/selfie.jpeg')}
          style={{
            height: '100%',
            width: '100%',
            aspectRatio: 1,
            borderRadius: 256,
          }}
        />
      </XStack>
      <View
        flexDirection="row"
        gap="$8"
        f={1}
        my="$6"
        alignSelf="center"
        animation="quick"
        enterStyle={{ opacity: 0, x: 200 }}
        exitStyle={{ opacity: 0, x: 200 }}>
        <YStack>
          <Text>Experience</Text>
          <Text fos="$4">+5 Years</Text>
        </YStack>
        <YStack>
          <Text>Projects Done</Text>
          <Text fos="$4">+5 Projects</Text>
        </YStack>
      </View>

      <XStack
        ai="center"
        gap="$4"
        my="$6"
        alignSelf="center"
        $sm={{
          flexDirection: 'column',
          gap: '$4',
          flex: 1,
        }}
        animation="quick"
        enterStyle={{ opacity: 0, x: -200 }}
        exitStyle={{ opacity: 0, x: -200 }}>
        {socialButtons.map((item, index) => {
          return (
            <Link key={item.title} href={item.href as any} asChild target="_blank">
              <Pressable>
                <Button white>
                  <XStack gap="$2">
                    <AntDesign name={item.name as any} color={Colors.dark.black[100]} size={24} />
                    <Text col="black">{item.title}</Text>
                  </XStack>
                </Button>
              </Pressable>
            </Link>
          );
        })}
      </XStack>
      <View
        mt="$5"
        gap="$4"
        jc="flex-start"
        fd="row"
        $md={{
          fd: 'column',
        }}
        animation="quick"
        enterStyle={{ opacity: 0, y: 200 }}
        exitStyle={{ opacity: 0, y: 200 }}>
        <YStack
          f={1}
          alignItems="center"
          alignSelf="center"
          $md={{
            w: '100%',
            px: '$5',
          }}>
          <Text className="text-center text-xl " whiteSpace="pre-line">
            Welcome to my corner of the web! {`\n`}I'm{' '}
            <Text col="orange" fow="900" whiteSpace="pre-line">
              Sevket Aydogdu,{`\n`}
            </Text>
            {aboutMeText}
          </Text>
          <Link href="/contact" asChild>
            <Pressable>
              {({ hovered }) => (
                <Text
                  style={{
                    backgroundColor: hovered ? Colors.dark.white[200] : Colors.dark.orange[200],
                    padding: 10,
                    borderRadius: 10,
                    color: Colors.dark.black[200],
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop: 20,
                    cursor: 'pointer',
                  }}>
                  Hire Me
                </Text>
              )}
            </Pressable>
          </Link>
          <Text fontWeight="bold" fontFamily="$heading" mt="$4">
            Used Tech.
          </Text>
          <View f={1} width="100%" flexGrow={1}>
            {Object.keys(categorizedTech).map((key) => {
              return (
                <View key={key} gap="$4" mt="$4">
                  <Text textAlign="center" fontWeight="bold" fontSize={20} fontFamily="$heading">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Text>
                  <XStack
                    gap="$2"
                    flexWrap="wrap"
                    justifyContent="center"
                    $md={{
                      gap: '$1',
                    }}>
                    {categorizedTech[key as TechCategory].map((item) => {
                      return (
                        <Button key={item} textAlign="center" white cursor="inherit" margin="$1">
                          {item}
                        </Button>
                      );
                    })}
                  </XStack>
                </View>
              );
            })}
          </View>
        </YStack>
      </View>
    </View>
  );
};

export default AboutMeWeb;
