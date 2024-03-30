import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { Image, LayoutChangeEvent, Platform, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Card, H2, H4, Text, View, XStack, styled } from 'tamagui';

import { Title } from '../../../tamagui.config';

import { Button } from '@/components/buttons/styledButton';
import Colors from '@/constants/Colors';
import { projects } from '@/constants/projects';
import { IProjectTypes } from '@/types/projectTypes';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

export default function WebHomeScreen() {
  const { width: screenWidth, height } = useWindowDimensions();

  const cardRowForResponsive = useMemo(() => (screenWidth > 960 ? 2 : 2), [screenWidth]);
  const numRows = Math.ceil(projects.length / cardRowForResponsive);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <View
      f={1}
      enterStyle={{
        opacity: 0,
        y: 10,
      }}
      animation="lazy">
      {/* Top section */}
      <View h={height * 0.5} mih={500} bg={Colors.dark.black[200]} br="$6" jc="center">
        <>
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
              y: 128,
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
          <XStack
            mt="$6"
            space="$2"
            als="center"
            enterStyle={{
              opacity: 0,
              scale: 1.5,
              y: 128,
            }}
            animation="lazy">
            <Button white onPress={() => router.push('/works/')}>
              Get In Touch
            </Button>
            <Button outlined onPress={() => router.push('/works/')}>
              View All Projects
            </Button>
          </XStack>
        </>
        {/* <SeperatorLineNew layoutChangeData={layoutChangeData} /> */}
      </View>

      <H2 mt="$10" mb="$8" als="center" col={Colors.dark.orange[100]}>
        Projects
      </H2>

      {Array.from({ length: numRows }).map((row, rowIndex) => (
        <View key={rowIndex}>
          <XStack space={16} f={1} fd="row">
            {/* Slice the projects array for the current row */}
            {projects
              .slice(rowIndex * cardRowForResponsive, (rowIndex + 1) * cardRowForResponsive)
              .map((item) => (
                <CardComp key={item.id.toString() + rowIndex.toString() + '3'} item={item} />
              ))}
          </XStack>
          {rowIndex < 2 - 1 && <View h={16} />}
        </View>
      ))}
    </View>
  );
}

export const CardComp = ({ item }: { item: IProjectTypes }) => {
  const { title, subtitle, imagePath } = item;
  console.log('🚀 ~ CardComp ~ imagePath:', imagePath);
  const uri = clearSpacesAndSpecialCharacters(title);
  return (
    <Card
      cursor="pointer"
      onPress={() => router.push(`/projects/${uri}`)}
      f={1}
      ov="hidden"
      br="$1"
      w="100%"
      $md={{ br: '$2' }}
      animation="bouncy"
      bg={Colors.dark.black[300]}
      hoverStyle={{ scale: 0.97 }}
      enterStyle={{
        transitionDelay: '10000ms',
        opacity: 0,
        y: +20,
      }}>
      <Card.Header
        bg={Colors.dark.black[200]}
        space="$0"
        ai="center"
        p="$5"
        $md={{
          ai: 'baseline',
        }}>
        <H4 ta="center" $md={{ ta: 'left' }} numberOfLines={1}>
          {title}
        </H4>
        <Subtitle mt="$2" numberOfLines={1}>
          {subtitle}
        </Subtitle>
      </Card.Header>
      <Card.Footer>
        <Image
          source={imagePath as any}
          style={{
            aspectRatio: 1,
            width: '100%',
            height: '100%',
            // flex: 1,
          }}
        />
      </Card.Footer>
    </Card>
  );
};

const AnimatedXStack = Animated.createAnimatedComponent(XStack);

export const SeperatorLineNew = ({ layoutChangeData }: { layoutChangeData: LayoutChangeEvent }) => {
  console.log('🚀 ~ SeperatorLineNew ~ layoutChangeData:', layoutChangeData);
  const { nativeEvent } = layoutChangeData;
  const { layout } = nativeEvent;
  const { width: screenWidth } = layout;
  // const { width: screenWidth } = useWindowDimensions();

  const translateX = useSharedValue(-screenWidth);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  useMemo(() => {
    translateX.value = withRepeat(
      withTiming(screenWidth, { duration: 40000, easing: Easing.linear }),
      -1
    );
  }, []);
  return (
    <View
      $gtLg={Platform.select({ web: { mx: `-55rem` } })}
      $gtMd={Platform.select({
        web: {
          mx: `-5rem`,
          // p: "$2",
          mt: '-$2',
        },
      })}
      $gtSm={{
        p: Platform.select({ web: '-$2' }),
        mt: Platform.select({ web: '-$2' }),
      }}
      $gtXs={Platform.select({ web: { p: '-$2', mt: '-$2' } })}
      $xs={Platform.select({ web: { p: '-$2', mt: '-$2' } })}
      // ov="unset"
      // w={screenWidth * 1.1}
      // transform={[translateX:'-2deg']}
    >
      <XStack f={1} ai="center" jc="center">
        <AnimatedXStack style={animatedStyle} space="$4">
          <AnimateText>Discover</AnimateText>
          <AnimateText>Learn</AnimateText>
          <AnimateText>Design</AnimateText>
          <AnimateText>Develop</AnimateText>
          <AnimateText>React Native</AnimateText>
          <AnimateText>Expo</AnimateText>
          <AnimateText>Tamagui</AnimateText>
          <AnimateText>Discover</AnimateText>
          <AnimateText>Learn</AnimateText>
          <AnimateText>Design</AnimateText>
          <AnimateText>Develop</AnimateText>
          <AnimateText>React Native</AnimateText>
          <AnimateText>Expo</AnimateText>
          <AnimateText>Tamagui</AnimateText>
          <AnimateText>Discover</AnimateText>
          <AnimateText>Learn</AnimateText>
          <AnimateText>Design</AnimateText>
          <AnimateText>Develop</AnimateText>
          <AnimateText>React Native</AnimateText>
          <AnimateText>Expo</AnimateText>
          <AnimateText>Tamagui</AnimateText>
        </AnimatedXStack>
      </XStack>
    </View>
  );
};
const AnimateText = styled(Text, {
  col: 'white',
  fos: '$6',
  fow: '$12',
});
// const SText = styled(Text, {
//   ff: '$heading',
//   fow: '600',
//   fos: Platform.OS === 'web' ? '$8' : '$4',
//   col: Colors.dark.black[100],
// });

const Subtitle = styled(Text, {
  fow: '800',
  col: Colors.dark.gray[100],
  fontSize: '$4',
});
