import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Linking } from 'react-native';
import { H1, H6, Image, ScrollView, Text, View, XStack, YStack } from 'tamagui';

import { Link, StoreButton } from '@/components/buttons/storeButton';
import projects from '@/constants/projects.json';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

const ProjectDetailScreen = () => {
  const { name } = useLocalSearchParams();
  console.log('🚀 ~ ProjectDetailScreen ~ params:', name);
  const project = projects.find(
    (project) => clearSpacesAndSpecialCharacters(project.title) === name
  );
  console.log('🚀 ~ ProjectDetailScreen ~ project:', project);
  const appleBadge = '../../../../assets/images/appleBadge.png';
  const googleBadge = '../../../../assets/images/googleBadge.png';
  if (!project) {
    return <H1>Project not found</H1>;
  }
  return (
    <XStack f={1}>
      <View f={1} ov="hidden" ai="flex-start" jc="flex-start" w="30%">
        <Image
          source={{ uri: project?.imagePath }}
          aspectRatio={1}
          width="100%"
          resizeMode="cover"
          br="$4"
        />
      </View>

      <View f={1} w="70%" p="$6">
        <H1>{project?.title}</H1>
        <H6 mt="$2">{project?.subtitle}</H6>
        <Text mt="$4">{project?.description}</Text>
        <XStack gap="$4" mt="$4">
          <Image
            cursor="pointer"
            source={{ uri: appleBadge }}
            width={135}
            h={40}
            onPress={() => Linking.openURL(project?.storeLinks?.apple)}
          />
          <Image
            cursor="pointer"
            source={{ uri: googleBadge }}
            width={135}
            h={40}
            onPress={() => Linking.openURL(project?.storeLinks?.google)}
          />
        </XStack>
      </View>
    </XStack>
  );
};

export default ProjectDetailScreen;
