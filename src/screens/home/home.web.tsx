import { Href, Link } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Pressable, ScrollView, View, useWindowDimensions } from 'react-native';

import { Frame, InkLink, SectionLabel, Span, site, type, yearRange } from '@/components/site';
import { EASE, Phone, Reveal, useInView, usePointer } from '@/components/site/devices';
import { SCREENS, WorkIndex, platformsOf, projectHref, tintOf } from '@/components/site/projects';
import { Text } from '@/components/ui/text';
import { jobHistory } from '@/constants/job-history';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';

const ZIKIRMATIK = projects.find((p) => p.title === 'Easy Dhikr: Zikirmatik')!;
const POLITICCA = projects.find((p) => p.title === 'Politicca')!;
const REST = projects.filter((p) => p !== ZIKIRMATIK && p !== POLITICCA);

const dotGrid = {
  backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
} as any;

/* ——— Hero stage: three phones rising from the bottom edge, with gentle pointer parallax ——— */
function HeroStage() {
  const { width } = useWindowDimensions();
  const [stageRef, p] = usePointer<View>();
  const [revealRef, shown] = useInView<View>('0px');
  const compact = width < 768;
  const w = compact ? 150 : 250;

  const phones = [
    {
      source: SCREENS[ZIKIRMATIK.title].items[1].source,
      aspect: SCREENS[ZIKIRMATIK.title].aspect,
      x: compact ? -112 : -250,
      y: compact ? 70 : 120,
      r: -7,
      depth: 0.6,
      delay: 120,
      z: 1,
    },
    {
      source: SCREENS[ZIKIRMATIK.title].items[0].source,
      aspect: SCREENS[ZIKIRMATIK.title].aspect,
      x: 0,
      y: compact ? 30 : 56,
      r: 0,
      depth: 1,
      delay: 0,
      z: 3,
    },
    {
      source: SCREENS[POLITICCA.title].items[0].source,
      aspect: SCREENS[POLITICCA.title].aspect,
      x: compact ? 112 : 250,
      y: compact ? 70 : 120,
      r: 7,
      depth: 0.6,
      delay: 220,
      z: 2,
    },
  ];

  return (
    <View ref={revealRef}>
      <View
        ref={stageRef}
        className="relative h-[380px] overflow-hidden rounded-[28px] border border-border bg-card md:h-[600px]"
        style={dotGrid}>
        {phones.map((ph, i) => (
          <View
            key={i}
            className="absolute bottom-0 left-1/2"
            style={
              {
                zIndex: ph.z,
                marginLeft: -w / 2,
                opacity: shown ? 1 : 0,
                transform: [
                  { translateX: ph.x + p.x * 14 * ph.depth },
                  { translateY: (shown ? ph.y : ph.y + 160) + p.y * 8 * ph.depth },
                  { rotate: `${ph.r + p.x * 1.5 * ph.depth}deg` },
                ],
                transitionProperty: 'opacity, transform',
                transitionDuration: shown ? '1400ms, 700ms' : '0ms',
                transitionTimingFunction: EASE,
                transitionDelay: `${ph.delay}ms, 0ms`,
              } as any
            }>
            <Phone source={ph.source} aspect={ph.aspect} width={w} />
          </View>
        ))}
      </View>
      <View className="mt-3 flex-row justify-between gap-6">
        <Text className={type.label}>Zikirmatik and Politicca — both live on iOS and Android.</Text>
        <Text className={cn(type.label, 'hidden md:flex')}>Fig. 1</Text>
      </View>
    </View>
  );
}

function FactCol({
  label,
  children,
  color,
}: {
  label: string;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <View className="gap-1">
      <Text className="font-body text-sm" style={{ color, opacity: 0.6 }}>
        {label}
      </Text>
      <Text className="font-body text-base" style={{ color }}>
        {children}
      </Text>
    </View>
  );
}

