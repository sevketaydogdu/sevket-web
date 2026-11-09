import Head from 'expo-router/head';
import React from 'react';
import { View } from 'react-native';

import { Frame, InkLink, SectionLabel, Span, site, type, yearRange } from '@/components/site';
import { WorkIndex } from '@/components/site/projects';
import { Text } from '@/components/ui/text';
import { jobHistory } from '@/constants/job-history';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';

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
      <Frame className="pt-6 md:pt-16">
        <Text className={cn(type.statement, 'max-w-[22ch] md:max-w-[24ch]')}>
          I design and build mobile apps with React Native — for iOS, Android and the web, from a
          single codebase. Six years in, with <InkLink href="/projects">ten-plus apps</InkLink>{' '}
          live in the stores.
        </Text>

        <View className="mt-14 flex-row flex-wrap gap-y-6 md:mt-24">
          <View className="w-full gap-1 md:w-1/4">
            <Text className={type.label}>Currently</Text>
            <Text className={type.body}>
              {site.current.position},{'\n'}
              {site.current.company}
            </Text>
          </View>
          <View className="w-full gap-1 md:w-1/4">
            <Text className={type.label}>Before</Text>
            <Text className={type.body}>
              UX/UI designer, then{'\n'}React Native since 2020
            </Text>
          </View>
          <View className="w-full gap-1 md:w-1/2">
            <Text className={type.label}>Good at</Text>
            <Text className={cn(type.body, 'max-w-md')}>
              App architecture from zero, white-label and multi-tenant apps, store releases, and
              the small interaction details that make an app feel native.
            </Text>
          </View>
        </View>
      </Frame>

      {/* ——— Work ——— */}
      <Frame className="mt-28 md:mt-40">
        <SectionLabel aside={`${projects.length} projects`}>Selected work</SectionLabel>
        <View className="mt-2">
          <WorkIndex />
        </View>
      </Frame>

      {/* ——— Experience ——— */}
      <Frame className="mt-28 md:mt-40">
        <SectionLabel aside={<InkLink href="/aboutme">More about me</InkLink>}>
          Experience
        </SectionLabel>
        <View className="mt-2">
          {jobHistory.map((job) => (
            <View
              key={`${job.company}-${job.period}`}
              className="flex-row flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-border py-5">
              <Text className={cn(type.meta, 'tabular w-24 md:w-40')}>{yearRange(job.period)}</Text>
              <Text className={cn(type.heading, 'flex-1 text-lg md:text-xl')}>{job.company}</Text>
              <Text className={cn(type.meta, 'w-full pl-28 md:w-auto md:pl-0')}>
                {job.position}
              </Text>
            </View>
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
