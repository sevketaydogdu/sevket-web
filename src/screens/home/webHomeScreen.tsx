import HoverButton from 'components/buttons/hoverButton';
import Colors from 'constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { Dimensions, Image, Platform } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Card, Section, Text, View, XStack, styled } from 'tamagui';

import { Title } from '../../../tamagui.config';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function WebHomeScreen() {
  const cardRowForResponsive = useMemo(() => (screenWidth > 960 ? 3 : 2), [screenWidth]);

  const rows = Array.from({ length: 2 }).map((row, rowIndex) => (
    <View key={rowIndex}>
      <XStack space={16}>
        {Array.from({ length: cardRowForResponsive }).map((item, colIndex) => (
          <CardComp key={colIndex} index={colIndex} />
        ))}
      </XStack>
      {rowIndex < 2 - 1 && <View h={16} />}
    </View>
  ));

  return (
    <View f={1}>
      {/* Top section */}
      <TopSection />
      <View als="center" p="$4" bg={'gold'} pos="sticky">
        <Text>Menu test sticky</Text>
      </View>
      <SeperatorLine />
      <View mt={128}>{rows}</View>
    </View>
  );
}

const TopSection = () => {
  return (
    <Section
      style={{
        height: screenHeight / 1.2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>asdas</Text>
      <Title
        col="white"
        fos={84}
        // fow="$8"
        ta="center"
        enterStyle={{
          // opacity: 0,
          scale: 1.5,
          y: -10,
        }}
        animation="lazy">
        <Title col={Colors.dark.orange[100]}>Hello, I am Sevket,</Title>
        <br />
        react-native developer
        <br />
        based in Turkey.
      </Title>
      <XStack mt="$6" space="$2">
        <HoverButton
          onPress={() => router.push('/works/')}
          bgDefault={Colors.dark.white[100]}
          bgHover={Colors.dark.pink}
          textDefault={Colors.dark.black[100]}
          textHover={Colors.dark.white[100]}>
          Get In Touch
        </HoverButton>
        <HoverButton
          border
          bgDefault="transparent"
          bgHover="transparent"
          textDefault={Colors.dark.white[100]}
          textHover={Colors.dark.white[100]}
          borderDefault="transparent"
          borderHover={Colors.dark.white[200]}>
          View All Works
        </HoverButton>
      </XStack>
    </Section>
  );
};

export const CardComp = ({ index }: { index: number }) => {
  return (
    <Card
      ov="hidden"
      br="$8"
      bg={Colors.dark.black[200]}
      hoverStyle={{ scale: 0.97 }}
      pressStyle={{ scale: 0.97 }}
      f={1}
      animation="lazy"
      enterStyle={{
        transitionDelay: '10000ms',
        opacity: 0,
        y: +20,
      }}>
      <Card.Header bg={Colors.dark.black[200]} space="$0">
        <SText col={Colors.dark.white[200]}>sads asd asdas asdasdasdasd as</SText>
      </Card.Header>
      <Card.Footer>
        <Image
          source={require('../../../assets/images/icon.png')}
          style={{
            width: '100%',
            // height: "auto",
            height: '100%',
            aspectRatio: 1,
            resizeMode: 'center',
          }}
        />
      </Card.Footer>
    </Card>
  );
};

const AnimatedXStack = Animated.createAnimatedComponent(XStack);
export const SeperatorLine = () => {
  const translateX = useSharedValue(-screenWidth);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  useMemo(() => {
    translateX.value = withRepeat(
      withTiming(screenWidth, { duration: 40000, easing: Easing.linear }),
      -1
    );
  }, []);
  return (
    <View
      $gtLg={Platform.select({ web: { mx: `-22rem` } })}
      $gtMd={Platform.select({
        web: {
          mx: `-5rem`,
          // p: "$2",
          mt: '-$2',
        },
      })}
      $gtSm={{
        p: Platform.select({ web: '-$2' }),
        mt: Platform.select({ web: '-$2' }),
      }}
      $gtXs={Platform.select({ web: { p: '-$2', mt: '-$2' } })}
      $xs={Platform.select({ web: { p: '-$2', mt: '-$2' } })}
      ov="unset"
      // w={screenWidth * 1.1}
      // transform={[translateX:'-2deg']}
    >
      <LinearGradient
        colors={['#B16CEA', '#FF5E69', '#FF8A56', '#FFA84B']}
        start={{ x: -90, y: 0 }}
        style={{
          height: Platform.OS === 'web' ? 80 : 40,
          overflow: 'visible',
        }}>
        <XStack
          f={1}
          bg={Colors.dark.white[100]}
          rotate={Platform.select({ native: '-2deg', web: '-1deg' })}
          ai="center"
          jc="center">
          <AnimatedXStack style={animatedStyle} space="$4">
            <SText>Discover</SText>
            <SText>Learn</SText>
            <SText>Design</SText>
            <SText>Develop</SText>
            <SText>React Native</SText>
            <SText>Expo</SText>
            <SText>Tamagui</SText>
            <SText>Discover</SText>
            <SText>Learn</SText>
            <SText>Design</SText>
            <SText>Develop</SText>
            <SText>React Native</SText>
            <SText>Expo</SText>
            <SText>Tamagui</SText>
            <SText>Discover</SText>
            <SText>Learn</SText>
            <SText>Design</SText>
            <SText>Develop</SText>
            <SText>React Native</SText>
            <SText>Expo</SText>
            <SText>Tamagui</SText>
          </AnimatedXStack>
        </XStack>
      </LinearGradient>
    </View>
  );
};

const SText = styled(Text, {
  ff: '$body',
  fow: 'bold',
  fos: Platform.OS === 'web' ? '$7' : '$5',
  col: Colors.dark.black[100],
});
