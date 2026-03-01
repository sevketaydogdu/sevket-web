import { AntDesign } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import { socialButtons } from '@/constants/menu';
import ExperienceSection from '../home/components/ExperienceSection';

const aboutMeText = `
a passionate React Native developer with a love for turning ideas into reality through
code. With over +6 years of experience in mobile development, I've had the pleasure of
working on 10+ projects spanning various industries.


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
  framework: ['React Native', 'Expo', 'Next.js', 'React', 'Vite'],
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
  styling: ['StyleSheet API', 'NativeWind', 'Styled Components', 'Tamagui', 'Native Base'],
  firebase: ['Firebase Analytics', 'Firebase Crashlytics', 'Firebase Firestore'],
  features: ['In App Purchase', 'Reanimated', 'Monorepo'],
  libraries: [
    'axios',
    'react-query',
    'swr',
    'microsoft/signalr',
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
    'signalr',
    'flash-list',
    'expo-share-intent',
    'expo-linear-gradient',
    'expo-document-picker',
    'expo-image-picker',
    'expo-file-system',
    'lodash',
    'react-native-gifted-charts',
    'react-native-apple-authentication',
    'react-native-google-signin',
  ],
};

type TechCategory = keyof typeof categorizedTech;

const AboutMeWeb = () => {
  return (
    <View className="flex-1 section-container">
      <Head>
        <title>About Me | Sevket Aydogdu - React Native Developer</title>
      </Head>
      <View
        className="w-[256px]   px-{5} self-center"

        // enterStyle={{ opacity: 0, scale: 0.5 }}
        // exitStyle={{ opacity: 0, scale: 0.9 }}
        // alignSelf="center"
      >
        <Image
          source={require('../../../assets/images/selfie.jpeg')}
          style={{
            height: 256,
            width: 256,
            aspectRatio: 1,
            borderRadius: 256,
          }}
        />
      </View>
      <View
        className="flex-row gap-8 self-center my-8 "
        // flexDirection="row"
        // gap="$8"
        // f={1}
        // my="$6"
        // alignSelf="center"
        // animation="quick"
        // enterStyle={{ opacity: 0, x: 200 }}
        // exitStyle={{ opacity: 0, x: 200 }}
      >
        <View className="flex-col  items-center self-center">
          <Text className="color-white">Experience</Text>
          <Text className="font-bold color-white">+6 Years</Text>
        </View>
        <View className="flex-col   self-center items-center">
          <Text className="color-white">Projects Done</Text>
          <Text className="font-bold color-white">+10 Projects</Text>
        </View>
      </View>

      <View
        className="flex-row gap-4 self-center my-6"
        // ai="center"
        // gap="$4"
        // my="$6"
        // alignSelf="center"
        // $sm={{
        //   flexDirection: 'column',
        //   gap: '$4',
        //   flex: 1,
        // }}
        // animation="quick"
        // enterStyle={{ opacity: 0, x: -200 }}
        // exitStyle={{ opacity: 0, x: -200 }}
      >
        {socialButtons.map((item, index) => {
          return (
            <Link
              key={item.title}
              href={item.href as Href}
              asChild
              target="_blank"
              rel="noopener noreferrer"
              className="group">
              <Pressable>
                <View className="bg-background2 group-hover:bg-orange-950 flex-row gap-2 items-center justify-center px-4 py-2 rounded-full">
                  <AntDesign
                    name={item.name as any}
                    className="text-white group-hover:text-orange-300"
                    size={24}
                  />
                  <Text className="text-white group-hover:text-orange-300">{item.title}</Text>
                </View>
              </Pressable>
            </Link>
          );
        })}
      </View>
      <View
        className="flex-col gap-4 self-center justify-start  mt-5 "
        // mt="$5"
        // gap="$4"
        // jc="flex-start"
        // fd="row"
        // $md={{
        //   fd: 'column',
        // }}
        // animation="quick"
        // enterStyle={{ opacity: 0, y: 200 }}
        // exitStyle={{ opacity: 0, y: 200 }}
      >
        <View
          className="flex-col gap-4 self-center"
          // f={1}
          // alignItems="center"
          // alignSelf="center"
          // $md={{
          //   w: '100%',
          //   px: '$5',
          // }}
        >
          <Text className="text-center text-xl text-white">
            Welcome to my corner of the web! {`\n`}I'm{' '}
            <Text className="color-orange-500 font-bold">Sevket Aydogdu,{`\n`}</Text>
            {aboutMeText}
          </Text>
          <Link href="/contact" asChild>
            <Pressable className="self-center">
              {({ hovered }) => (
                <Text
                  className="text-white self-center text-lg"
                  style={{
                    backgroundColor: hovered ? Colors.dark.white[200] : Colors.dark.orange[200],
                    padding: 10,
                    borderRadius: 10,
                    color: Colors.dark.black[200],
                    fontWeight: 'bold',
                    marginTop: 20,
                    cursor: 'pointer',
                  }}>
                  Hire Me
                </Text>
              )}
            </Pressable>
          </Link>
          <ExperienceSection />
          <Text className="title-h2 mt-12">Used Tech.</Text>
          <View
            // f={1} width="100%" flexGrow={1}
            className="flex-col gap-4 self-center flex-grow items-center ">
            {Object.keys(categorizedTech).map((key) => {
              return (
                <View key={key} className="mt-4 gap-4  items-center justify-center">
                  <Text className="text-center font-bold text-2xl text-white  ">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Text>
                  <View
                    className="flex-row gap-2 self-center flex-wrap items-center justify-center"
                    // gap="$2"
                    // flexWrap="wrap"
                    // justifyContent="center"
                    // $md={{
                    //   gap: '$1',
                    // }}
                  >
                    {categorizedTech[key as TechCategory].map((item) => {
                      return (
                        <View
                          key={item}
                          className="bg-background2 rounded-full px-4 py-3 items-center justify-self-center">
                          <Text key={item} className="text-center text-white">
                            {item}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutMeWeb;
