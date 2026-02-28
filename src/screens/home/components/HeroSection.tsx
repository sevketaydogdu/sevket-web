import { GridBackground } from '@/components/grid-background';
import { animations } from '@/constants/animations';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function HeroSection() {
  return (
    <Animated.View
      entering={animations.entering.fade}
      className="relative py-20 bg-gradient-to-b from-background2 to-background rounded-2xl overflow-hidden mb-12">
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
  );
}

