import { animations } from '@/constants/animations';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function HeroSection() {
  return (
    <Animated.View
      entering={animations.entering.fade}
      className="relative min-h-[80vh] flex flex-col md:flex-row md:items-center md:justify-between bg-background overflow-hidden">
      {/* Soft top gradient only – no grid */}
      <LinearGradient
        colors={['rgba(234, 88, 12, 0.06)', 'transparent']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '50%' }}
      />

      <View className="relative z-10 max-w-4xl mx-auto w-full px-6 md:px-10 pt-20 pb-16 md:py-24 md:flex-row md:items-center md:gap-16 lg:gap-20">
        {/* Copy block */}
        <View className="flex-1">
          <Animated.View entering={animations.entering.slideInDown} className="space-y-5">
            <Text className="text-white/50 text-base md:text-lg font-medium">
              Hello, I'm
            </Text>
            <View className="space-y-2">
              <Text className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Sevket Aydogdu
              </Text>
              <View className="h-1 w-16 bg-orange-500 rounded-full" />
            </View>
            <Text className="text-xl md:text-2xl text-orange-400 font-semibold">
              React Native developer
            </Text>
            <Text className="text-white/60 text-base">
              based in Turkey
            </Text>
            <Text className="text-white/75 text-lg max-w-xl leading-relaxed pt-1">
              I build cross-platform mobile apps with Expo and TypeScript—from idea to App Store and Play Store.
            </Text>
          </Animated.View>

          <View className="mt-10 flex flex-row flex-wrap gap-4">
            <Link href={'/contact' as any} asChild>
              <AnimatedPressable entering={animations.entering.slideInLeft}>
                <View className="bg-orange-500 rounded-xl px-6 py-3">
                  <Text className="text-white font-semibold">Get in touch</Text>
                </View>
              </AnimatedPressable>
            </Link>
            <Link href={'/projects' as any} asChild>
              <AnimatedPressable entering={animations.entering.slideInRight}>
                <View className="rounded-xl border border-white/20 px-6 py-3">
                  <Text className="text-white font-medium">View projects</Text>
                </View>
              </AnimatedPressable>
            </Link>
          </View>
        </View>

        {/* Photo – right side on desktop */}
        <Animated.View
          entering={animations.entering.fade.delay(200)}
          className="mt-12 md:mt-0 flex-shrink-0 flex items-center justify-center">
          <View className="relative">
            <View className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-white/10 ring-4 ring-orange-500/20">
              <Image
                source={require('../../../../assets/images/selfie.jpeg')}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            {/* Small accent dot */}
            <View className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-orange-500 border-4 border-background" />
          </View>
        </Animated.View>
      </View>
    </Animated.View>
  );
}
