import { animations } from '@/constants/animations';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * Hero Alt — Editorial, expert-level UX/UI.
 * Bold typography, layered depth, asymmetric layout, staggered motion.
 */
export default function HeroSectionAlt() {
  return (
    <Animated.View
      entering={animations.entering.fade}
      className="relative min-h-[70vh] flex flex-col justify-center bg-background overflow-hidden rounded-2xl ">
      {/* Layered background: vignette + angular gradients (no circles) */}
      <LinearGradient
        colors={['transparent', 'rgba(10,10,10,0.4)', 'rgba(10,10,10,0.85)']}
        locations={[0, 0.5, 1]}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      />
      {/* Soft glow from top-right corner */}
      {/* <LinearGradient
        colors={['rgba(234, 88, 12, 0.06)', 'rgba(234, 88, 12, 0.02)', 'transparent']}
        locations={[0, 0.4, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      /> */}
      {/* Soft glow from bottom-left */}
      <LinearGradient
        colors={['transparent', 'rgba(251, 146, 60, 0.03)']}
        locations={[0.5, 1]}
        start={{ x: 0.8, y: -0.8 }}
        end={{ x: 0, y: 1 }}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      />

      <View className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-14 pt-24 pb-28">
        <View className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12 section-container">
          {/* Left: editorial copy block */}
          <View className="flex-1 lg:max-w-[520px]">
            <Animated.View
              entering={animations.entering.slideInDown}
              className="flex-row items-center gap-3">
              <View className="h-px w-8 bg-orange-500/60" />
              <Text className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                React Native & Expo
              </Text>
            </Animated.View>

            {/* Status: top-right, away from CTAs */}
            <Animated.View
              entering={animations.entering.fade.delay(400)}
              className="mt-6 flex-row items-center self-start gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <View
                className="w-2 h-2 rounded-full bg-emerald-400"
                style={{ shadowColor: '#34d399', shadowOpacity: 0.9, shadowRadius: 4 }}
              />
              <Text className="text-white/70 text-xs font-medium tracking-wide">
                Available for work
              </Text>
            </Animated.View>
            <Animated.View entering={animations.entering.slideInDown.delay(60)} className="mt-6">
              <Text
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.02] tracking-[-0.03em]"
                style={{ fontFamily: 'SatoshiBlack' }}>
                Sevket{'\n'}Aydogdu
              </Text>
            </Animated.View>

            <Animated.View entering={animations.entering.slideInDown.delay(120)} className="mt-6">
              <Text className="text-lg md:text-xl text-orange-400 font-semibold tracking-tight">
                Mobile developer
              </Text>
              <Text className="text-sm text-white/45 mt-1 tracking-wide">Istanbul, Turkey</Text>
            </Animated.View>

            <Animated.View
              entering={animations.entering.fade.delay(220)}
              className="mt-8 pr-0 lg:pr-6">
              <Text className="text-white/65 text-base md:text-lg leading-[1.65]">
                I build and ship cross-platform apps with TypeScript—from idea to App Store and Play
                Store.
              </Text>
            </Animated.View>

            <Animated.View
              entering={animations.entering.slideInLeft.delay(280)}
              className="mt-10 flex flex-row flex-wrap gap-4">
              <Link href={'/contact' as any} asChild>
                <AnimatedPressable className="active:opacity-90">
                  <LinearGradient
                    colors={['#f97316', '#ea580c', '#c2410c']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    locations={[0, 0.4, 1]}
                    className="rounded-xl px-7 py-4 flex-row items-center shadow-lg"
                    style={{
                      shadowColor: '#ea580c',
                      shadowOpacity: 0.35,
                      shadowRadius: 20,
                      shadowOffset: { width: 0, height: 4 },
                    }}>
                    <Text className="text-white font-semibold text-base">Get in touch</Text>
                  </LinearGradient>
                </AnimatedPressable>
              </Link>
              <Link href={'/projects' as any} asChild>
                <Pressable className="active:opacity-90">
                  <View className="rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3.5">
                    <Text className="text-white/90 font-medium text-base">View projects</Text>
                  </View>
                </Pressable>
              </Link>
            </Animated.View>
          </View>

          {/* Right: photo card — overlaps for depth */}
          <Animated.View
            entering={animations.entering.fade.delay(350)}
            className="mt-20 lg:mt-0 flex-shrink-0 flex items-center lg:items-end justify-center lg:pl-8">
            <View className="relative w-full max-w-[260px] md:max-w-[300px] lg:max-w-[320px]">
              {/* Outer frame with gradient border */}
              <LinearGradient
                colors={['rgba(255,255,255,0.12)', 'rgba(255,255,255,0.04)']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="rounded-[1.25rem] p-[2px]">
                <View className="rounded-[1.1rem] overflow-hidden bg-background2 border border-white/10">
                  <View className="aspect-[3/4] w-full relative">
                    <Image
                      source={require('../../../../assets/images/selfie.jpeg')}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    {/* Subtle top gradient overlay for depth */}
                    <LinearGradient
                      colors={['rgba(0,0,0,0.25)', 'transparent']}
                      style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '40%' }}
                    />
                  </View>
                </View>
              </LinearGradient>
              {/* Corner accent — subtle, editorial */}
              <View
                className="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl border border-orange-500/30 bg-orange-500/5"
                style={{ transform: [{ rotate: '8deg' }] }}
              />
            </View>
          </Animated.View>
        </View>
      </View>
    </Animated.View>
  );
}
