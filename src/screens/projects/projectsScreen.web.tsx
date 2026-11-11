import Head from 'expo-router/head';
import React from 'react';
import { View } from 'react-native';

import { Column, Enter, Wide, type } from '@/components/site';
import { ProjectCard } from '@/components/site/projects';
import { Text } from '@/components/ui/text';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';

const ProjectsScreenWeb = () => {
  return (
    <View className="flex-1">
      <Head>
        <title>Work — Şevket Aydoğdu</title>
        <meta
          name="description"
          content="Selected React Native and Expo projects by Şevket Aydoğdu for iOS, Android and the web."
        />
      </Head>

      <Column className="pt-16 md:pt-28">
        <Enter>
          <Text role="heading" aria-level="1" className={type.strong}>
            Work
          </Text>
          <Text className={cn(type.muted, 'mt-1')}>
            Apps I've designed and built. Most run on iOS, Android and the web from one React Native
            codebase; a couple are private client work.
          </Text>
        </Enter>
      </Column>

      <Wide className="mt-14 gap-14 md:mt-20 md:gap-20">
        {projects.map((p, i) => (
          <Enter key={`${p.id}-${p.title}`} step={1 + i}>
            <ProjectCard project={p} />
          </Enter>
        ))}
      </Wide>
    </View>
  );
};

export default ProjectsScreenWeb;
