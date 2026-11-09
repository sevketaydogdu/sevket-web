import Head from 'expo-router/head';
import React from 'react';
import { View } from 'react-native';

import { Frame, SectionLabel, type } from '@/components/site';
import { ProjectTile } from '@/components/site/projects';
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

      <Frame className="pt-6 md:pt-16">
        <Text className={type.title}>Work</Text>
        <Text className={cn(type.prose, 'mt-8 max-w-xl text-muted')}>
          A selection of apps I've designed and built. Most run on iOS, Android and the web from one
          React Native codebase; a couple are private client work.
        </Text>
      </Frame>

      <Frame className="mt-20 md:mt-28">
        <SectionLabel aside={`${projects.length} projects`}>Index</SectionLabel>
        <View className="mt-8 flex-row flex-wrap gap-x-[4%] gap-y-14">
          {projects.map((project) => (
            <View
              key={`${project.id}-${project.title}`}
              className="w-full md:w-[48%] lg:w-[30.66%]">
              <ProjectTile project={project} />
            </View>
          ))}
        </View>
      </Frame>
    </View>
  );
};

export default ProjectsScreenWeb;
