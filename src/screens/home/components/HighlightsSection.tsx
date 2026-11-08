import { animations } from '@/constants/animations';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const highlights = [
  {
    key: 'years',
    value: '4+',
    label: 'Years experience',
    icon: 'trending-up' as const,
  },
  {
    key: 'projects',
    value: '5+',
    label: 'Projects shipped',
    icon: 'folder' as const,
  },
  {
    key: 'stack',
    value: 'RN & Expo',
    label: 'React Native · TypeScript',
    icon: 'zap' as const,
  },
];

export default function HighlightsSection() {
  return (
    <View className="border-y border-white/5 bg-white/[0.02]">
      <View className="section-container py-12 md:py-16">
        <Animated.Text
          entering={animations.entering.slideInDown}
          className="title-h2-accent mb-8 text-center">
          At a glance
        </Animated.Text>
        <View className="flex flex-row flex-wrap justify-center gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <Animated.View
              key={item.key}
              entering={animations.entering.fade.delay(80 * index)}
              className="min-w-[140px] flex-1 max-w-[200px] rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 md:px-6 md:py-7">
              <View className="mb-3 w-10 h-10 items-center justify-center rounded-xl bg-orange-500/15">
                <Feather name={item.icon} size={20} color="#fb923c" />
              </View>
              <Text className="text-2xl font-bold text-white md:text-3xl">{item.value}</Text>
              <Text className="mt-1 text-sm text-white/60">{item.label}</Text>
            </Animated.View>
          ))}
          <Animated.View
            entering={animations.entering.fade.delay(240)}
            className="min-w-[140px] flex-1 max-w-[200px]">
            <Link href={'/contact' as any} asChild>
              <Pressable className="h-full rounded-2xl border-2 border-orange-500/50 bg-orange-500/10 px-5 py-6 md:px-6 md:py-7 active:opacity-90">
                <View className="mb-3 w-10 h-10 items-center justify-center rounded-xl bg-orange-500/25">
                  <Feather name="mail" size={20} color="#fb923c" />
                </View>
                <Text className="text-lg font-bold text-orange-400">Let's talk</Text>
                <Text className="mt-1 text-sm text-white/70">Get in touch</Text>
              </Pressable>
            </Link>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
