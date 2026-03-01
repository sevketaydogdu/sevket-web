import Head from 'expo-router/head';
import React from 'react';
import { Text, View } from 'react-native';
import ExperienceSection from './components/ExperienceSection';
import HeroSection from './components/HeroSection';
import HeroSectionAlt from './components/HeroSectionAlt';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

export default function WebHomeScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <View className="flex-1">
      <Head>
        <title>Sevket Aydogdu — React Native Developer</title>
        <meta
          name="description"
          content="React Native & Expo developer based in Turkey. Building cross-platform mobile apps with TypeScript and modern tooling."
        />
      </Head>
      <HeroSectionAlt />
      {/* Switch to <HeroSection /> for the other hero variant */}

      <View className="section-container">
        {/* Short intro strip */}
        <View className="mb-16 md:mb-20">
          <View className="max-w-2xl">
            <Text className="text-white/50 text-sm font-medium uppercase tracking-widest mb-3">
              What I do
            </Text>
            <Text className="text-white/90 text-xl md:text-2xl leading-relaxed">
              I specialize in React Native and Expo—designing and shipping mobile apps for iOS and
              Android from a single codebase, with a focus on performance and maintainability.
            </Text>
          </View>
        </View>

        <SkillsSection />
        <ProjectsSection />
        <View className="pt-8">
          <ExperienceSection />
        </View>
      </View>
    </View>
  );
}
