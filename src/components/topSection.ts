import { space } from "@tamagui/themes";
import { router } from "expo-router";
import react from "react";
import { useWindowDimensions } from "react-native";

import { XStack,View } from "tamagui";
import { Button } from '@/components/buttons/styledButton'

export const TopSection = () => {
  const { height: screenHeight } = useWindowDimensions();
  return (
    <View h={screenHeight / 1.2} jc="center" ai="center">
      <Title
        col="white"
        fos="$13"
        $xs={{
          fos: '$9',
          lh: '$9',
        }}
        ta="center"
        enterStyle={{
          opacity: 0,
          scale: 1.5,
          y: -10,
        }}
        animation="lazy">
        <Text
          col={Colors.dark.orange[100]}
          fos="$13"
          fow="900"
          $xs={{
            fos: '$9',
            lh: '$9',
          }}>
          Hello, I am Sevket,
        </Text>
        <br />
        react-native developer
        <br />
        based in Turkey.
      </Title>
      <XStack mt="$6" space="$2" als="center">
        <Button white onPress={() => router.push('/works/')}>
          Get In Touch
        </Button>
        <Button outlined onPress={() => router.push('/works/')}>
          View All Projects
        </Button>
      </XStack>
    </View>
    </View>
  );
};