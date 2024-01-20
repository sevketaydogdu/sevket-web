import React, { ReactElement, ReactNode, useState } from 'react';
import { Platform, Pressable } from 'react-native';
import { View, Text } from 'tamagui';
const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedText = Animated.createAnimatedComponent(Text);
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import Colors from '../../constants/Colors';

interface IHoverButtonProps extends React.ComponentProps<typeof View> {
  children: string;
  onPress?: () => void;
  bgHover?: string;
  bgDefault?: string;
  textHover?: string;
  textDefault?: string;
  border?: boolean;
  borderHover?: string;
  borderDefault?: string;
}

const HoverButton: React.FC<IHoverButtonProps> = (prop, { ...props }) => {
  const {
    children,
    onPress,
    bgDefault = Colors.dark.pink,
    bgHover = Colors.dark.white[100],
    textDefault = Colors.dark.white[100],
    textHover = Colors.dark.black[100],
    border = false,
    borderDefault = Colors.dark.white[100],
    borderHover = Colors.dark.pink,
  } = prop;
  const isHover = useSharedValue<boolean>(false);
  const isPressed = useSharedValue<boolean>(false);
  const animatedBgChange = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(isHover.value ? bgHover : bgDefault),
    };
  });
  const animatedTextColorChange = useAnimatedStyle(() => {
    return {
      color: withTiming(isHover.value ? textHover : textDefault),
    };
  });
  const animatedBorderChange = useAnimatedStyle(() => {
    return {
      outlineWidth: withTiming(isHover.value ? (border ? 2 : 0) : 0),
      outlineColor: withTiming(
        isHover.value ? (border ? borderHover : borderDefault) : borderDefault
      ),
      outlineStyle: 'solid',
    };
  });

  const animatedPress = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: Platform.OS === 'web' ? 1 : withTiming(isPressed.value ? 0.97 : 1),
        },
      ],
    };
  });

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => (isHover.value = true)}
      onHoverOut={() => (isHover.value = false)}
      onPressIn={() => (isPressed.value = true)}
      onPressOut={() => (isPressed.value = false)}
      aria-selected={false}>
      <AnimatedView
        style={[animatedBgChange, animatedBorderChange, animatedPress, { borderRadius: 32 }]}
        {...props}
        ai="center">
        <AnimatedText
          p="$2"
          px="$4"
          style={animatedTextColorChange}
          ff="$body"
          fow={Platform.select({ web: '800', native: '400' })}
          fos={Platform.select({ web: '$4', native: '$4' })}>
          {children}
        </AnimatedText>
      </AnimatedView>
    </Pressable>
  );
};

export default HoverButton;
