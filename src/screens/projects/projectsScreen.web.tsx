import Head from 'expo-router/head';
import React from 'react';
import { View } from 'react-native';

import { ButtonLink, Container, Eyebrow, Reveal, type } from '@/components/site';
import { ProjectCard } from '@/components/site/projects';
import { Text } from '@/components/ui/text';
import { projects } from '@/constants/projects';

const ProjectsScreenWeb = () => {
  return (
    <View className="flex-1">
      <Head>
        <title>Projects | Sevket Aydogdu - React Native Developer</title>
        <meta
          name="description"
          content="Selected React Native and Expo projects by Sevket Aydogdu: social, sports, utility and business apps for iOS, Android and web."
        />
      </Head>

      <Container className="pb-24 pt-10 md:pb-32 md:pt-20">
        <Reveal className="max-w-3xl gap-6">
          <Eyebrow label="Projects" />
          <Text className={type.h1}>Selected work</Text>
          <Text className={type.lead}>
            Apps I've designed, built and released — most of them from a single React Native
            codebase running on iOS, Android and the web.
          </Text>
        </Reveal>

        <View className="mt-14 flex-row flex-wrap gap-5 md:mt-20">
          {projects.map((project, i) => (
            <Reveal
              key={`${project.id}-${project.title}`}
              delay={80 * i}
              className="w-full md:w-[calc(50%-0.625rem)]">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </View>

        <View className="mt-20 flex-row flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
          <Text className={type.h3}>Have something similar in mind?</Text>
          <ButtonLink href="/contact">Start a project</ButtonLink>
        </View>
      </Container>
    </View>
  );
};

export default ProjectsScreenWeb;
