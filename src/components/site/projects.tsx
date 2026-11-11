import { Href, Link } from 'expo-router';
import React from 'react';
import {
  Image,
  Pressable,
  View,
  useWindowDimensions,
  type ImageSourcePropType,
} from 'react-native';

import { Text } from '@/components/ui/text';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

import { type } from './index';

export type Project = (typeof projects)[number];

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

export const projectHref = (project: Project) =>
  `/projects/${clearSpacesAndSpecialCharacters(project.title)}` as Href;

/** Short display names and one-line descriptions, written for the site. */
const COPY: Record<string, { name: string; line: string }> = {
  'Easy Dhikr: Zikirmatik': {
    name: 'Zikirmatik',
    line: 'A dhikr counter with saved lists, several languages and light and dark themes.',
  },
  Politicca: {
    name: 'Politicca',
    line: 'A social platform for politics — feed, news, messages and campaign donations.',
  },
  'X - UI Clone': {
    name: 'X UI Clone',
    line: 'The X interface rebuilt with Expo Router, running on iOS, Android and the web.',
  },
  SkorSever: {
    name: 'SkorSever',
    line: 'Live scores and match results on mobile and web, from one monorepo.',
  },
  Botanik: {
    name: 'Botanik',
    line: 'A management app for a pharmacy warehouse.',
  },
};
export const nameOf = (p: Project) => COPY[p.title]?.name ?? p.title;
export const lineOf = (p: Project) => COPY[p.title]?.line ?? p.subtitle;

export function platformsOf(project: Project): string[] {
  const l: { apple?: string; google?: string; web?: string; github?: string } =
    project.storeLinks ?? {};
  const out: string[] = [];
  if (l.apple) out.push('iOS');
  if (l.google) out.push('Android');
  if (l.web) out.push('Web');
  return out;
}
export const platformLabel = (p: Project) => platformsOf(p).join(', ') || 'Client work';

export type Shot = { source: ImageSourcePropType; caption: string };
type ShotSet = { aspect: number; partial: boolean; items: Shot[]; hero: number[] };

/** Cropped App Store screens. Politicca crops stop mid-screen (partial). */
export const SCREENS: Record<string, ShotSet> = {
  'Easy Dhikr: Zikirmatik': {
    aspect: 442 / 966,
    partial: false,
    hero: [1, 0, 3],
    items: [
      { source: require('../../../assets/images/screens/zikirmatik-4.jpg'), caption: 'Counter' },
      { source: require('../../../assets/images/screens/zikirmatik-5.jpg'), caption: 'Dhikr list' },
      { source: require('../../../assets/images/screens/zikirmatik-6.jpg'), caption: 'New dhikr' },
      { source: require('../../../assets/images/screens/zikirmatik-7.jpg'), caption: 'Settings' },
      { source: require('../../../assets/images/screens/zikirmatik-3.jpg'), caption: 'Theme' },
      { source: require('../../../assets/images/screens/zikirmatik-2.jpg'), caption: 'Language' },
    ],
  },
  Politicca: {
    aspect: 426 / 771,
    partial: true,
    hero: [1, 0, 2],
    items: [
      { source: require('../../../assets/images/screens/politicca-1.jpg'), caption: 'Feed' },
      { source: require('../../../assets/images/screens/politicca-2.jpg'), caption: 'News' },
      { source: require('../../../assets/images/screens/politicca-3.jpg'), caption: 'Donations' },
      { source: require('../../../assets/images/screens/politicca-4.jpg'), caption: 'Messages' },
      { source: require('../../../assets/images/screens/politicca-5.jpg'), caption: 'Profile' },
    ],
  },
};
export const screensOf = (project: Project) => SCREENS[project.title];

/** A bare app screen: rounded like the device glass, ringed and softly shadowed. No bezel. */
export function Screen({
  source,
  width,
  aspect,
  partial = false,
}: {
  source: ImageSourcePropType;
  width: number;
  aspect: number;
  partial?: boolean;
}) {
  const r = Math.round(width * 0.14);
  return (
    <View
      style={
        {
          width,
          aspectRatio: aspect,
          borderTopLeftRadius: r,
          borderTopRightRadius: r,
          borderBottomLeftRadius: partial ? 0 : r,
          borderBottomRightRadius: partial ? 0 : r,
          overflow: 'hidden',
          backgroundColor: '#000',
          boxShadow: 'var(--screen-shadow)',
        } as any
      }>
      <Image source={source} resizeMode="cover" style={{ width: '100%', height: '100%' }} />
    </View>
  );
}

