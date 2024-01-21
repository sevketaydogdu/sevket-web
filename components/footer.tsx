import Colors from 'constants/Colors';
import React from 'react';
import { YStack, XStack, Text, Footer as FooterTamagui } from 'tamagui';

const Footer = () => {
  return (
    <FooterTamagui
      fd="row"
      mb="$4"
      pb="$4"
      //   f={1}
      p="$5"
      ai="center"
      br={99}
      asChild
      justifyContent="flex-end"
      bg={Colors.dark.black[200]}
      // overflow="hidden"
      $gtLg={{
        mx: '15rem',
      }}

      //
    >
      <Text>Footer</Text>
    </FooterTamagui>
  );
};

export default Footer;
