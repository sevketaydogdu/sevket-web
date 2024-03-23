import { Redirect } from 'expo-router';
import React from 'react';
import { Image, Linking } from 'react-native';
import { View, Text, XStack, H1, styled } from 'tamagui';

import { Button } from '@/components/buttons/styledButton';
import Colors from '@/constants/Colors';
import { detectDeviceOS } from '@/utils/detectDeviceOS';

const iosDownloadLink = 'https://apps.apple.com/app/zikirmatik-kolay-kullan%C4%B1m/id6450431673';
const androidDownloadLink =
  'https://play.google.com/store/apps/details?id=com.antiquemedia.zikirmatik';

const DownloadZikirmatikWeb = () => {
  const device = detectDeviceOS();

  if (device === 'Apple') {
    return <Redirect href={iosDownloadLink} />;
  } else if (device === 'Android') {
    return <Redirect href={androidDownloadLink} />;
  }

  return (
    <View>
      <XStack space="$8" $gtLg={{ flexDirection: 'row' }} $md={{ flexDirection: 'column' }} f={1}>
        <View ov="hidden" br="$12" w="30%" $md={{ w: '100%' }}>
          <Image
            source={require('../../../assets/images/zikirmatikLogo.png')}
            style={{
              width: '100%',
              height: '100%',
              aspectRatio: 1,
            }}
          />
        </View>
        <View f={1}>
          <H1>{content.title}</H1>
          <BodyText mt="$4">{content.body}</BodyText>
          {/* TODO: Store logos will add here */}
          <XStack
            space="$4"
            $gtLg={{ flexDirection: 'row' }}
            $md={{ flexDirection: 'column', space: '$0.75' }}>
            <StoreButton outlined onPress={() => Linking.openURL(content.storeLinks.ios)}>
              <Subtitle>
                Download Ios App from <Subtitle fow="800">App Store</Subtitle>
              </Subtitle>
              <Link mt="$2">{content.storeLinks.ios}</Link>
            </StoreButton>
            <StoreButton outlined onPress={() => Linking.openURL(content.storeLinks.android)}>
              <Subtitle>Download Android App from Google Play</Subtitle>
              <Link mt="$2">{content.storeLinks.ios}</Link>
            </StoreButton>
          </XStack>
        </View>
      </XStack>
    </View>
  );
};

export default DownloadZikirmatikWeb;

const Subtitle = styled(Text, {
  fow: '600',
  col: Colors.dark.gray[200],
});
const BodyText = styled(Text, {
  fos: '$6',
});
const Link = styled(Text, {
  col: '$blue9Light',
  textDecorationLine: 'underline',
  fos: '$5',
});
const StoreButton = styled(Button, {
  target: '_blank',
  fd: 'column',
  space: '$1',
  py: '$4',
  px: '$6',
  mt: '$4',
  bg: '$backgroundFocus',
});

const content = {
  title: 'Easy Dhikr: ZikirMatik',
  body: 'Easy Dhikr: ZikirMatik is a dhikr (remembrance of God) application that allows you to         easily track your dhikr without disturbing and intrusive ads. It automatically records your dhikr, making it easy to keep track of your counts. With its user-friendly interface and convenient features, it is an excellent choice for dhikr. Easy Dhikr: ZikirMatik is a dedicated mobile app that helps you manage your dhikr in a practical way. This user-friendly app enables you to organize your dhikr, auto-save your counts, and delete them whenever you want. Upon entering the app, you can create personalized dhikr lists. The app provides an automatic counter, freeing you from the constant need to count while doing dhikr. One of the standout features of Easy Dhikr: ZikirMatik is the ability to donate your dhikr lists and delete them. If you have completed a dhikr list or wish to reset it, you can easily delete it by donating the list. This flexibility allows users to restart or modify their dhikr lists whenever they want. Easy Dhikr: ZikirMatik prioritizes user privacy. The app does not request personal information and securely stores user data, ensuring that your dhikr experience remains entirely private. The app is an ideal solution for those with busy lifestyles, individuals looking to regularly track their dhikr, or those who want to manage their dhikr in a more systematic way. With Easy Dhikr: ZikirMatik, managing your dhikr is now easier and more convenient. Create your own dhikr lists, track your dhikr with the auto-save feature, and delete your dhikr whenever you like. Download this user-friendly app that accompanies you on your spiritual journey and experience the convenience of organizing your dhikr.',
  storeLinks: {
    ios: iosDownloadLink,
    android: androidDownloadLink,
  },
};
