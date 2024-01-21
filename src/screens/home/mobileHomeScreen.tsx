import HoverButton from 'components/buttons/hoverButton';
import Colors from 'constants/Colors';
import { router } from 'expo-router';
import { Dimensions } from 'react-native';
import { ScrollView, Text, View, XStack, YStack } from 'tamagui';

import { CardComp, SeperatorLine } from './webHomeScreen';
const screenHeight = Dimensions.get('window').height;

export default function MobileHomeScreen() {
  const cardsPerRow = 2;

  const rows = Array.from({ length: 2 }).map((row, rowIndex) => (
    <View key={rowIndex}>
      <XStack space={16}>
        {Array.from({ length: cardsPerRow }).map((item, colIndex) => (
          <CardComp key={colIndex} index={colIndex} />
        ))}
      </XStack>
      {rowIndex < 2 - 1 && <View h={16} />}
    </View>
  ));
  return (
    <View f={1}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Top section */}
        <TopSection />

        <YStack onPress={() => router.push('/(tabs)/projects')} p="$4">
          <Text>BUTON TEST</Text>
        </YStack>
        <SeperatorLine />

        <View mt={128}>{rows}</View>

        <Text>asdasd</Text>
        <Text>asdasd</Text>
        <Text>asdasd</Text>
        <SeperatorLine />
      </ScrollView>
    </View>
  );
}

const TopSection = () => {
  return (
    <View
      style={{
        height: screenHeight / 1.2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        ff="$body"
        fow="500"
        style={{
          fontSize: 32,
          textAlign: 'center',
          color: Colors.dark.orange[100],
        }}
        enterStyle={{
          // opacity: 0,
          scale: 1.5,
          y: -10,
        }}
        animation="quick">
        <Text>Hello, I am Sevket,</Text>
        {'\n'}
        react-native developer
        {'\n'}
        based in Turkey.
      </Text>

      <YStack mt="$6" space="$4">
        <HoverButton
          onPress={() => router.push('/works/')}
          w="100%"
          f={1}
          ai="center"
          bgDefault={Colors.dark.white[100]}
          bgHover={Colors.dark.pink}
          textDefault={Colors.dark.black[100]}
          textHover={Colors.dark.white[100]}>
          Get In Touch
        </HoverButton>
        <HoverButton
          border
          bgDefault="transparent"
          bgHover="transparent"
          textDefault={Colors.dark.white[100]}
          textHover={Colors.dark.white[100]}
          borderDefault="transparent"
          borderHover={Colors.dark.white[200]}>
          View All Works
        </HoverButton>
      </YStack>
    </View>
  );
};
