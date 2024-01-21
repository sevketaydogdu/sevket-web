import HoverButton from 'components/buttons/hoverButton';
import Colors from 'constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { Image, Platform, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Card, H3, Section, Text, View, XStack, YStack, styled } from 'tamagui';

import { Title } from '../../../tamagui.config';
import { Button } from 'components/buttons/styledButton';

export default function WebHomeScreen() {
  const { width: screenWidth } = useWindowDimensions();
  const cardRowForResponsive = useMemo(() => (screenWidth > 960 ? 4 : 2), [screenWidth]);

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
      <SeperatorLine />
      <View mt={128}>{rows}</View>
      {/* Before bottom section  */}
      <CountSection />
    </View>
  );
}

const TopSection = () => {
  const { height: screenHeight } = useWindowDimensions();
  return (
    <Section
      style={{
        height: screenHeight / 1.2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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
        <Button white onPress={() => router.push('/works/')}>
          Get In Touch
        </Button>
        <Button outlined onPress={() => router.push('/works/')}>
          View All Works
        </Button>
      </XStack>
    </Section>
  );
};

export const CardComp = ({ index }: { index: number }) => {
  return (
    <Card
      ov="hidden"
      br="$12"
      $md={{ br: '$8' }}
      bg={Colors.dark.black[300]}
      hoverStyle={{ scale: 0.97 }}
      f={1}
      animation="lazy"
      enterStyle={{
        transitionDelay: '10000ms',
        opacity: 0,
        y: +20,
      }}>
      <Card.Header
        bg={Colors.dark.black[200]}
        space="$0"
        ai="center"
        p="$6"
        $md={{
          ai: 'baseline',
        }}>
        <H3 ta="center" $md={{ ta: 'left' }}>
          sads asd asdas asdasdasdasd as
        </H3>
        <Subtitle mt="$3">Subtitle goes here</Subtitle>
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
const CountSection = () => {
  const { width: screenWidth } = useWindowDimensions();

  const isMobile = screenWidth < 960;
  return (
    <View
      $md={{
        fd: 'column',
        ai: 'baseline',
        space: '$2',
        br: '$8',
      }}
      fd="row"
      my="$12"
      p="$10"
      f={1}
      ai="center"
      space="$12"
      br="$12"
      bg={Colors.dark.black[300]}>
      <YStack f={1}>
        <Text $gtSm={{ fos: '$6' }} fos="$10" ff="$heading" col={Colors.dark.orange[100]}>
          Sevket Aydogdu
        </Text>
        <Text
          fos="$11"
          ff="$heading"
          $md={{
            fos: '$8',
          }}>
          React Native{'\n'}Developer
        </Text>
      </YStack>
      <YStack f={1}>
        <Text ff="$heading" fos="$8" $md={{ fos: '$6' }}>
          Lorem ipsum dolor sit amet consectetur. Malesuada nibh iaculis eu posuere nisl aliquam
          sed. Sed vitae amet egestas aliquet dui netus.
        </Text>
        <Text ff="$heading" fos="$6" fow="200">
          Lorem ipsum dolor sit amet consectetur. Malesuada nibh iaculis eu posuere nisl aliquam
          sed. Sed vitae amet egestas aliquet dui netus.
        </Text>
        <XStack space="$6">
          <YStack mt="$4">
            <Text>Projects Done</Text>
            <Text ff="$heading" fos="$10" fow="200">
              5+
            </Text>
          </YStack>
          <YStack mt="$4">
            <Text>Experience</Text>
            <Text ff="$heading" fos="$10" fow="200">
              2+ Years
            </Text>
          </YStack>
        </XStack>
      </YStack>
    </View>
  );
};

const AnimatedXStack = Animated.createAnimatedComponent(XStack);
export const SeperatorLine = () => {
  const { width: screenWidth } = useWindowDimensions();

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
            <AnimateText>Discover</AnimateText>
            <AnimateText>Learn</AnimateText>
            <AnimateText>Design</AnimateText>
            <AnimateText>Develop</AnimateText>
            <AnimateText>React Native</AnimateText>
            <AnimateText>Expo</AnimateText>
            <AnimateText>Tamagui</AnimateText>
            <AnimateText>Discover</AnimateText>
            <AnimateText>Learn</AnimateText>
            <AnimateText>Design</AnimateText>
            <AnimateText>Develop</AnimateText>
            <AnimateText>React Native</AnimateText>
            <AnimateText>Expo</AnimateText>
            <AnimateText>Tamagui</AnimateText>
            <AnimateText>Discover</AnimateText>
            <AnimateText>Learn</AnimateText>
            <AnimateText>Design</AnimateText>
            <AnimateText>Develop</AnimateText>
            <AnimateText>React Native</AnimateText>
            <AnimateText>Expo</AnimateText>
            <AnimateText>Tamagui</AnimateText>
          </AnimatedXStack>
        </XStack>
      </LinearGradient>
    </View>
  );
};
const AnimateText = styled(Text, {
  col: 'black',
  fos: '$6',
  fow: '$12',
});
const SText = styled(Text, {
  ff: '$heading',
  fow: '600',
  fos: Platform.OS === 'web' ? '$8' : '$4',
  col: Colors.dark.black[100],
});

const Subtitle = styled(Text, {
  fow: '800',
  col: Colors.dark.gray[100],
});
