import Head from 'expo-router/head';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { Frame, InkLink, SectionLabel, site, type, yearRange } from '@/components/site';
import { Text } from '@/components/ui/text';
import { jobHistory } from '@/constants/job-history';
import { cn } from '@/lib/utils';

export const categorizedTech: Record<string, string[]> = {
  Core: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'React', 'Next.js', 'Vite'],
  'State & data': [
    'Redux Toolkit',
    'Context API',
    'React Query',
    'SWR',
    'Axios',
    'SignalR',
    'Firestore',
  ],
  'Interface & motion': [
    'NativeWind',
    'Tamagui',
    'Styled Components',
    'Reanimated',
    'Gesture Handler',
    'Lottie',
    'FlashList',
  ],
  Platform: [
    'In-app purchases',
    'Push notifications',
    'Apple & Google sign-in',
    'OTA updates',
    'Secure storage',
    'SQLite',
    'i18n',
  ],
  'Quality & delivery': [
    'Jest',
    'Maestro',
    'Sentry',
    'Crashlytics',
    'Analytics',
    'GitHub Actions',
    'Monorepos',
  ],
};

function Portrait() {
  return (
    <Pressable accessibilityLabel={`Portrait of ${site.name}`}>
      {({ hovered }) => (
        <Image
          source={require('../../../assets/images/selfie.jpeg')}
          resizeMode="cover"
          style={
            {
              width: '100%',
              aspectRatio: 4 / 5,
              filter: hovered ? 'grayscale(0)' : 'grayscale(1) contrast(1.05)',
              transition: 'filter 400ms ease',
            } as any
          }
        />
      )}
    </Pressable>
  );
}

const AboutMeWeb = () => {
  return (
    <View className="flex-1">
      <Head>
        <title>About — Şevket Aydoğdu</title>
        <meta
          name="description"
          content="Şevket Aydoğdu is a React Native developer with six years of experience and a background in UX/UI design."
        />
      </Head>

      <Frame className="pt-6 md:pt-16">
        <Text className={cn(type.statement, 'max-w-[24ch]')}>
          Designer first, developer second — and still convinced the best apps come from caring
          about both.
        </Text>
      </Frame>

      <Frame className="mt-20 md:mt-32">
        <View className="gap-12 lg:flex-row lg:gap-10">
          <View className="w-full max-w-sm lg:w-[30%] lg:max-w-none">
            <Portrait />
            <Text className={cn(type.label, 'mt-3')}>Hover for colour.</Text>
          </View>

          <View className="flex-1 gap-6 lg:pl-[8%]">
            <Text className={type.prose}>
              I started out designing interfaces, then moved into building them. Since 2020 I've
              worked almost entirely in React Native, shipping more than ten apps to the App Store
              and Google Play — social platforms, live sports, utilities and white-label products
              that generate several branded apps from one codebase.
            </Text>
            <Text className={type.prose}>
              The design background still decides how I work. Flows before screens, screens before
              polish, and nothing goes out until it feels right in the hand. I like owning the
              whole path: architecture, state and data, CI, store releases, and the monitoring that
              keeps an app healthy once real people use it.
            </Text>
            <Text className={type.prose}>
              Right now I'm at {site.current.company}, rebuilding a family of apps into one multi-tenant React Native codebase.
              Side projects live on <InkLink href={site.elsewhere[1].url} external>GitHub</InkLink>
              , and the best way to reach me is{' '}
              <InkLink href="/contact">by email</InkLink>.
            </Text>
          </View>
        </View>
      </Frame>

      {/* ——— Experience ——— */}
      <Frame className="mt-28 md:mt-40">
        <SectionLabel aside={`Since 2020`}>Experience</SectionLabel>
        {jobHistory.map((job) => (
          <View
            key={`${job.company}-${job.period}`}
            className="gap-4 border-b border-border py-10 lg:flex-row lg:gap-10">
            <View className="gap-1 lg:w-[30%]">
              <Text className={cn(type.meta, 'tabular')}>{yearRange(job.period)}</Text>
              <Text className={type.heading}>{job.company}</Text>
              <Text className={type.meta}>{job.position}</Text>
            </View>
            <View className="flex-1 gap-3 lg:pl-[8%]">
              {job.description
                .split('\n')
                .map((line) => line.replace(/^•\s*/, '').trim())
                .filter(Boolean)
                .map((line) => (
                  <Text key={line.slice(0, 24)} className={cn(type.body, 'max-w-2xl')}>
                    {line}
                  </Text>
                ))}
            </View>
          </View>
        ))}
      </Frame>

      {/* ——— Toolkit ——— */}
      <Frame className="mt-28 md:mt-40">
        <SectionLabel>Toolkit</SectionLabel>
        <View className="mt-8 flex-row flex-wrap gap-y-10">
          {Object.entries(categorizedTech).map(([group, items]) => (
            <View key={group} className="w-1/2 gap-2 pr-6 md:w-1/3 lg:w-1/5">
              <Text className={type.label}>{group}</Text>
              {items.map((item) => (
                <Text key={item} className={type.body}>
                  {item}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </Frame>
    </View>
  );
};

export default AboutMeWeb;