function CaseLink({ href, children, light }: { href: Href; children: string; light?: boolean }) {
  return (
    <Link href={href} asChild>
      <Pressable accessibilityRole="link" className="self-start">
        {({ hovered }) => (
          <View
            className="flex-row items-center gap-3 border-b pb-1"
            style={{ borderColor: light ? 'rgba(255,255,255,0.35)' : undefined }}>
            <Text
              className="font-heading text-base"
              style={{ color: light ? '#fff' : undefined } as any}>
              {children}
            </Text>
            <Text
              className="font-body text-base"
              style={
                {
                  color: light ? '#fff' : undefined,
                  transform: [{ translateX: hovered ? 4 : 0 }],
                  transitionProperty: 'transform',
                  transitionDuration: '400ms',
                  transitionTimingFunction: EASE,
                } as any
              }>
              →
            </Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

/* ——— Case 01: full phones scrolling sideways on the app's own green ——— */
function ZikirmatikCase() {
  const set = SCREENS[ZIKIRMATIK.title];
  return (
    <View
      className="overflow-hidden rounded-[28px]"
      style={{ backgroundColor: tintOf(ZIKIRMATIK) }}>
      <View className="gap-10 p-6 md:p-12 lg:flex-row lg:items-end lg:gap-16">
        <View className="gap-6 lg:w-[30%]">
          <Text className="font-body text-sm" style={{ color: 'rgba(233,245,233,0.6)' }}>
            Case 01
          </Text>
          <Text
            className="font-heading text-4xl tracking-[-0.03em] md:text-5xl"
            style={{ color: '#e9f5e9' }}>
            Zikirmatik
          </Text>
          <Text
            className="font-body text-lg leading-[1.55]"
            style={{ color: 'rgba(233,245,233,0.82)' }}>
            A quiet dhikr counter. Slide to count, lists that save themselves, six languages and a
            light or dark theme chosen on first launch.
          </Text>
          <View className="flex-row gap-10">
            <FactCol color="#e9f5e9" label="Platforms">
              {platformsOf(ZIKIRMATIK).join(', ')}
            </FactCol>
            <FactCol color="#e9f5e9" label="Stack">
              Expo, Reanimated
            </FactCol>
          </View>
          <CaseLink href={projectHref(ZIKIRMATIK)} light>
            Read the case study
          </CaseLink>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-1"
          contentContainerStyle={{ gap: 20, paddingRight: 24 }}
          style={{ scrollSnapType: 'x mandatory' } as any}>
          {set.items.map((s, i) => (
            <Reveal
              key={s.caption}
              delay={i * 90}
              distance={40}
              style={{ scrollSnapAlign: 'start' } as any}>
              <Phone source={s.source} aspect={set.aspect} width={210} />
              <Text className="mt-4 font-body text-sm" style={{ color: 'rgba(233,245,233,0.7)' }}>
                {String(i + 1).padStart(2, '0')} {s.caption}
              </Text>
            </Reveal>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

/* ——— Case 02: partial screens fanned up from the bottom of a blue field ——— */
function PoliticcaCase() {
  const set = SCREENS[POLITICCA.title];
  const { width } = useWindowDimensions();
  const compact = width < 768;
  const visible = compact ? set.items.slice(0, 3) : set.items;
  const w = compact ? 120 : 220;
  const spread = compact ? 104 : 196;
  const mid = (visible.length - 1) / 2;
  const [ref, shown] = useInView<View>();

  return (
    <View
      ref={ref}
      className="relative overflow-hidden rounded-[28px]"
      style={{ backgroundColor: tintOf(POLITICCA) }}>
      <View className="gap-6 p-6 md:flex-row md:items-start md:justify-between md:p-12">
        <View className="max-w-md gap-6">
          <Text className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Case 02
          </Text>
          <Text
            className="font-heading text-4xl tracking-[-0.03em] text-white md:text-5xl"
            style={{ color: '#fff' }}>
            Politicca
          </Text>
          <Text
            className="font-body text-lg leading-[1.55]"
            style={{ color: 'rgba(255,255,255,0.82)' }}>
            A social platform for politics — feed, news, direct messages and campaign donations in
            one app.
          </Text>
        </View>
        <View className="gap-6 md:items-end md:pt-10">
          <View className="flex-row gap-10">
            <FactCol color="#ffffff" label="Platforms">
              {platformsOf(POLITICCA).join(', ')}
            </FactCol>
            <FactCol color="#ffffff" label="Stack">
              Expo, Tamagui, Redux
            </FactCol>
          </View>
          <CaseLink href={projectHref(POLITICCA)} light>
            Read the case study
          </CaseLink>
        </View>
      </View>

      <View className="relative h-[190px] md:h-[330px]">
        {visible.map((s, i) => {
          const off = i - mid;
          return (
            <View
              key={s.caption}
              className="absolute left-1/2"
              style={
                {
                  top: Math.abs(off) * (compact ? 18 : 34),
                  marginLeft: -w / 2,
                  zIndex: 10 - Math.abs(off),
                  opacity: shown ? 1 : 0,
                  transform: [
                    { translateX: off * spread },
                    { translateY: shown ? 0 : 140 },
                    { rotate: `${off * 3}deg` },
                  ],
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '1400ms',
                  transitionTimingFunction: EASE,
                  transitionDelay: `${Math.abs(off) * 110}ms`,
                } as any
              }>
              <Phone source={s.source} aspect={set.aspect} width={w} />
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default function WebHomeScreen() {
  return (
    <View className="flex-1">
      <Head>
        <title>Şevket Aydoğdu — React Native developer</title>
        <meta
          name="description"
          content="Şevket Aydoğdu designs and builds mobile apps with React Native and Expo for iOS, Android and the web."
        />
      </Head>

      {/* ——— Intro ——— */}
      <Frame className="pt-4 md:pt-12">
        <Reveal>
          <Text className={cn(type.statement, 'max-w-[22ch] md:max-w-[25ch]')}>
            I design and build mobile apps with React Native — for iOS, Android and the web, from
            one codebase. Six years in, with <InkLink href="/projects">ten-plus apps</InkLink> live
            in the stores.
          </Text>
        </Reveal>
      </Frame>

      <Frame className="mt-12 md:mt-20">
        <HeroStage />
      </Frame>

      <Frame className="mt-14 md:mt-20">
        <Reveal className="flex-row flex-wrap gap-y-6">
          <View className="w-full gap-1 md:w-1/4">
            <Text className={type.label}>Currently</Text>
            <Text className={type.body}>
              {site.current.position},{'\n'}
              {site.current.company}
            </Text>
          </View>
          <View className="w-full gap-1 md:w-1/4">
            <Text className={type.label}>Before</Text>
            <Text className={type.body}>UX/UI designer, then{'\n'}React Native since 2020</Text>
          </View>
          <View className="w-full gap-1 md:w-1/2">
            <Text className={type.label}>Good at</Text>
            <Text className={cn(type.body, 'max-w-md')}>
              App architecture from zero, white-label and multi-tenant apps, store releases, and the
              small interaction details that make an app feel native.
            </Text>
          </View>
        </Reveal>
      </Frame>

      {/* ——— Featured work ——— */}
      <Frame className="mt-28 md:mt-40">
        <SectionLabel aside="2 of 5">Featured work</SectionLabel>
        <Reveal className="mt-6">
          <ZikirmatikCase />
        </Reveal>
        <Reveal className="mt-6">
          <PoliticcaCase />
        </Reveal>
      </Frame>

      {/* ——— More work ——— */}
      <Frame className="mt-28 md:mt-40">
        <SectionLabel aside={<InkLink href="/projects">All work</InkLink>}>More work</SectionLabel>
        <View className="mt-2">
          <WorkIndex items={REST} />
        </View>
      </Frame>

      {/* ——— Experience ——— */}
      <Frame className="mt-28 md:mt-40">
        <SectionLabel aside={<InkLink href="/aboutme">More about me</InkLink>}>
          Experience
        </SectionLabel>
        <View className="mt-2">
          {jobHistory.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 60}>
              <View className="flex-row flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border py-5">
                <Text className={cn(type.meta, 'tabular w-24 md:w-40')}>
                  {yearRange(job.period)}
                </Text>
                <Text className={cn(type.heading, 'flex-1 text-lg md:text-xl')}>{job.company}</Text>
                <Text className={cn(type.meta, 'w-full pl-28 md:w-auto md:pl-0')}>
                  {job.position}
                </Text>
              </View>
            </Reveal>
          ))}
        </View>
        <Text className={cn(type.meta, 'mt-5')}>
          <Span>Full history on </Span>
          <InkLink href={site.elsewhere[0].url} external>
            LinkedIn
          </InkLink>
          <Span>.</Span>
        </Text>
      </Frame>
    </View>
  );
}
