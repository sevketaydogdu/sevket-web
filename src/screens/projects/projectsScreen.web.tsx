import Head from 'expo-router/head';
import React from 'react';
import { H2, View } from 'tamagui';

import ProjectListRenderer from '@/components/project-list/project-list-renderer';

const ProjectsScreenWeb = () => {
  return (
    <View>
      <Head>
        <title>Projects | Sevket Aydogdu - React Native Developer</title>
      </Head>
      <View flex={1}>
        <H2
          textAlign="center"
          mb={24}
          $md={{
            fontSize: 20,
            lineHeight: 24,
          }}
          allowFontScaling>
          You Can Reach Me from these adresses
        </H2>
        <ProjectListRenderer />
      </View>
    </View>
  );
};

export default ProjectsScreenWeb;
