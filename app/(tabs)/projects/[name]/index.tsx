import { Feather } from '@expo/vector-icons';
import { Href, Link, router, useLocalSearchParams } from 'expo-router';
import Head from 'expo-router/head';
import React, { ReactNode } from 'react';
import { Image, View, Platform, StyleSheet, Pressable, Text } from 'react-native';

import Colors from '@/constants/Colors';
import { projects } from '@/constants/projects';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';
import { useBreakPoints } from '@/hooks/useBreakPoints';
import Animated from 'react-native-reanimated';
import { animations } from '@/constants/animations';

export async function generateStaticParams(): Promise<Record<string, string>[]> {
  return projects.map((project) => ({
    name: clearSpacesAndSpecialCharacters(project.title),
  }));
}
const ProjectDetailScreen = () => {
  const { name } = useLocalSearchParams();
  const { isMobile } = useBreakPoints();

  const project = projects.find(
    (project) => clearSpacesAndSpecialCharacters(project.title) === name
  );

  React.useEffect(() => {
    if (window !== undefined) window.scrollTo(0, 0);
  }, []);
  if (!project) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-8xl text-white">Project not found</Text>
        <Text className="text-white">{name}</Text>
      </View>
    );
  }
  return (
    <View style={styles.mainContainer} className=" ">
      <Head>
        <title>{project?.title} | Sevket Aydogdu - React Native Developer</title>
        <meta name="description" content={project.description} />
      </Head>

      <View className="  overflow-hidden items-start justify-start">
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
          <Animated.Text className="text-4xl animate-title flex-1 self-center text-center mt-6 color-white font-bold">
            {project?.title}
          </Animated.Text>

          <Animated.Text className="text-lg animate-title text-center mt-2 self-center color-orange-100">
            {project?.subtitle}
          </Animated.Text>
        </View>
      </View>

      <View style={[styles.contentContainer]} className="animate-title ">
        {project?.storeLinks?.apple ||
        project?.storeLinks?.github ||
        project?.storeLinks?.google ||
        project?.storeLinks?.web ? (
          <StoreButtons
            links={{
              google: project?.storeLinks?.apple ?? '',
              apple: project?.storeLinks?.google ?? '',
              web: project?.storeLinks?.web,
              github: project?.storeLinks?.github,
            }}
          />
        ) : null}

        {project?.description && (
          <Animated.Text
            entering={animations.entering.slideInDown}
            className="text-lg mt-4 color-white"
            style={
              {
                // textAlign: 'center',
              }
            }>
            {project?.description}
          </Animated.Text>
        )}
        {project?.technicalDetails.length && (
          <View className="animate-title">
            <Text className="title-h2 mt-8 mb-8  ">Technical Details</Text>
            <View className=" flex-row gap-2   flex-grow flex-wrap justify-center">
              {project.technicalDetails.map((item, index) => (
                <Text
                  key={index}
                  className="bg-background2 color-white self-start rounded-full px-4 py-3 items-center justify-self-center">
                  {item}
                </Text>
              ))}
            </View>
          </View>
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
    // alignItems: 'center',
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
});

const StoreButtons = ({
  links,
}: {
  links: { google: string; apple: string; web?: string; github?: string };
}) => {
  console.log('🚀 ~ links:', links);
  const renderItem: ReactNode[] = [];
  if (links.apple) {
    renderItem.push(
      <Link
        key={links.apple + 1}
        //@ts-ignore
        href={links.apple}
        target="_blank"
        className="target-blank">
        <Animated.View className="cursor-pointer">
          <Image
            // cursor="pointer"
            source={require('../../../../assets/images/appleBadge.png')}
            style={{
              width: 135,
              height: 40,
            }}
          />
        </Animated.View>
      </Link>
    );
  }

  if (links.google) {
    renderItem.push(
      <Link
        key={links.google + 2}
        //@ts-ignore
        href={links.google}
        target="_blank">
        <Animated.View className="cursor-pointer">
          <Image
            //
            source={require('../../../../assets/images/googlebadge.png')}
            style={{
              width: 135,
              height: 40,
            }}
          />
        </Animated.View>
      </Link>
    );
  }
  if (links.web) {
    renderItem.push(
      <Link
        key={links.web + 3}
        //@ts-ignore
        href={links.web}
        target="_blank">
        <Animated.View
          style={{
            padding: 7,
            backgroundColor: 'white',
            borderRadius: 8,
          }}>
          <Feather name="globe" size={24} />
        </Animated.View>
      </Link>
    );
  }
  if (links.github) {
    renderItem.push(
      <Link
        key={links.github}
        //@ts-ignore
        href={links.github}
        target="_blank">
        <Animated.View
          style={{
            padding: 7,
            backgroundColor: 'white',
            borderRadius: 8,
          }}>
          <Feather name="github" size={24} />
        </Animated.View>
      </Link>
    );
  }
  return <View style={styles.storeBadgesWrapper}>{renderItem}</View>;
};
