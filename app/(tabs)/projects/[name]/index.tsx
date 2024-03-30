import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Linking, Image } from 'react-native';
import { H1, H6, Text, View, XStack } from 'tamagui';

import { projects } from '@/constants/projects';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

const ProjectDetailScreen = () => {
  const { name } = useLocalSearchParams();
  console.log('🚀 ~ ProjectDetailScreen ~ params:', name);
  const project = projects.find(
    (project) => clearSpacesAndSpecialCharacters(project.title) === name
  );
  if (!project) {
    return (
      <View ai="center" f={1} jc="center">
        <H1>Project not found</H1>
        <Text fos="$6">{name}</Text>
      </View>
    );
  }
  return (
    <XStack f={1}>
      <View f={1} ov="hidden" ai="flex-start" jc="flex-start" w="30%">
        <Image
          source={{ uri: project?.imagePath }}
          style={{
            width: '100%',
            aspectRatio: 1,
            borderRadius: 16,
          }}
          resizeMode="cover"
        />
      </View>

      <View f={1} w="70%" p="$6">
        <H1>{project?.title}</H1>
        <H6 mt="$2">{project?.subtitle}</H6>
        <Text mt="$4">{project?.description}</Text>
        <XStack gap="$4" mt="$4">
          <View cursor="pointer" onPress={() => Linking.openURL(project?.storeLinks?.apple)}>
            <Image
              // cursor="pointer"
              source={require('../../../../assets/images/appleBadge.png')}
              style={{
                width: 135,
                height: 40,
              }}
            />
          </View>
          <View cursor="pointer" onPress={() => Linking.openURL(project?.storeLinks?.google)}>
            <Image
              //
              source={require('../../../../assets/images/googlebadge.png')}
              style={{
                width: 135,
                height: 40,
              }}
              // width={135}
              // h={40}
            />
          </View>
        </XStack>
      </View>
    </XStack>
  );
};

export default ProjectDetailScreen;
