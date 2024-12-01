import Head from 'expo-router/head';
import React from 'react';
import { View } from 'tamagui';

import ProjectListRenderer from '@/components/project-list/project-list-renderer';

const ProjectsScreenWeb = () => {
  return (
    <View>
      <Head>
        <title>Projects | Sevket Aydogdu - React Native Developer</title>
      </Head>
      <View flex={1}>
        <ProjectListRenderer />
      </View>
    </View>
  );
};

export default ProjectsScreenWeb;
