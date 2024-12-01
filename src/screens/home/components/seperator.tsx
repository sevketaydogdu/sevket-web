import { useMemo } from 'react';
import { LayoutChangeEvent, Platform } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { styled, XStack, View, Text } from 'tamagui';

import Colors from '@/constants/Colors';

const AnimatedXStack = Animated.createAnimatedComponent(XStack);

export const SeperatorLineNew = ({ layoutChangeData }: { layoutChangeData: LayoutChangeEvent }) => {
  const { nativeEvent } = layoutChangeData;
  const { layout } = nativeEvent;
  const { width: screenWidth } = layout;
  // const { width: screenWidth } = useWindowDimensions();

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
      $gtLg={Platform.select({ web: { mx: `-55rem` } })}
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
      // ov="unset"
      // w={screenWidth * 1.1}

      transform={[{ rotate: '-1deg' }]}>
      <View bg={Colors.dark.orange[100]} p="$2" transform={[{ rotate: '2deg' }]}>
        <XStack f={1} ai="center" jc="center" bg="white" p="$2">
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
      </View>
    </View>
  );
};
const AnimateText = styled(Text, {
  col: 'black',
  fos: '$6',
  fow: '$12',
});
