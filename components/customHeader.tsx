import { router, useSegments } from 'expo-router';
import React, { MutableRefObject } from 'react';
import { Pressable, Image, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { XStack, Header, ScrollView, Nav, View } from 'tamagui';

import HoverButton from './buttons/hoverButton';
import Colors from '../constants/Colors';

interface IHeaderProps {
  scrollRef?: MutableRefObject<number | undefined>;
}
const SHeader: React.FC<IHeaderProps> = (props) => {
  const { scrollRef } = props;
  const segments = useSegments();

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
      bg={scrollRef?.current ? 'red' : '$blue10Light'}>
      <XStack
        f={1}
        jc="space-between"
        $gtLg={{
          mx: `20rem`,
          // px: `2rem`,
          // mt: "$2",
        }}
        $gtMd={{
          mx: `5rem`,
          // p: "$2",
          // mt: "$2",
        }}
        $gtSm={{ p: '$2', mx: '$2', mt: '$2' }}
        $gtXs={{ p: '$2', mx: '$2', mt: '$2' }}
        $xs={{ p: '$2', mt: '$2' }}>
        <Pressable onPress={() => handlePressHome()}>
          <Image
            source={require('../assets/images/logo-white.png')}
            style={{
              marginLeft: 16,
              width: 110,
              height: 40,
            }}
            resizeMode="cover"
          />
        </Pressable>
        <XStack space="$2">
          <HoverButton
            bgDefault="transparent"
            textDefault={Colors.dark.white[200]}
            textHover={Colors.dark.black[100]}
            bgHover={Colors.dark.white[100]}>
            About Me
          </HoverButton>
          <HoverButton
            onPress={() => router.push('/works/')}
            bgDefault="transparent"
            textDefault={Colors.dark.white[200]}
            textHover={Colors.dark.black[100]}
            bgHover={Colors.dark.white[100]}>
            Works
          </HoverButton>
        </XStack>
        <HoverButton
          bgDefault={Colors.dark.white[200]}
          textDefault={Colors.dark.black[200]}
          textHover={Colors.dark.black[100]}
          bgHover={Colors.dark.pink}>
          Contact
        </HoverButton>
      </XStack>
    </Header>
  );
};

export default SHeader;
