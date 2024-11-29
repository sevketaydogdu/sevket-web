import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Text, View, XStack, YStack, useWindowDimensions } from 'tamagui';

import Colors from '@/constants/Colors';
import { useMainScroll } from '@/context/main-scroll-provider';

const GithubBadge = () => {
  const { scrollY } = useMainScroll();
  const isVisible = useSharedValue(true);
  useEffect(() => {
    if (Math.abs(scrollY) > 150) {
      isVisible.value = false;
    } else {
      isVisible.value = true;
    }
  }, [scrollY]);

  const animatedStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      transform: [
        { translateX: withSpring(isVisible.value ? 0 : -150, { stiffness: 150, damping: 50 }) },
      ],
      opacity: withSpring(isVisible.value ? 1 : 0), // Corrected typo here
    };
  });

  return (
    <Animated.View style={[animatedStyle, { position: 'fixed', bottom: 0 }]}>
      <Link
        href="https://github.com/sevketaydogdu/sevket-web"
        asChild
        hrefAttrs={{
          target: '_blank',
          rel: 'noopener noreferrer',
        }}>
        <Pressable>
          {({ hovered }) => {
            return (
              <Animated.View
                style={{
                  backgroundColor: hovered ? Colors.dark.black[400] : Colors.dark.black[200],
                  transform: [
                    {
                      scale: hovered ? 0.95 : 1,
                    },
                  ],
                  gap: 2,
                  paddingHorizontal: 24,
                  paddingVertical: 12,
                  flexDirection: 'row',
                  borderRadius: 32,
                  alignItems: 'center',
                  margin: 16,
                }}>
                <AntDesign name="github" color={Colors.dark.white[100]} size={24} />
                <YStack
                  enterStyle={{
                    x: -50,
                    o: 0,
                  }}
                  exitStyle={{
                    x: -50,
                    o: 0,
                  }}
                  animation="lazy">
                  <Text fos="$4" ml="$3">
                    This web site developed with React-Native (Expo)
                  </Text>
                  <Text fos="$3" col={Colors.dark.gray[200]} ml="$3">
                    Click here to see codes of this site
                  </Text>
                </YStack>
              </Animated.View>
            );
          }}
        </Pressable>
      </Link>
      {/* <Button
            pos="fixed"
            b="$0"
            bg={Colors.dark.black[300]}
            m="$4"
            gap="$4"
            ai="center"
            hoverStyle={{
              bg: Colors.dark.black[400],
            }}
          /> */}
    </Animated.View>
  );
};

export default GithubBadge;
