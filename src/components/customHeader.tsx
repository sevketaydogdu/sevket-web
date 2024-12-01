import { AntDesign, Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Link, router } from 'expo-router';
import React, { Fragment, MutableRefObject, useState, useLayoutEffect } from 'react';
import {
  Pressable,
  Image,
  Linking,
  Button as RNButton,
  Text,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import Animated, {
  SlideInRight,
  withSpring,
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Button as TButton, Tooltip, XStack, Header, Stack, YStack } from 'tamagui';

import Colors from '../constants/Colors';

import { Button } from '@/components/buttons/styledButton';

const mainMenu = [
  {
    id: 'about',
    name: 'About Me',
    href: '/aboutme/',
  },
  {
    id: 'projects',
    name: 'Projects',
    href: '/projects/',
  },
  {
    id: 'contact',
    name: 'Contact',
    href: '/contact/',
  },
];

const socialButtons = [
  {
    name: 'twitter',
    href: 'https://www.twitter.com/sevketaydogdu',
    title: 'Twitter',
  },
  {
    name: 'github',
    href: 'https://www.github.com/sevketaydogdu',
    title: 'GitHub',
  },
];
interface IHeaderProps {
  scrollY?: number;
}
const SHeader: React.FC<IHeaderProps> = (props) => {
  const { scrollY } = props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (Platform.OS === 'web') {
      document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }
    return () => {
      if (Platform.OS === 'web') {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <>
      <Header
        zIndex={999}
        overflow="hidden"
        //
      >
        <XStack
          pos="sticky"
          top={0}
          left={0}
          f={1}
          br="$12"
          mt={scrollY && scrollY > 0 ? '$4' : 0}
          mb="$4"
          ai="center">
          <BlurView intensity={scrollY && scrollY > 90 ? 70 : 0} style={styles.blurContainer}>
            <Link href="/" asChild>
              <Pressable>
                <Image
                  source={require('../../assets/images/logo-white.png')}
                  style={{
                    width: 110,
                    height: 40,
                  }}
                  resizeMode="cover"
                />
              </Pressable>
            </Link>
            <XStack ai="center" gap="$4" $md={{ display: 'none' }}>
              {mainMenu.map((item) => {
                return (
                  <Link key={item.id} href={item.href as `http${string}`} asChild>
                    <Pressable>
                      {({ hovered }) => (
                        <View
                          style={{
                            backgroundColor: hovered ? Colors.dark.orange[100] : undefined,
                            padding: 12,
                            borderRadius: 32,
                          }}>
                          <Text
                            style={{
                              color: hovered ? Colors.dark.black[200] : Colors.dark.white[100],
                              fontWeight: '600',
                              fontSize: 16,
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      )}
                    </Pressable>
                  </Link>
                );
              })}
            </XStack>
            <XStack
              gap="$2"
              $md={{
                display: 'none',
              }}>
              {socialButtons.map((item) => {
                return (
                  <Fragment key={item.title}>
                    {Platform.OS === 'web' ? (
                      <div key={item.title} title={item.title}>
                        <TButton
                          onPress={() => Linking.openURL(item.href)}
                          icon={<AntDesign name={item.name as any} size={16} color="white" />}
                          circular
                        />
                      </div>
                    ) : (
                      <TButton
                        key={item.title}
                        onPress={() => Linking.openURL(item.href)}
                        icon={<AntDesign name={item.name as any} size={16} color="white" />}
                        circular
                      />
                    )}
                  </Fragment>
                );
              })}
            </XStack>
            <Stack onPress={() => toggleMobileMenu()} $gtMd={{ display: 'none' }}>
              <Feather name="menu" size={24} color="white" />
            </Stack>
          </BlurView>
        </XStack>
      </Header>
      {isMobileMenuOpen && <MobileMenu open={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />}
    </>
  );
};

export default SHeader;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurContainer: {
    flex: 1,
    flexDirection: 'row',

    paddingHorizontal: 24,
    paddingVertical: 12,
    // margin: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderRadius: 60,
  },
});

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
        {mainMenu.map((item) => (
          <Link key={item.id} href={item.href as `http${string}`} asChild>
            <Pressable onPress={() => toggleMenu()}>
              {({ hovered }) => (
                <View
                  style={{
                    backgroundColor: hovered ? Colors.dark.orange[100] : undefined,
                    padding: 12,
                    borderRadius: 32,
                  }}>
                  <Text
                    style={{
                      color: hovered ? Colors.dark.black[200] : Colors.dark.white[100],
                      fontWeight: '600',
                      fontSize: 16,
                    }}>
                    {item.name}
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
            <TButton
              key={item.title}
              onPress={() => Linking.openURL(item.href)}
              icon={<AntDesign name={item.name as any} size={16} color="white" />}
              circular
            />
          ))}
        </XStack>
      </XStack>
      <TButton
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
