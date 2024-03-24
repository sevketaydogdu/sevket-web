import { AntDesign } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import React from 'react';
import { Image, Linking } from 'react-native';
import { H1, Text, View, XStack, YStack } from 'tamagui';

import { Button } from '@/components/buttons/styledButton';
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
    href: 'https://twitter.com/aydogdusevket',
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
      <View
        gap="$4"
        jc="flex-start"
        fd="row"
        $md={{
          fd: 'column',
        }}>
        {/* left side */}
        <XStack
          f={0.3}
          w="30%"
          $md={{
            w: '100%',
            px: '$5',
          }}>
          <Image
            source={require('../../../assets/images/selfie.jpeg')}
            style={{
              height: '100%',
              width: '100%',
              aspectRatio: 1,
              borderRadius: 32,
            }}
          />
        </XStack>
        {/* right Side */}
        <YStack
          f={0.7}
          w="70%"
          $md={{
            w: '100%',
            px: '$5',
          }}>
          <H1>About Me</H1>
          <Text style={{ color: 'white' }} mt="$2" fos="$5">
            Welcome to my corner of the web! I'm{' '}
            <Text col="orange" fow="900">
              Sevket Aydogdu
            </Text>
            , a passionate React Native developer with a love for turning ideas into reality through
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
            you're curious about my coding journey, you can explore my projects on GitHub:
            <Text
              cursor="pointer"
              style={{ color: Colors.dark.orange[100] }}
              onPress={() => Linking.openURL('https://github.com/sevketaydogdu')}>
              GitHub Link
            </Text>
            .
            <br />
            <br />
            Beyond coding, I'm a firm believer in the power of exploration. Whether it's trying out
            a new programming language, experimenting with design concepts, or pursuing
            unconventional hobbies, I'm always up for the challenge.
            <br />
            <br />
            I'm excited to connect with fellow enthusiasts, exchange ideas, and embark on new
            adventures together. Let's create something amazing!
          </Text>
        </YStack>
      </View>
      <XStack ai="center" gap="$4" m="$4">
        {socialButtons.map((item, index) => {
          return (
            <Button white key={item.title} onPress={() => _handlePressSocialButtons(item.href)}>
              <XStack gap="$2">
                <AntDesign name={item.name as any} color={Colors.dark.black[100]} size={24} />{' '}
                <Text col="black">{item.title}</Text>
              </XStack>
            </Button>
          );
        })}
      </XStack>
    </View>
  );
};

export default AboutMeWeb;
// <XStack
//   fd="row"
//   $lg={{
//     fd: 'column',
//   }}
//   gap="$6">
//   <Section w="30%" ai="center">
//     <View
//       style={{ width: 512, height: 512 }}
//       br={255}
//       p="$6"
//       overflow="hidden"
//       ai="center"
//       jc="center">
//       <Image source={require('../../../assets/images/icon.png')} />
//     </View>
//   </Section>
//   <Section f={1} fd="column" bg="red">
//     <H1>About Me</H1>
//     <Paragraph fos="$6">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit libero id, aspernatur
//       omnis ea praesentium dolorem sapiente dolore inventore asperiores quidem, iusto non hic
//       explicabo ipsam? Et, placeat laborum. Lorem ipsum dolor sit, amet consectetur adipisicing
//       elit. Alias ullam voluptas excepturi temporibus ipsa accusamus quisquam, necessitatibus,
//       cumque, quasi animi facilis itaque consequatur ut officiis? Ipsam minima itaque totam
//       blanditiis.
//     </Paragraph>
//   </Section>
// </XStack>
