import { AntDesign, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { Pressable, Linking } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { View, YStack, XStack, Text, Button } from 'tamagui';

import Colors from '@/constants/Colors';
import { menuItems, socialButtons } from '@/constants/menu';

interface MobileMenuProps {
  open: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, toggleMenu }) => {
  const translateY = useSharedValue(-100);
  const opacity = useSharedValue(0);

  useLayoutEffect(() => {
    if (open) {
      translateY.value = withSpring(0, {
        stiffness: 100,
        damping: 20,
      });
      opacity.value = withTiming(1);
    } else {
      translateY.value = withSpring(-100);
      opacity.value = withTiming(0);
    }
  }, [open]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        {
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          zIndex: 999,
          backgroundColor: Colors.dark.black[200],
          padding: 20,
          justifyContent: 'space-between',
        },
        animatedStyles,
      ]}>
      <View />
      <YStack ai="center" gap="$4" mb="$4">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.href as `http${string}`} asChild>
            <Pressable onPress={() => toggleMenu()} style={{ width: '100%' }}>
              {({ hovered }) => (
                <View
                  style={{
                    backgroundColor: hovered ? Colors.dark.orange[100] : undefined,
                    padding: 12,
                    borderRadius: 32,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: hovered ? Colors.dark.black[200] : Colors.dark.white[100],
                      fontWeight: '600',
                      fontSize: 16,
                    }}>
                    {item.title}
                  </Text>
                </View>
              )}
            </Pressable>
          </Link>
        ))}
      </YStack>
      <XStack ai="center" jc="space-between" pt="$4" alignSelf="center">
        <XStack gap="$2">
          {socialButtons.map((item) => (
            <Button
              key={item.title}
              onPress={() => Linking.openURL(item.href)}
              icon={<AntDesign name={item.name as any} size={16} color="white" />}
              circular
            />
          ))}
        </XStack>
      </XStack>
      <Button
        size={48}
        icon={<Feather name="x" size={24} color="white" />}
        circular
        onPress={toggleMenu}
        alignSelf="center"
      />
      <View />
    </Animated.View>
  );
};

export default MobileMenu;
