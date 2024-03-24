import React from 'react';
import { Text, Footer as FooterTamagui, View, XStack, YStack } from 'tamagui';

import Colors from '@/constants/Colors';

const Footer = () => {
  return (
    <FooterTamagui
      // mb="$4"
      // pb="$4"
      //   f={1}
      asChild
      bg={Colors.dark.black[200]}
      // overflow="hidden"
      // $gtLg={{
      //   mx: '15rem',
      // }}

      $md={{
        fd: 'column',
        ai: 'baseline',
        space: '$2',
        br: '$8',
      }}
      fd="row"
      mt="$12"
      p="$10"
      ai="center"
      space="$12"
      br="$2"
      //
    >
      <View>
        <YStack f={1}>
          <Text $gtSm={{ fos: '$6' }} fos="$10" ff="$heading" col={Colors.dark.orange[200]}>
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
          <Text ff="$heading" fos="$8" $md={{ fos: '$6' }}>
            Lorem ipsum dolor sit amet consectetur. Malesuada nibh iaculis eu posuere nisl aliquam
            sed. Sed vitae amet egestas aliquet dui netus.
          </Text>
          <Text fos="$6" fow="200">
            Lorem ipsum dolor sit amet consectetur. Malesuada nibh iaculis eu posuere nisl aliquam
            sed. Sed vitae amet egestas aliquet dui netus.
          </Text>
          <XStack space="$8" mt="$6">
            <YStack>
              <Text fow="800" col={Colors.dark.gray[100]}>
                Projects Done
              </Text>
              <Text ff="$heading" fos="$10" fow="200" col={Colors.dark.orange[200]}>
                5+
              </Text>
            </YStack>
            <YStack>
              <Text fow="800" col={Colors.dark.gray[100]}>
                Experience
              </Text>
              <Text ff="$heading" fos="$10" fow="200" col={Colors.dark.orange[200]}>
                2+ Years
              </Text>
            </YStack>
          </XStack>
        </YStack>
      </View>
    </FooterTamagui>
  );
};

export default Footer;
