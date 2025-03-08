import { Feather } from '@expo/vector-icons';
import { Href, Link, router, useLocalSearchParams } from 'expo-router';
import Head from 'expo-router/head';
import React, { ReactNode } from 'react';
import { Image, View, Platform, StyleSheet, Pressable, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';

import Colors from '@/constants/Colors';
import { projects } from '@/constants/projects';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';
import { useBreakPoints } from '@/hooks/useBreakPoints';
import Animated from 'react-native-reanimated';
import { animations } from '@/constants/animations';

const ProjectDetailScreen = () => {
  const { name } = useLocalSearchParams();
  const { isMobile } = useBreakPoints();

  const project = projects.find(
    (project) => clearSpacesAndSpecialCharacters(project.title) === name
  );

  React.useEffect(() => {
    if (window !== undefined) window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (window !== undefined) window.scrollTo(0, 0);
  }, []);
  // if (!project) {
  //   return (
  //     <View className="flex-1 items-center justify-center">
  //       <Text className="text-8xl text-white">Project not found</Text>
  //       <Text className="text-white">{name}</Text>
  //     </View>
  //   );
  // }
  return (
    <View style={styles.mainContainer}>
      <Head>
        <title>{project?.title} | Sevket Aydogdu - React Native Developer</title>
      </Head>

      <View className="flex-1 overflow-hidden items-start justify-start">
        <Animated.View
          className="self-center aspect-square rounded-2xl"
          entering={animations.entering.fade}>
          <Image
            source={project?.imagePath}
            style={{
              width: 128,
              height: 128,
              // height: '50%',
              borderRadius: 24,
              borderWidth: StyleSheet.hairlineWidth * 2,
              borderColor: Colors.dark.orange[100],
            }}
            resizeMode="cover"
          />
        </Animated.View>
        <View className="self-center">
          <Animated.Text
            entering={animations.entering.slideInRight}
            className="text-4xl flex-1 self-center text-center mt-6 color-white font-bold"
            // numberOfLines={1}
            // marginTop="$6"
            // style={{
            //   flex: 1,
            //   alignSelf: 'center',
            //   textAlign: 'center',
            // }}
          >
            {project?.title}
          </Animated.Text>

          <Animated.Text
            entering={animations.entering.slideInLeft}
            className="text-xl text-center mt-2 self-center color-white"
            // style={{
            //   alignSelf: 'center',
            // }}
            // mt="$2"
            // ta="center"
          >
            {project?.subtitle}
          </Animated.Text>
        </View>
      </View>

      <View style={[styles.contentContainer]}>
        <StoreButtons
          links={{
            google: project?.storeLinks?.apple ?? '',
            apple: project?.storeLinks?.google ?? '',
            web: project?.storeLinks?.web,
          }}
        />

        <Animated.Text
          entering={animations.entering.slideInDown}
          className="text-lg mt-4 color-white"
          // mt="$4"
          style={{
            // whiteSpace:Platform.OS === 'web' ? 'pre-line' : 'normal',
            textAlign: 'center',
          }}>
          {project?.description}
        </Animated.Text>
        {project?.technicalDetails && (
          <Animated.View
            className="justify-start w-full"
            entering={animations.entering.slideInDown}>
            <Text className="text-2xl flex-1 self-center text-center mt-6 color-white font-bold">
              Technical Details
            </Text>
            <Markdown
              style={{
                heading1: {
                  fontSize: 24,
                  color: 'white',
                },
                heading2: {
                  fontSize: 20,
                  color: 'white',
                },
                heading3: {
                  fontSize: 24,
                  color: 'white',
                },
                heading4: {
                  fontSize: 24,
                  color: 'white',
                },
                bullet_list: {
                  color: 'white',
                  fontSize: 22,
                },
              }}>
              {project?.technicalDetails}
            </Markdown>
          </Animated.View>
        )}
      </View>
    </View>
  );
};

export default ProjectDetailScreen;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 24,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
  storeBadgesWrapper: {
    gap: 16,
    marginTop: 16,
    flexDirection: 'row',
  },
  markDown: {
    backgroundColor: 'red',
  },
});

const StoreButtons = ({ links }: { links: { google: string; apple: string; web?: string } }) => {
  const renderItem: ReactNode[] = [];
  if (links.apple) {
    renderItem.push(
      <Link key={links.apple + 1} href={links.apple as Href} asChild target="_blank">
        <Pressable>
          <Animated.View className="cursor-pointer" entering={animations.entering.slideInLeft}>
            <Image
              // cursor="pointer"
              source={require('../../../../assets/images/appleBadge.png')}
              style={{
                width: 135,
                height: 40,
              }}
            />
          </Animated.View>
        </Pressable>
      </Link>
    );
  }

  if (links.google) {
    renderItem.push(
      <Link key={links.google + 2} href={links.google as Href} asChild target="_blank">
        <Pressable>
          <Animated.View className="cursor-pointer" entering={animations.entering.slideInRight}>
            <Image
              //
              source={require('../../../../assets/images/googlebadge.png')}
              style={{
                width: 135,
                height: 40,
              }}
            />
          </Animated.View>
        </Pressable>
      </Link>
    );
  }
  if (links.web) {
    renderItem.push(
      <Link key={links.web + 3} href={links.web as Href} asChild target="_blank">
        <Pressable>
          <Animated.View
            entering={animations.entering.slideInRight}
            style={{
              padding: 7,
              backgroundColor: 'white',
              borderRadius: 8,
            }}>
            <Feather name="globe" size={24} />
          </Animated.View>
        </Pressable>
      </Link>
    );
  }
  return <View style={styles.storeBadgesWrapper}>{renderItem}</View>;
};