export function useCompact() {
  const { width } = useWindowDimensions();
  return width < 768;
}

/** Three screens rising out of the bottom edge of a soft card; they lift on hover. */
function ShotStage({ set, hovered }: { set: ShotSet; hovered: boolean }) {
  const compact = useCompact();
  const height = compact ? 300 : 540;
  const w = compact ? (set.partial ? 124 : 112) : set.partial ? 250 : 232;
  const gap = compact ? 12 : 28;
  const screenH = w / set.aspect;
  // Full screens sink below the edge; partial crops sit exactly on it.
  const sink = set.partial ? 0 : compact ? 22 : 52;
  const step = compact ? 14 : 30;

  return (
    <View className="flex-row items-end justify-center" style={{ height, gap }}>
      {set.hero.map((idx, i) => {
        const centre = i === 1;
        return (
          <View
            key={idx}
            style={
              {
                height: screenH,
                marginBottom: -(sink + (centre ? 0 : step)),
                transform: [{ translateY: hovered ? -8 : 0 }],
                transitionProperty: 'transform',
                transitionDuration: '700ms',
                transitionTimingFunction: EASE,
                transitionDelay: `${centre ? 0 : 50}ms`,
              } as any
            }>
            <Screen
              source={set.items[idx].source}
              width={w}
              aspect={set.aspect}
              partial={set.partial}
            />
          </View>
        );
      })}
    </View>
  );
}

/** App icon centred on a soft card. */
function IconStage({ project, hovered }: { project: Project; hovered: boolean }) {
  const compact = useCompact();
  const size = compact ? 72 : 104;
  return (
    <View className="items-center justify-center" style={{ height: compact ? 220 : 380 }}>
      <View
        style={
          {
            borderRadius: size * 0.225,
            boxShadow: 'var(--icon-shadow)',
            transform: [{ translateY: hovered ? -6 : 0 }],
            transitionProperty: 'transform',
            transitionDuration: '700ms',
            transitionTimingFunction: EASE,
          } as any
        }>
        <Image
          source={project.imagePath}
          resizeMode="cover"
          style={{ width: size, height: size, borderRadius: size * 0.225 }}
        />
      </View>
    </View>
  );
}

/** Large project card: media on a soft surface, caption below. */
export function ProjectCard({ project }: { project: Project }) {
  const set = screensOf(project);
  return (
    <Link href={projectHref(project)} asChild>
      <Pressable accessibilityRole="link" accessibilityLabel={`${nameOf(project)} — case study`}>
        {({ hovered }) => (
          <View>
            <View className="overflow-hidden rounded-[20px] bg-surface md:rounded-[28px]">
              {set ? (
                <ShotStage set={set} hovered={hovered} />
              ) : (
                <IconStage project={project} hovered={hovered} />
              )}
            </View>
            <View className="mt-4 gap-0.5 px-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
              <Text className={cn(type.body, 'flex-1')}>
                <Text className={type.strong}>{nameOf(project)}</Text>
                <Text className={type.muted}>
                  {'  '}
                  {lineOf(project)}
                </Text>
              </Text>
              <Text className={cn(type.muted, 'shrink-0')}>{platformLabel(project)}</Text>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

/** Compact list row with the app icon. */
export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link href={projectHref(project)} asChild>
      <Pressable accessibilityRole="link" className="-mx-3">
        {({ hovered }) => (
          <View
            className={cn(
              'flex-row items-center gap-4 rounded-[14px] px-3 py-3 transition-colors duration-150',
              hovered ? 'bg-surface' : 'bg-transparent'
            )}>
            <Image
              source={project.imagePath}
              resizeMode="cover"
              style={
                {
                  width: 40,
                  height: 40,
                  borderRadius: 9,
                  boxShadow: '0 0 0 1px var(--color-border)',
                } as any
              }
            />
            <View className="flex-1">
              <Text className={type.strong} numberOfLines={1}>
                {nameOf(project)}
              </Text>
              <Text className={type.muted} numberOfLines={1}>
                {lineOf(project)}
              </Text>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}
