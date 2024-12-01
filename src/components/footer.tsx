import React from 'react';
import { Text, Footer as FooterTamagui, View, XStack, YStack, styled } from 'tamagui';

import { FooterText, FooterTitleText } from './ui/text';

import Colors from '@/constants/Colors';

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
        p="$10"
        ai="center"
        space="$12"
        br="$2">
        <YStack f={1}>
          <Text $gtMd={{ fos: '$4' }} fos="$7" ff="$heading" col={Colors.dark.orange[200]}>
            Sevket Aydogdu
          </Text>
          <Text
            fos="$8"
            ff="$heading"
            $gtLg={{
              fos: '$9',
            }}
            $md={{
              fos: '$8',
            }}>
            React Native{'\n'}Developer
          </Text>
        </YStack>
        <YStack f={1}>
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
        </YStack>
      </View>
    </FooterTamagui>
  );
};

export default Footer;
