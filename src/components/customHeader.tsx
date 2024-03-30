import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { MutableRefObject } from 'react';
import { Pressable, Image, Linking, Button as RNButton, Text, Platform } from 'react-native';
import {
  Button as TButton,
  Tooltip,
  XStack,
  Header,
  View,
  Paragraph,
  TooltipProps,
  TooltipGroup,
  YStack,
  TooltipSimple,
} from 'tamagui';

import Colors from '../constants/Colors';

import { Button } from '@/components/buttons/styledButton';
const socialButtons = [
  {
    name: 'twitter',
    href: 'https://www.twitter.com/sevketaydogdu',
    title: 'Twitter',
  },
  // {
  //   name: 'instagram',
  //   href: 'https://www.instagram.com/aydogdusevket',
  // },
  {
    name: 'github',
    href: 'https://www.github.com/sevketaydogdu',
    title: 'GitHub',
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
      pos="static"
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
              <>
                {Platform.select({
                  web: (
                    <div title={item.title}>
                      <TButton
                        onHoverIn={(event) => console.log('event', event)}
                        key={item.title}
                        onPress={() => Linking.openURL(item.href)}
                        icon={<AntDesign name={item.name as any} size={16} color="white" />}
                        circular
                      />
                    </div>
                  ),
                  native: (
                    <TButton
                      onHoverIn={(event) => console.log('event', event)}
                      key={item.title}
                      onPress={() => Linking.openURL(item.href)}
                      icon={<AntDesign name={item.name as any} size={16} color="white" />}
                      circular
                    />
                  ),
                })}
              </>
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
