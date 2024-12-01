import Head from 'expo-router/head';
import React from 'react';
import { View } from 'tamagui';

import ProjectListRenderer from '@/components/project-list/project-list-renderer';

const ProjectsScreenWeb = () => {
  return (
    <View f={1}>
      <Head>
        <title>Projects | Sevket Aydogdu - React Native Developer</title>
      </Head>
      <ProjectListRenderer />
    </View>
  );
};

export default ProjectsScreenWeb;
