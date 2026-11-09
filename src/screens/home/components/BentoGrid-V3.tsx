// app/components/BentoGridLayout.tsx
import { useBreakPoints } from '@/hooks/useBreakPoints';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { TechStackCard } from './tech-card';
const lightning = require('../../../../assets/images/lightning.svg');
export default function BentoGridLayout() {
  const { isMobile } = useBreakPoints();

  return (
    <View className="flex-1 ">
      {/* ================== ROW 1 ================== */}
      <View className={`${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
        {/* Left square */}

        <View
          className={`${isMobile ? 'flex-1' : 'flex-1'} aspect-square bg-zinc-900 rounded-3xl overflow-hidden p-4 justify-end`}>
          <Image
            source={require('../../../../assets/images/selfie.jpeg')}
            resizeMode="cover"
            className="absolute inset-0 w-full h-full "
          />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.85)']}
            className="absolute inset-0 w-full h-full"
          />
          <View>
            <Text className="text-white text-lg font-semibold">Sevket Aydogdu</Text>
            <Text className="text-zinc-400 text-sm mt-1">
              Senior React Native Developer{'\n'}Building cross-platform mobile apps
            </Text>
          </View>
        </View>

        {/* Two wide rectangles */}
        <View className={`${isMobile ? 'w-full' : 'flex-[1.8]'} flex-col gap-4`}>
          {/* Top */}
          <LinearGradient
            colors={['#1b1b1b', '#000']}
            className={`rounded-3xl flex-1 ${isMobile ? 'flex-col p-12' : 'flex-row p-6'} items-center `}>
            <Image
              source={lightning}
              style={{ width: isMobile ? 48 : 96, height: isMobile ? 48 : 96 }}
              resizeMode="contain"
            />
            <Text className="text-white text-2xl font-semibold">
              Crafting mobile experiences{'\n'}with React Native & Expo
            </Text>
          </LinearGradient>

          {/* Bottom */}
          <TechStackCard />
        </View>
      </View>

      {/* ================== ROW 2 ================== */}
      <View className={`${isMobile ? 'flex-col' : 'flex-row'} gap-4 mt-4`}>
        {/* Left column (two stacked squares) */}
        <View className={`${isMobile ? 'w-full flex-row' : 'flex-[0.3] flex-col'} gap-4`}>
          {/* Top small gradient square */}
          <LinearGradient
            colors={['#D6FF00', '#00FFA6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className={`rounded-3xl ${isMobile ? 'flex-1' : 'aspect-square'} justify-center items-center p-4`}>
            <Text className="text-black text-2xl font-bold">5+</Text>
            <Text className="text-black text-xs font-semibold text-center mt-1">
              Years of Experience
            </Text>
          </LinearGradient>

          {/* Bottom small button square */}
          <LinearGradient
            colors={['#212121', '#000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className={`rounded-3xl ${isMobile ? 'flex-1' : 'aspect-square'} justify-center items-center p-4`}>
            <Text className="text-white text-sm mb-3 opacity-80 text-center">
              Let's work together
            </Text>
            <Pressable className="bg-[#1E90FF] rounded-xl px-4 py-2">
              <Text className="text-white text-xs font-semibold">Contact Me</Text>
            </Pressable>
          </LinearGradient>
        </View>

        {/* Middle box with image and text in same row */}
        <View
          className={`${isMobile ? 'w-full' : 'flex-1'} ${isMobile ? 'flex-col' : 'flex-row'} bg-zinc-900 rounded-3xl overflow-hidden`}>
          <View className="flex-1 p-6 justify-center">
            <Text className="text-white text-lg font-semibold leading-6">
              Building scalable mobile apps with React Native, Expo, and modern tools
            </Text>
            <Text className="text-zinc-400 text-sm mt-3">
              Featured projects: Zikirmatik, Politicca, SkorSever
            </Text>
          </View>
          <View className={`flex-1 ${isMobile ? 'h-48' : 'h-48'}`}>
            <Image
              source={require('../../../../assets/images/zikirmatikLogo1.png')}
              className="w-45 h-45"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Right large rectangle */}
      </View>
    </View>
  );
}
