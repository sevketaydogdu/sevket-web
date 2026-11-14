import Head from 'expo-router/head';
import React from 'react';
import { Image, View } from 'react-native';

import { Column, Enter, Experience, InkLink, Row, Section, site, type } from '@/components/site';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

export const categorizedTech: Record<string, string[]> = {
  Mobile: ['React Native', 'Expo', 'Expo Router', 'EAS'],
  Web: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'react-native-web'],
  Language: ['TypeScript', 'JavaScript'],
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

const AboutMeWeb = () => {
  return (
    <View className="flex-1">
      <Head>
        <title>About — Şevket Aydoğdu</title>
        <meta
          name="description"
          content="Şevket Aydoğdu is a React Native and web developer — React, Next.js, Vite — with a background in UX/UI design."
        />
      </Head>

      <Column className="pt-16 md:pt-28">
        <Enter>
          <Text role="heading" aria-level="1" className={type.strong}>
            About
          </Text>
          <Text className={type.muted}>Designer first, developer second.</Text>
        </Enter>

        <Enter step={1} className="mt-10">
          {/* The ratio lives on a wrapper: RN-web lets the image's intrinsic
              height win over aspectRatio on narrow screens. */}
          <View
            className="rounded-[16px] sm:rounded-[20px]"
            style={
              {
                width: '100%',
                aspectRatio: 3 / 2,
                overflow: 'hidden',
                boxShadow: '0 0 0 1px var(--color-border)',
              } as any
            }>
            <Image
              source={require('../../../assets/images/selfie.jpeg')}
              accessibilityLabel={`Portrait of ${site.name}`}
              resizeMode="cover"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </View>
        </Enter>

        <Enter step={2} className="mt-10 gap-4">
          <Text className={type.body}>
            I started out designing interfaces, then moved into building them. Since 2020 I've built
            with React Native and React: mobile apps for the App Store and Google Play, and web apps
            with Next.js and Vite. Social platforms, live sports, utilities, and white-label
            products that generate several branded apps from one codebase.
          </Text>
          <Text className={type.body}>
            The design background still decides how I work. Flows before screens, screens before
            polish, and nothing goes out until it feels right in the hand. I like owning the whole
            path: architecture, state and data, CI, store releases, and the monitoring that keeps an
            app healthy once real people use it.
          </Text>
          <Text className={type.body}>
            Side projects live on{' '}
            <InkLink href={site.elsewhere[1].url} external>
              GitHub
            </InkLink>
            , and the best way to reach me is <InkLink href="/contact">by email</InkLink>.
          </Text>
        </Enter>

        <Section title="Experience" className="mt-20 md:mt-24">
          <Experience detailed />
        </Section>

        <Section title="Toolkit" className="mt-20 md:mt-24">
          {Object.entries(categorizedTech).map(([group, items]) => (
            <Row key={group} label={group}>
              {items.join(', ')}
            </Row>
          ))}
        </Section>
      </Column>
    </View>
  );
};

export default AboutMeWeb;
