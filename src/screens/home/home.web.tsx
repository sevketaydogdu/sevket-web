import Head from 'expo-router/head';
import React from 'react';
import { View } from 'react-native';
import BentoGridV3 from './components/BentoGrid-V3';
import ExperienceSection from './components/ExperienceSection';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

export default function WebHomeScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <View className="flex-1">
      <Head>
        <title>Sevket Aydogdu - React Native Developer</title>
        <meta name="description" content="React Native Developer based in Turkey" />
      </Head>
      <HeroSection />
      {/*  <BentoGridV2 /> */}
      {/* <BentoGridV3 /> */}
      <SkillsSection />
      <ProjectsSection />
      <View className="px-4 py-20">
        <ExperienceSection />
      </View>
    </View>
  );
}
