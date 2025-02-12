import Head from 'expo-router/head';
import React from 'react';

import ProjectListRenderer from '@/components/project-list/project-list-renderer';
import { Text, View } from 'react-native';

const ProjectsScreenWeb = () => {
  return (
    <View>
      <Head>
        <title>Projects | Sevket Aydogdu - React Native Developer</title>
      </Head>
      <View className="flex-1 my-8">
        <Text
          className="text-3xl color-white font-bold text-center mb-[24px]"
          // textAlign="center"
          // mb={24}
          // $md={{
          //   fontSize: 20,
          //   lineHeight: 24,
          // }}
          allowFontScaling>
          Projects
        </Text>
        <ProjectListRenderer />
      </View>
    </View>
  );
};

export default ProjectsScreenWeb;
