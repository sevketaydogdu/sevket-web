import { animations } from '@/constants/animations';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function CTASection() {
  return (
    <Animated.View entering={animations.entering.fade} className="relative overflow-hidden">
      <LinearGradient
        colors={['rgba(234, 88, 12, 0.12)', 'rgba(234, 88, 12, 0.04)', 'transparent']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      />
      <View className="section-container relative z-10 py-20 md:py-28">
        <View className="mx-auto max-w-2xl text-center">
          <Animated.Text
            entering={animations.entering.slideInDown}
            className="title-h2-accent mb-4">
            Get in touch
          </Animated.Text>
          <Animated.Text
            entering={animations.entering.slideInDown.delay(50)}
            className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Let's build something{' '}
            <Text className="text-orange-400">together</Text>
          </Animated.Text>
          <Animated.Text
            entering={animations.entering.fade.delay(100)}
            className="mt-4 text-lg text-white/60 md:text-xl">
            Have an idea or a project in mind? I'd love to hear about it.
          </Animated.Text>
          <Animated.View
            entering={animations.entering.slideInDown.delay(150)}
            className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4">
            <Link href={'/contact' as any} asChild>
              <AnimatedPressable>
                <View className="rounded-xl bg-orange-500 px-8 py-4 shadow-lg shadow-orange-500/25">
                  <Text className="text-center text-lg font-semibold text-white">
                    Say hello →
                  </Text>
                </View>
              </AnimatedPressable>
            </Link>
            <Link href={'/aboutme' as any} asChild>
              <AnimatedPressable>
                <View className="rounded-xl border border-white/20 px-6 py-4">
                  <Text className="text-center font-medium text-white/90">About me</Text>
                </View>
              </AnimatedPressable>
            </Link>
          </Animated.View>
        </View>
      </View>
    </Animated.View>
  );
}
