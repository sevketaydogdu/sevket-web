import { AntDesign } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import React from 'react';
import { Image, Linking, Pressable, Text as RNText } from 'react-native';
import { H1, styled, Text, View, XStack, YStack } from 'tamagui';

import { Button } from '@/components/buttons/styledButton';
import { ParagraphText } from '@/components/ui/text';
import Colors from '@/constants/Colors';

const socialButtons = [
  {
    name: 'github',
    title: 'GitHub',
    href: 'https://github.com/sevketaydogdu',
  },
  {
    name: 'twitter',
    title: 'Twitter',
    href: 'https://twitter.com/sevketaydogdu',
  },
  {
    name: 'linkedin-square',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sevketaydogdu/',
  },
];
const AboutMeWeb = () => {
  const _handlePressSocialButtons = (href: string) => {
    Linking.openURL(href);
  };
  return (
    <View>
      <XStack
        w={256}
        $md={{
          w: '100%',
          px: '$5',
        }}
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
      <XStack ai="center" gap="$4" mt="$6" alignSelf="center">
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
                    <AntDesign name={item.name as any} color={Colors.dark.black[100]} size={24} />{' '}
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
        }}>
        {/* right Side */}
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
            a passionate React Native developer with a love for turning ideas into reality through
            code. With over 2 years of experience in mobile development, I've had the pleasure of
            working on 5+ projects spanning various industries.
            <br />
            <br />
            Before delving into the world of mobile apps, I honed my skills as a UX/UI designer.
            This background has given me a unique perspective on crafting seamless user experiences
            that blend functionality with aesthetics.
            <br />
            <br />
            Born in 1993, I'm a lifelong learner who thrives on staying ahead of the curve. I'm
            always eager to explore new technologies, push boundaries, and expand my skill set. If
            you're curious about my coding journey, you can explore my projects on GitHub.
            <br />
            <br />
            Beyond coding, I'm a firm believer in the power of exploration. Whether it's trying out
            a new programming language, experimenting with design concepts, or pursuing
            unconventional hobbies, I'm always up for the challenge.
            <br />
            <br />
            I'm excited to connect with fellow enthusiasts, exchange ideas, and embark on new
            adventures together. Let's create something amazing!
          </ParagraphText>
        </YStack>
      </View>
    </View>
  );
};

export default AboutMeWeb;
