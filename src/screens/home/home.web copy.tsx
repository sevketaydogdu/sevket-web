import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useMemo } from 'react';
import { Image, Platform, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Card, H1, H2, H4, Text, View, XStack, styled } from 'tamagui';

import GithubBadge from './components/githubBadge';
import { Title } from '../../../tamagui.config';

import { Button } from '@/components/buttons/styledButton';
import Colors from '@/constants/Colors';
import projects from '@/constants/projects';
import { IProjectTypes } from '@/types/projectTypes';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

export default function WebHomeScreen() {
  const { width: screenWidth } = useWindowDimensions();
  const cardRowForResponsive = useMemo(() => (screenWidth > 960 ? 2 : 2), [screenWidth]);
  const numRows = Math.ceil(projects.length / cardRowForResponsive);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <View f={1}>
      {/* Top section */}
      <TopSection />

      <SeperatorLine />
      <H2 mt="$16" mb="$8" als="center" col={Colors.dark.orange[100]}>
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

const TopSection = () => {
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
  );
};

export const CardComp = ({ index, item }: { index?: number; item: IProjectTypes }) => {
  const { title, subtitle, imagePath } = item;
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
          source={{ uri: imagePath }}
          style={{
            aspectRatio: 1,
            // width: '100%',
            flex: 1,
          }}
        />
      </Card.Footer>
    </Card>
  );
};

const AnimatedXStack = Animated.createAnimatedComponent(XStack);
export const SeperatorLine = () => {
  const { width: screenWidth } = useWindowDimensions();

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
      $gtLg={Platform.select({ web: { mx: `-55rem`, bg: 'red' } })}
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
      <LinearGradient
        colors={['#B16CEA', '#FF5E69', '#FF8A56', '#FFA84B']}
        start={{ x: -90, y: 0 }}
        style={{
          height: Platform.OS === 'web' ? 80 : 40,
          overflow: 'visible',
        }}>
        <XStack
          f={1}
          bg={Colors.dark.white[100]}
          rotate={Platform.select({ native: '-2deg', web: '-1deg' })}
          ai="center"
          jc="center">
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
      </LinearGradient>
    </View>
  );
};
const AnimateText = styled(Text, {
  col: 'black',
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
