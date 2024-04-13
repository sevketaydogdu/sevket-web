import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View, XStack, YStack, useWindowDimensions } from 'tamagui';

import { Button } from '@/components/buttons/styledButton';
import Colors from '@/constants/Colors';

const GithubBadge = () => {
  const { height } = useWindowDimensions();

  return (
    <Button
      pos="fixed"
      b="$0"
      bg={Colors.dark.black[300]}
      m="$4"
      gap="$4"
      ai="center"
      // onMouseEnter={() => setIsHovered(true)}
      hoverStyle={{
        bg: Colors.dark.black[400],
      }}>
      <XStack ai="center">
        <AntDesign name="github" color={Colors.dark.white[100]} size={24} />
        <YStack
          enterStyle={{
            x: -50,
            o: 0,
          }}
          exitStyle={{
            x: 0,
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
      </XStack>
    </Button>
  );
};
export default GithubBadge;
