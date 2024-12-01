import { AntDesign } from '@expo/vector-icons';
import { Link, useNavigation } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Image, Pressable } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Text, View, XStack, YStack } from 'tamagui';

import { Button } from '@/components/buttons/styledButton';
import { FooterText, FooterTitleText, ParagraphText } from '@/components/ui/text';
import Colors from '@/constants/Colors';
import { socialButtons } from '@/constants/menu';

const aboutMeText = `
a passionate React Native developer with a love for turning ideas into reality through
code. With over 2 years of experience in mobile development, I've had the pleasure of
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
  framework: ['React Native'],
  development: ['Expo', 'Expo Router', 'Expo Libraries', 'TypeScript'],
  stateManagement: ['Redux', 'Redux Toolkit', 'Redux Persist', 'Redux Thunk', 'Context API'],
  navigation: ['React Navigation'],
  styling: ['Styled Components', 'Tamagui', 'Native Base'],
  firebase: ['Firebase Analytics', 'Firebase Crashlytics', 'Firebase Firestore'],
  features: ['In App Purchase', 'Reanimated'],
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
          <FooterTitleText>Experience</FooterTitleText>
          <FooterText fos="$4">+5 Years</FooterText>
        </YStack>
        <YStack>
          <FooterTitleText>Projects Done</FooterTitleText>
          <FooterText fos="$4">+5 Projects</FooterText>
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
            <Link
              key={item.title}
              href={item.href as `http${string}`}
              asChild
              hrefAttrs={{
                target: '_blank',
                rel: 'noopener noreferrer',
              }}>
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
          <ParagraphText style={{ color: 'white' }} whiteSpace="pre-line">
            Welcome to my corner of the web! {`\n`}I'm{' '}
            <ParagraphText col="orange" fow="900" whiteSpace="pre-line">
              Sevket Aydogdu,{`\n`}
            </ParagraphText>
            {aboutMeText}
          </ParagraphText>
          <ParagraphText fontWeight="bold" fontFamily="$heading" mt="$4">
            Used Tech.
          </ParagraphText>
          <View f={1} width="100%" flexGrow={1}>
            {Object.keys(categorizedTech).map((key) => {
              return (
                <View key={key} gap="$4" mt="$4">
                  <ParagraphText fontWeight="bold" fontSize={20} fontFamily="$heading">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </ParagraphText>
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
