import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Link, router } from 'expo-router';
import React, { Fragment, MutableRefObject } from 'react';
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
import { Button as TButton, Tooltip, XStack, Header } from 'tamagui';

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
  // const segments = useSegments();

  const handlePressHome = () => {
    // if (segments.length === 0) {
    //   if (scrollRef?.current) scrollRef.current.scrollTo({ y: 0, animated: true });
    // } else {
    router.push('/');
    // }
  };
  return (
    <Header
      // t="$0"
      zIndex={999}
      overflow="hidden"
      //
    >
      <XStack
        pos="sticky"
        top={0}
        left={0}
        f={1}
        // bg={Colors.dark.black[200]}
        // px="$5"
        // py="$4"
        br="$12"
        mt="$4"
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
          <XStack gap="$2">
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
          <Button filled $gtMd={{ display: 'none' }}>
            Mobile Menu
          </Button>
        </BlurView>
      </XStack>
    </Header>
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
