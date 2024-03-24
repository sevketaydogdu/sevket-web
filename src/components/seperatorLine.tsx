import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo } from 'react';
import { useWindowDimensions, Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { XStack, View, Text, styled } from 'tamagui';

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
      $gtLg={Platform.select({ web: { mx: `-55rem`, bg: 'red' } })}
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
  col: 'white',
  fos: '$6',
  fow: '$12',
});
