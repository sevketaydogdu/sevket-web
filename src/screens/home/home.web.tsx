import { Link } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Text, Pressable, useWindowDimensions, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { animations } from '@/constants/animations';
import ProjectListRenderer from '@/components/project-list/project-list-renderer';
import { jobHistory } from '@/constants/job-history';
import JobHistory from '@/components/job-history';
import { GridBackground } from '@/components/grid-background';
import { skills } from '@/constants/skills';
import { SkillBar } from '@/components/skill-bar';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function WebHomeScreen() {
  const { height } = useWindowDimensions();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <View className="flex-1">
      <Head>
        <title>Sevket Aydogdu - React Native Developer</title>
        <meta name="description" content="React Native Developer based in Turkey" />
      </Head>
      {/* Hero Section */}

      <Animated.View
        entering={animations.entering.fade}
        className="relative py-20 bg-gradient-to-b from-background2 to-background rounded-2xl overflow-hidden">
        <GridBackground />
        <View className="relative max-w-4xl mx-auto px-4">
          <Animated.View entering={animations.entering.slideInDown} className="space-y-6">
            <Text className="text-white/70 text-lg font-medium">👋 Welcome</Text>
            <View>
              <Text className="text-6xl font-bold text-orange-400 mb-2">Hello, I am Sevket,</Text>
              <Text className="text-5xl font-bold text-white leading-tight">
                react-native developer
                {'\n'}
                based in Turkey.
              </Text>
            </View>
            <Text className="text-white/80 text-xl max-w-2xl">
              Building cross-platform mobile experiences with modern technologies
            </Text>
          </Animated.View>

          <View className="mt-12 flex-row gap-4">
            <Link href={'/contact' as any} asChild>
              <AnimatedPressable entering={animations.entering.slideInLeft} className="group">
                <View className="bg-orange-400 group-hover:bg-orange-600 rounded-2xl px-6 py-3 flex-row items-center">
                  <Text className="text-white font-medium text-lg">Get In Touch</Text>
                </View>
              </AnimatedPressable>
            </Link>
            <Link href={'/projects' as any} asChild>
              <AnimatedPressable entering={animations.entering.slideInRight} className="group">
                <View className="border-2 border-orange-400 group-hover:border-orange-400 rounded-2xl px-6 py-3 flex-row items-center">
                  <Text className="text-orange-400 font-medium text-lg">View All Projects</Text>
                </View>
              </AnimatedPressable>
            </Link>
          </View>
        </View>
      </Animated.View>
      {/* Skills Section */}
      <View className="max-w-4xl  px-4 py-20">
        <Animated.Text
          entering={animations.entering.slideInDown}
          className="text-4xl text-center font-extrabold mb-12 text-orange-500">
          Skills & Expertise
        </Animated.Text>

        <View className="grid grid-cols-2 gap-8  ">
          <View className="space-y-6 ">
            {skills
              .filter((skill) => ['mobile', 'frontend'].includes(skill.category))
              .map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
          </View>

          <View className="space-y-6">
            {skills
              .filter((skill) => ['design', 'tools'].includes(skill.category))
              .map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
          </View>
        </View>
      </View>
      {/* Projects Section */}
      <Animated.Text
        entering={animations.entering.slideInDown}
        className="mt-20 text-4xl text-center font-extrabold mb-8  text-orange-500">
        Projects
      </Animated.Text>
      <ProjectListRenderer />

      <JobHistory />
    </View>
  );
}
