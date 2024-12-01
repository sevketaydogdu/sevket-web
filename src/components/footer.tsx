import { Link } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
import { Text, Footer as FooterTamagui, View, XStack, YStack } from 'tamagui';

import Colors from '@/constants/Colors';
import { menuItems } from '@/constants/menu';

const Footer = () => {
  return (
    <FooterTamagui
    // mb="$4"
    // pb="$4"

    //
    >
      <View
        f={1}
        fd="row"
        bg={Colors.dark.black[200]}
        // overflow="hidden"
        // $gtLg={{
        //   mx: '15rem',
        // }}
        $md={{
          fd: 'column',
          ai: 'baseline',
          space: '$2',
          br: '$1',
          p: '$4',
        }}
        mt="$12"
        px="$6"
        py="$2"
        ai="center"
        space="$12"
        br="$2">
        <YStack f={1}>
          <Text $gtMd={{ fos: '$8' }} fos="$7" ff="$heading" col={Colors.dark.orange[200]}>
            Sevket Aydogdu
          </Text>
          {/* <Text
            fos="$8"
            ff="$heading"
            $gtLg={{
              fos: '$9',
            }}
            $md={{
              fos: '$8',
            }}>
            React Native{'\n'}Developer
          </Text> */}
        </YStack>
        <XStack
          $md={{
            flexDirection: 'column',
          }}>
          {menuItems.map((item) => (
            <Link key={item.title} href={item.href as `http${string}`} asChild>
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
          ))}
        </XStack>
        {/* <YStack f={1}>
          <Text f={1} ff="$heading" fos="$8" $md={{ fos: '$6' }}>
            Lorem ipsum dolor sit amet consectetur. Malesuada nibh iaculis eu posuere nisl aliquam
            sed. Sed vitae amet egestas aliquet dui netus.
          </Text>
          <Text f={1} fos="$6" fow="200">
            Lorem ipsum dolor sit amet consectetur. Malesuada nibh iaculis eu posuere nisl aliquam
            sed. Sed vitae amet egestas aliquet dui netus.
          </Text>
          <View
            $gtSm={{
              flexDirection: 'row',
              gap: '$8',
            }}
            gap="$2"
            flexDirection="column"
            f={1}
            mt="$6">
            <YStack>
              <FooterTitleText>Experience</FooterTitleText>
              <FooterText fos="$4">+5 Years</FooterText>
            </YStack>
            <YStack>
              <FooterTitleText>Projects</FooterTitleText>
              <FooterText fos="$4">+5 Years</FooterText>
            </YStack>
          </View>
        </YStack> */}
      </View>
    </FooterTamagui>
  );
};

export default Footer;
