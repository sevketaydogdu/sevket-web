import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { MutableRefObject } from 'react';
import { Pressable, Image, Linking } from 'react-native';
import { XStack, Header, View } from 'tamagui';

import Colors from '../constants/Colors';

import { Button } from '@/components/buttons/styledButton';
const socialButtons = [
  {
    name: 'twitter',
    href: 'https://www.twitter.com/sevketaydogdu',
  },
  // {
  //   name: 'instagram',
  //   href: 'https://www.instagram.com/aydogdusevket',
  // },
  {
    name: 'github',
    href: 'https://www.github.com/sevketaydogdu',
  },
];
interface IHeaderProps {
  scrollRef?: MutableRefObject<number | undefined>;
}
const SHeader: React.FC<IHeaderProps> = (props) => {
  // const { scrollRef } = props;
  // const segments = useSegments();
  const handlePressAboutMe = () => {
    router.push('/aboutme/');
  };
  const handlePressProjects = () => {
    router.push('/projects/');
  };
  const handlePressContact = () => {
    router.push('/contact/');
  };
  const handlePressHome = () => {
    // if (segments.length === 0) {
    //   if (scrollRef?.current) scrollRef.current.scrollTo({ y: 0, animated: true });
    // } else {
    router.push('/');
    // }
  };
  return (
    <Header
      pos="sticky"
      // t="$0"
      zIndex={999}
      // overflow="hidden"
      mb="$6">
      <XStack
        f={1}
        jc="space-between"
        bg={Colors.dark.black[200]}
        px="$5"
        py="$4"
        br="$12"
        mt="$4"
        // $gtLg={{
        //   mx: '15rem',
        // }}
        // $gtLg={{
        //   mx: `15rem`,
        //   // px: `2rem`,
        // }}
        // $gtMd={{
        //   mx: `5rem`,
        //   // p: "$2",
        //   mt: '$2',
        // }}
        // $gtSm={{
        //   p: '$2',
        //   mt: '$2',
        // }}
        // $gtXs={{ p: '$2', mt: '$2' }}
        // $xs={{ p: '$2', mt: '$2' }}
        ai="center">
        <Pressable onPress={() => handlePressHome()}>
          <Image
            source={require('../../assets/images/logo-white.png')}
            style={{
              width: 110,
              height: 40,
            }}
            resizeMode="cover"
          />
        </Pressable>
        <XStack ai="center" $md={{ display: 'none' }}>
          <Button onPress={handlePressAboutMe} ta="center" jc="center" ai="center">
            About Me
          </Button>
          <Button onPress={handlePressProjects}>Projects</Button>
          <Button onPress={handlePressContact}>Contact asd</Button>
        </XStack>
        <XStack gap="$2">
          {socialButtons.map((item) => {
            return (
              <View
                aria-label={item.name}
                id={item.name}
                onPress={() => Linking.openURL(item.href)}
                p="$2"
                key={item.name}
                br="$4"
                cursor="pointer"
                accessibilityLabel="github"
                hoverStyle={{
                  bg: Colors.dark.black[100],
                }}>
                <AntDesign name={item.name as any} size={16} color="white" />
              </View>
            );
          })}
        </XStack>
        <Button filled $gtMd={{ display: 'none' }}>
          Mobile Menu
        </Button>
      </XStack>
    </Header>
  );
};

export default SHeader;
