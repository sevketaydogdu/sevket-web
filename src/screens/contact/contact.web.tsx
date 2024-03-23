import { Redirect } from 'expo-router';
import React from 'react';
import { View, Text } from 'tamagui';

import { detectDeviceOS } from '@/utils/detectDeviceOS';

const WebContactScreen = () => {
  const device = detectDeviceOS();

  if (device === 'Apple') {
    return (
      <Redirect href="https://apps.apple.com/app/zikirmatik-kolay-kullan%C4%B1m/id6450431673" />
    );
  }
  return (
    <View>
      <Text>WebContactScreen</Text>
    </View>
  );
};

export default WebContactScreen;
