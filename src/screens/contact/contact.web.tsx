import Head from 'expo-router/head';
import React from 'react';
import { H2 } from 'tamagui';

import ContactItems, { ContactItemAllProps } from './components/contact-items';
import { View } from 'react-native';

const contactItems: ContactItemAllProps[] = [
  {
    label: 'Email',
    text: 'sevketaydogdu34@gmail.com',
    type: 'copy',
  },
  {
    type: 'link',
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sevketaydogdu/',
    iconName: 'linkedin-square',
  },
  {
    type: 'link',
    text: 'X (Twitter)',
    url: 'https://www.x.com/sevketaydogdu/',
    iconName: 'twitter',
  },
];
const WebContactScreen = () => {
  return (
    <View className="flex-1 h-screen-safe  ">
      <View className="h-full mt-8">
        <Head>
          <title>Contact me | Sevket Aydogdu - React Native Developer</title>
        </Head>

        <View
          className="flex-col flex-1 h-full"
          // $gtLg={{
          //   flexDirection: 'column',
          // }}
        >
          <View className="">
            <H2
              textAlign="center"
              $md={{
                fontSize: 20,
                lineHeight: 24,
              }}
              allowFontScaling>
              You Can Reach Me from these adresses
            </H2>
          </View>
          <View className="flex-1 gap-4 mt-8">
            {contactItems.map((item, index) => (
              <ContactItems key={index} {...item} />
            ))}
            {/* <ContactItems label="Email" text="sevketaydogdu34@gmail.com" type="copy" />
          <ContactItems
            text="LinkedIn"
            type="link"
            url="https://www.linkedin.com/in/sevketaydogdu/"
            iconName="linkedin"
          /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default WebContactScreen;
