import { AntDesign } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

import {
  ButtonLink,
  Container,
  Eyebrow,
  Reveal,
  SectionHeader,
  Span,
  Tag,
  siteFacts,
  type,
  useSiteColors,
} from '@/components/site';
import { Text } from '@/components/ui/text';
import { jobHistory } from '@/constants/job-history';
import { socialButtons } from '@/constants/menu';
import { cn } from '@/lib/utils';

const bio = [
  "I'm a React Native developer who turns ideas into apps people actually use. Over the last six years I've shipped more than ten of them — social platforms, live sports, utilities and multi-tenant white-label products — to the App Store and Google Play.",
  'Before writing mobile code I worked as a UX/UI designer. That background still shapes how I build: flows first, details second, and nothing ships until it feels right in the hand.',
  "I like owning the whole path — architecture, state and data, CI, store releases and the monitoring that keeps an app healthy after launch. Most of my side projects live on GitHub if you'd like to see how I work.",
];

export const categorizedTech: Record<string, string[]> = {
  Core: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'React', 'Next.js', 'Vite'],
  'State & data': [
    'Redux Toolkit',
    'Redux Persist',
    'Context API',
    'React Query',
    'SWR',
    'Axios',
    'SignalR',
    'Firebase Firestore',
  ],
  'UI & motion': [
    'NativeWind',
    'Tamagui',
    'Styled Components',
    'StyleSheet API',
    'Reanimated',
    'Gesture Handler',
    'Lottie',
    'FlashList',
  ],
  Platform: [
    'In-app purchases',
    'Expo Notifications',
    'OneSignal',
    'Apple & Google sign-in',
    'Expo Updates',
    'Secure Store',
    'SQLite',
    'i18n',
  ],
  'Quality & delivery': [
    'Jest',
    'Maestro',
    'Sentry',
    'Crashlytics',
    'Firebase Analytics',
    'GitHub Actions',
    'Monorepos',
    'patch-package',
  ],
};

function SocialLink({ item }: { item: (typeof socialButtons)[number] }) {
  const colors = useSiteColors();
  return (
    <Link href={item.href as Href} asChild target="_blank" rel="noopener noreferrer">
      <Pressable accessibilityRole="link">
        {({ hovered }) => (
          <View
            className={cn(
              'flex-row items-center gap-2 rounded-full border border-border px-4 py-2.5 transition-colors duration-200',
              hovered && 'border-orange-500/60'
            )}>
            <AntDesign
              name={item.name}
              size={16}
              color={hovered ? colors.accent : colors.fg}
            />
            <Text className="font-heading text-sm text-foreground">{item.title}</Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

const AboutMeWeb = () => {
  return (
    <View className="flex-1">
      <Head>
        <title>About Me | Sevket Aydogdu - React Native Developer</title>
        <meta
          name="description"
          content="Sevket Aydogdu is a senior React Native developer with six years of experience shipping cross-platform mobile apps."
        />
      </Head>

      {/* ——— Intro ——— */}
      <Container className="pb-20 pt-10 md:pb-28 md:pt-20">
        <View className="gap-12 lg:flex-row lg:items-start lg:gap-16">
          <View className="flex-1 gap-8">
            <Reveal>
              <Eyebrow label="About" />
            </Reveal>
            <Reveal delay={80}>
              <Text className={type.h1}>
                Hi, I'm Sevket.{' '}
                <Span className="text-muted">I make apps feel at home on every platform.</Span>
              </Text>
            </Reveal>
            <Reveal delay={160} className="gap-5">
              {bio.map((p) => (
                <Text key={p.slice(0, 16)} className={type.lead}>
                  {p}
                </Text>
              ))}
            </Reveal>
            <Reveal delay={240} className="flex-row flex-wrap items-center gap-3">
              <ButtonLink href="/contact">Work with me</ButtonLink>
              {socialButtons.map((item) => (
                <SocialLink key={item.title} item={item} />
              ))}
            </Reveal>
          </View>

          <Reveal delay={120} className="w-full max-w-sm self-center lg:w-[340px] lg:self-start">
            <View className="overflow-hidden rounded-[2rem] border border-border bg-card">
              <Image
                source={require('../../../assets/images/selfie.jpeg')}
                resizeMode="cover"
                style={{ width: '100%', aspectRatio: 4 / 5 }}
                accessibilityLabel="Portrait of Sevket Aydogdu"
              />
              <View className="flex-row">
                {siteFacts.stats.slice(0, 2).map((stat, i) => (
                  <View
                    key={stat.label}
                    className={cn('flex-1 gap-1 p-5', i > 0 && 'border-l border-border')}>
                    <Text className="font-display text-3xl text-foreground">{stat.value}</Text>
                    <Text className={type.small}>{stat.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </Reveal>
        </View>
      </Container>

      {/* ——— Experience ——— */}
      <Container>
        <View className="border-t border-border py-20 md:py-28">
          <SectionHeader index="01" label="Career" title="Experience" />
          <View className="mt-12">
            {jobHistory.map((job, i) => (
              <View
                key={`${job.company}-${job.period}`}
                className="gap-4 border-t border-border py-10 md:flex-row md:gap-10">
                <View className="gap-2 md:w-60">
                  <Text className={cn(type.mono, i === 0 && type.accent)}>
                    {job.period.replace(/\s+/g, ' ')}
                  </Text>
                  <Text className="font-heading text-lg text-foreground">{job.company}</Text>
                </View>
                <View className="flex-1 gap-3">
                  <Text className={cn(type.h3, type.accent)}>{job.position}</Text>
                  {job.description
                    .split('\n')
                    .map((line) => line.replace(/^•\s*/, '').trim())
                    .filter(Boolean)
                    .map((line) => (
                      <Text key={line.slice(0, 24)} className={type.body}>
                        {line}
                      </Text>
                    ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Container>

      {/* ——— Toolkit ——— */}
      <Container className="pb-24 md:pb-32">
        <View className="border-t border-border pt-20 md:pt-28">
          <SectionHeader
            index="02"
            label="Toolkit"
            title="What I build with"
            description="The stack I reach for most, grouped by the job it does."
          />
          <View className="mt-12">
            {Object.entries(categorizedTech).map(([group, items]) => (
              <View
                key={group}
                className="gap-4 border-t border-border py-8 md:flex-row md:items-start md:gap-10">
                <Text className={cn(type.mono, 'md:w-60 md:pt-2')}>{group}</Text>
                <View className="flex-1 flex-row flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Container>
    </View>
  );
};

export default AboutMeWeb;
