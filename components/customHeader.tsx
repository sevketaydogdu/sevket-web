import { Button } from 'components/buttons/styledButton';
import { router, useSegments } from 'expo-router';
import React, { MutableRefObject } from 'react';
import { Pressable, Image } from 'react-native';
import { XStack, Header, View, Text, styled } from 'tamagui';

import HoverButton from './buttons/hoverButton';
import Colors from '../constants/Colors';

interface IHeaderProps {
  scrollRef?: MutableRefObject<number | undefined>;
}
const SHeader: React.FC<IHeaderProps> = (props) => {
  const { scrollRef } = props;
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
      t="$0"
      w="100%"
      zIndex={999}
      // bg={scrollRef?.current ? 'red' : '$blue10Light'}
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
        $gtLg={{
          mx: '15rem',
        }}
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
            source={require('../assets/images/logo-white.png')}
            style={{
              width: 110,
              height: 40,
            }}
            resizeMode="cover"
          />
        </Pressable>
        <XStack ai="center" $md={{ display: 'none' }}>
          <Button onPress={handlePressAboutMe}>About Me</Button>
          <Button onPress={handlePressProjects}>Projects</Button>
        </XStack>
        <Button filled $md={{ display: 'none' }} onPress={handlePressContact}>
          Contact
        </Button>
        <Button filled $gtMd={{ display: 'none' }}>
          Mobile Menu
        </Button>
      </XStack>
    </Header>
  );
};

export default SHeader;
