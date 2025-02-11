import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import React, { useState, useLayoutEffect } from 'react';
import { Pressable, Image, Text, Platform, StyleSheet, View } from 'react-native';
import { XStack, Header, Stack } from 'tamagui';

import MobileMenu from './mobile-menu';
import LinkButton from './ui/link-button';
import Colors from '../constants/Colors';

import { menuItems, socialButtons } from '@/constants/menu';

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
              {menuItems.map((item, index) => {
                return (
                  <Link
                    key={item.id + index.toString()}
                    href={item.href as `http${string}`}
                    asChild>
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
                            {item.title}
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
                  <LinkButton circular href={item.href} key={item.href} iconName={item.name} />
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
