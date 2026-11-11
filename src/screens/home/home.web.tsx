import Head from 'expo-router/head';
import React from 'react';
import { View } from 'react-native';

import { Column, Enter, Experience, InkLink, Section, Wide, site, type } from '@/components/site';
import { ProjectCard, ProjectRow, screensOf } from '@/components/site/projects';
import { Text } from '@/components/ui/text';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';

const FEATURED = projects.filter((p) => screensOf(p));
const OTHER = projects.filter((p) => !screensOf(p));

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

      <Column className="pt-16 md:pt-28">
        <Enter step={0}>
          <Text role="heading" aria-level="1" className={type.strong}>
            {site.name}
          </Text>
          <Text className={type.muted}>{site.role}</Text>
        </Enter>

        <Enter step={1} className="mt-8 gap-4">
          <Text className={type.body}>
            I design and build mobile apps with React Native and Expo — one codebase for iOS,
            Android and the web. I started out as a UX/UI designer, and I still care most about how
            an app feels in the hand.
          </Text>
          <Text className={type.body}>
            Right now I'm a senior React Native developer at {site.current.company}, rebuilding a
            family of separate apps into a single multi-tenant codebase. More{' '}
            <InkLink href="/aboutme">about me</InkLink>, or{' '}
            <InkLink href={`mailto:${site.email}`} external>
              say hello
            </InkLink>
            .
          </Text>
        </Enter>
      </Column>

      <Column className="mt-20 md:mt-28">
        <Enter step={2}>
          <Text role="heading" aria-level="2" className={type.muted}>
            Selected work
          </Text>
        </Enter>
      </Column>
      <Wide className="mt-5 gap-14 md:gap-20">
        {FEATURED.map((p, i) => (
          <Enter key={p.title} step={3 + i}>
            <ProjectCard project={p} />
          </Enter>
        ))}
      </Wide>

      <Column className="mt-20 md:mt-28">
        <Section title="Other projects">
          <View className="gap-1">
            {OTHER.map((p) => (
              <ProjectRow key={p.title} project={p} />
            ))}
          </View>
        </Section>

        <Section title="Experience" className="mt-20 md:mt-24">
          <Experience />
          <Text className={cn(type.muted, 'mt-6')}>
            Full history on{' '}
            <InkLink href={site.elsewhere[0].url} external className="text-foreground">
              LinkedIn
            </InkLink>
            .
          </Text>
        </Section>
      </Column>
    </View>
  );
}
