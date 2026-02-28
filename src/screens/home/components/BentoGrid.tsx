import { animations } from '@/constants/animations';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';
import Animated from 'react-native-reanimated';

type BentoItem = {
  id: string;
  title: string;
  desc?: string;
  colSpan: number; // 1-3 columns
  rowSpan: number; // 1-2 rows
  bgColor?: string;
  textColor?: string;
  gradient?: string[];
  icon?: keyof typeof Feather.glyphMap;
  image?: any;
  renderBody?: () => React.ReactNode;
};

const ORANGE_PRIMARY = '#fda054';
const ORANGE_LIGHT = '#fb923c';
const ORANGE_DARK = '#ea580c';

const items: BentoItem[] = [
  {
    id: 'tech-stack',
    title: 'Tech Stack',
    desc: 'Modern technologies',
    colSpan: 1, // Square - first box
    rowSpan: 1,
    bgColor: ORANGE_PRIMARY,
    textColor: '#000000',
    icon: 'zap',
    renderBody: () => (
      <View className="mt-4">
        <View className="flex-col gap-2">
          {[
            { name: 'React Native', icon: 'code' },
            { name: 'TypeScript', icon: 'type' },
            { name: 'Expo', icon: 'box' },
          ].map((tech) => (
            <View
              key={tech.name}
              className="bg-black/15 rounded-lg px-3 py-2 border border-black/20 flex-row items-center gap-2">
              <Feather name={tech.icon as any} size={12} color="#000" />
              <Text className="text-black font-semibold text-xs">{tech.name}</Text>
            </View>
          ))}
        </View>
      </View>
    ),
  },
  {
    id: 'experience',
    title: '4+ Years',
    desc: 'Experience',
    colSpan: 1, // Rectangle - second box
    rowSpan: 1,
    bgColor: '#1A1A1A',
    textColor: '#FFFFFF',
    gradient: ['#1A1A1A', '#0F0F0F'],
    icon: 'trending-up',
    renderBody: () => (
      <View className="mt-4 relative">
        <View className="flex-row items-center gap-3">
          <View className="bg-orange-400/10 rounded-xl p-3 border border-orange-400/20">
            <Feather name="award" size={20} color={ORANGE_PRIMARY} />
          </View>
          <View>
            <Text className="text-2xl font-bold text-orange-400">4+</Text>
            <Text className="text-white/60 text-xs">Years</Text>
          </View>
        </View>
      </View>
    ),
  },
  {
    id: 'projects',
    title: '5+ Projects',
    desc: 'In production',
    colSpan: 1, // Rectangle - third box
    rowSpan: 1,
    bgColor: '#1A1A1A',
    textColor: '#FFFFFF',
    gradient: ['#1A1A1A', '#0F0F0F'],
    icon: 'folder',
    renderBody: () => (
      <View className="mt-4 relative">
        <View className="flex-row gap-2">
          <View className="flex-1 bg-background2/80 rounded-lg p-2 border border-white/5">
            <Image
              source={require('../../../../assets/images/zikirmatikLogo1.png')}
              style={{ width: '100%', height: 40, borderRadius: 6 }}
              resizeMode="contain"
            />
          </View>
          <View className="flex-1 bg-background2/80 rounded-lg p-2 border border-white/5">
            <Image
              source={require('../../../../assets/images/politiccaLogo1.png')}
              style={{ width: '100%', height: 40, borderRadius: 6 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    ),
  },
  {
    id: 'mobile-first',
    title: 'Cross-Platform',
    desc: 'iOS, Android & Web',
    colSpan: 2, // Spans 2 columns
    rowSpan: 2, // Spans 2 rows
    bgColor: '#1A1A1A',
    textColor: '#FFFFFF',
    gradient: ['#1A1A1A', '#0F0F0F'],
    icon: 'smartphone',
    renderBody: () => (
      <View className="mt-6 space-y-4 relative">
        <View className="absolute top-0 right-0 w-40 h-40 bg-orange-400/5 rounded-full blur-3xl" />
        <View className="flex-row items-center gap-3 relative z-10">
          {[
            { name: 'iOS', icon: 'smartphone', color: '#007AFF' },
            { name: 'Android', icon: 'smartphone', color: '#3DDC84' },
            { name: 'Web', icon: 'globe', color: ORANGE_PRIMARY },
          ].map((platform) => (
            <View
              key={platform.name}
              className="flex-1 bg-background2/60 rounded-xl p-4 border border-white/10">
              <View
                className="w-10 h-10 rounded-lg items-center justify-center mb-2"
                style={{ backgroundColor: `${platform.color}15` }}>
                <Feather name={platform.icon as any} size={20} color={platform.color} />
              </View>
              <Text className="text-white font-bold text-sm">{platform.name}</Text>
            </View>
          ))}
        </View>
        <View className="relative z-10">
          <Text className="text-white/70 text-sm leading-5">
            One codebase, multiple platforms. Built with React Native and Expo.
          </Text>
        </View>
      </View>
    ),
  },
  {
    id: 'skills',
    title: 'Full Stack',
    desc: 'Expertise',
    colSpan: 1, // Rectangle
    rowSpan: 1,
    bgColor: ORANGE_PRIMARY,
    textColor: '#000000',
    icon: 'layers',
    renderBody: () => (
      <View className="mt-4 space-y-2">
        {[
          { name: 'UI/UX', icon: 'palette' },
          { name: 'State Mgmt', icon: 'database' },
          { name: 'APIs', icon: 'link' },
        ].map((skill) => (
          <View key={skill.name} className="flex-row items-center gap-2">
            <View className="w-6 h-6 bg-black/10 rounded-lg items-center justify-center">
              <Feather name={skill.icon as any} size={12} color="#000" />
            </View>
            <Text className="text-black text-xs font-semibold flex-1">{skill.name}</Text>
          </View>
        ))}
      </View>
    ),
  },
  {
    id: 'contact',
    title: "Let's Connect",
    desc: 'Get in touch',
    colSpan: 1, // Rectangle
    rowSpan: 1,
    bgColor: '#1A1A1A',
    textColor: '#FFFFFF',
    gradient: ['#1A1A1A', '#0F0F0F'],
    icon: 'mail',
    renderBody: () => (
      <View className="mt-4">
        <Link href={'/contact' as any} asChild>
          <Pressable>
            <View className="border-2 border-orange-400 rounded-xl px-4 py-3 bg-orange-400/5 flex-row items-center justify-center gap-2">
              <Feather name="arrow-right" size={16} color={ORANGE_PRIMARY} />
              <Text className="text-orange-400 font-bold text-xs">Contact</Text>
            </View>
          </Pressable>
        </Link>
      </View>
    ),
  },
];

function BentoCard({ item }: { item: BentoItem }) {
  const bgColor = item.bgColor || '#1A1A1A';
  const textColor = item.textColor || '#FFFFFF';
  const isOrangeBg = bgColor === ORANGE_PRIMARY;

  return (
    <Animated.View
      entering={animations.entering.fade}
      className="mb-4 overflow-hidden rounded-3xl relative"
      style={[
        { backgroundColor: bgColor },
        !isOrangeBg && {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.3,
          shadowRadius: 16,
          elevation: 8,
        },
      ]}>
      {/* Gradient background for dark cards */}
      {item.gradient && !isOrangeBg && (
        <View
          className="absolute inset-0 opacity-90"
          style={{
            backgroundColor: item.gradient[0],
          }}
        />
      )}

      {/* Decorative elements */}
      {!isOrangeBg && (
        <>
          <View className="absolute top-0 right-0 w-48 h-48 bg-orange-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <View className="absolute bottom-0 left-0 w-32 h-32 bg-orange-400/3 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        </>
      )}

      {/* Content */}
      <View className="px-6 pt-6 relative z-10">
        <View className="flex-row items-start justify-between mb-3">
          <View className="flex-1">
            {item.icon && (
              <View
                className={`w-12 h-12 rounded-2xl items-center justify-center mb-3 ${
                  isOrangeBg ? 'bg-black/10' : 'bg-orange-400/10'
                }`}>
                <Feather name={item.icon} size={24} color={isOrangeBg ? '#000' : ORANGE_PRIMARY} />
              </View>
            )}
            <Text className="text-2xl font-bold mb-1.5" style={{ color: textColor }}>
              {item.title}
            </Text>
            {item.desc && (
              <Text className="text-sm leading-5" style={{ color: textColor, opacity: 0.7 }}>
                {item.desc}
              </Text>
            )}
          </View>
        </View>
      </View>

      <View className="px-6 pb-6 relative z-10">{item.renderBody && item.renderBody()}</View>

      {/* Bottom accent for dark cards */}
      {!isOrangeBg && (
        <View className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
      )}
    </Animated.View>
  );
}

export default function BentoGrid() {
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  return (
    <View className="py-24 px-4">
      <View className="max-w-7xl mx-auto">
        <Animated.View entering={animations.entering.slideInDown} className="text-center mb-4">
          <View className="inline-flex items-center gap-2 bg-orange-400/10 rounded-full px-4 py-1.5 border border-orange-400/20 mb-4">
            <Feather name="star" size={16} color={ORANGE_PRIMARY} />
            <Text className="text-orange-400 font-semibold text-sm">What I Do</Text>
          </View>
          <Text className="mx-auto mt-4 max-w-3xl text-center text-5xl font-bold tracking-tight text-white mb-16">
            Building exceptional <Text className="text-orange-400">mobile experiences</Text>
          </Text>
        </Animated.View>

        {isMobile ? (
          <View className="mt-10 gap-4">
            {items.map((it) => (
              <BentoCard key={it.id} item={it} />
            ))}
          </View>
        ) : (
          <View className="mt-10">
            {/* Row 1: [Square] [Rectangle] [Rectangle] */}
            <View className="flex-row gap-4 mb-4">
              <View style={{ flex: 1, aspectRatio: 1 }}>
                <BentoCard item={items[0]} />
              </View>
              <View style={{ flex: 1 }}>
                <BentoCard item={items[1]} />
              </View>
              <View style={{ flex: 1 }}>
                <BentoCard item={items[2]} />
              </View>
            </View>

            {/* Row 2 & 3: [Large 2x2] [Rectangle] / [Rectangle] */}
            <View className="flex-row gap-4">
              {/* Left: Large card spanning 2 rows */}
              <View style={{ flex: 2 }}>
                <BentoCard item={items[3]} />
              </View>

              {/* Right: Two stacked rectangles */}
              <View style={{ flex: 1, gap: 16 }}>
                <BentoCard item={items[4]} />
                <BentoCard item={items[5]} />
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
