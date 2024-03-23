import SHeader from '@/components/customHeader';
import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'tamagui';
const NativeContactScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <SHeader />,
        }}
      />
      <SafeAreaView>
        <Text>NativeContactScreen</Text>
      </SafeAreaView>
    </>
  );
};

export default NativeContactScreen;
