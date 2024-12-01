import { Feather } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';
import Head from 'expo-router/head';
import React, { ReactNode } from 'react';
import { Image, View as RNView, Platform, StyleSheet, Pressable } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { H1, H2, H6, Text, View } from 'tamagui';

import { ParagraphText } from '@/components/ui/text';
import { projects } from '@/constants/projects';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

const ProjectDetailScreen = () => {
  const { name } = useLocalSearchParams();
  const project = projects.find(
    (project) => clearSpacesAndSpecialCharacters(project.title) === name
  );

  React.useEffect(() => {
    if (window !== undefined) window.scrollTo(0, 0);
  }, []);
  if (!project) {
    return (
      <View ai="center" f={1} jc="center">
        <H1>Project not found</H1>
        <Text fos="$6">{name}</Text>
      </View>
    );
  }
  return (
    <RNView style={styles.mainContainer}>
      <Head>
        <title>{project.title} | Sevket Aydogdu - React Native Developer</title>
      </Head>
      <View f={1} ov="hidden" ai="flex-start" jc="flex-start" w="30%">
        <View aspectRatio={1} w="100%" br="$5">
          <Image
            source={project?.imagePath}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 32,
            }}
            resizeMode="cover"
          />
        </View>
      </View>
      <H1 numberOfLines={1} marginTop="$6">
        {project?.title}
      </H1>

      <H6 mt="$2" numberOfLines={1}>
        {project?.subtitle}
      </H6>
      <RNView style={[styles.contentContainer]}>
        <StoreButtons links={project?.storeLinks} />

        <ParagraphText mt="$4" whiteSpace={Platform.OS === 'web' ? 'pre-line' : 'normal'}>
          {project?.description}
        </ParagraphText>
        {project.technicalDetails && (
          <View justifyContent="flex-start" w="100%">
            <H2 marginTop="$6" textAlign="center">
              Technical Details
            </H2>
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
          </View>
        )}
      </RNView>
    </RNView>
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
      <Link
        key={links.apple + 1}
        href={links.apple as `http${string}`}
        asChild
        hrefAttrs={{
          target: '_blank',
          rel: 'noopener noreferrer',
        }}>
        <Pressable>
          <View cursor="pointer">
            <Image
              // cursor="pointer"
              source={require('../../../../assets/images/appleBadge.png')}
              style={{
                width: 135,
                height: 40,
              }}
            />
          </View>
        </Pressable>
      </Link>
    );
  }

  if (links.google) {
    renderItem.push(
      <Link
        key={links.google + 2}
        href={links.google as `http${string}`}
        asChild
        hrefAttrs={{
          target: '_blank',
          rel: 'noopener noreferrer',
        }}>
        <Pressable>
          <View cursor="pointer">
            <Image
              //
              source={require('../../../../assets/images/googlebadge.png')}
              style={{
                width: 135,
                height: 40,
              }}
            />
          </View>
        </Pressable>
      </Link>
    );
  }
  if (links.web) {
    renderItem.push(
      <Link
        key={links.web + 3}
        href={links.web as `http${string}`}
        asChild
        hrefAttrs={{
          target: '_blank',
          rel: 'noopener noreferrer',
        }}>
        <Pressable>
          <RNView
            style={{
              padding: 7,
              backgroundColor: 'white',
              borderRadius: 8,
            }}>
            <Feather name="globe" size={24} />
          </RNView>
        </Pressable>
      </Link>
    );
  }
  return <RNView style={styles.storeBadgesWrapper}>{renderItem}</RNView>;
};
