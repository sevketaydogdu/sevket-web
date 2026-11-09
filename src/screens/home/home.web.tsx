import { LinearGradient } from 'expo-linear-gradient';
import Head from 'expo-router/head';
import React from 'react';
import { View } from 'react-native';

import {
  ButtonLink,
  Container,
  CopyEmail,
  Reveal,
  SectionHeader,
  Span,
  siteFacts,
  type,
} from '@/components/site';
import { ProjectRow } from '@/components/site/projects';
import { Text } from '@/components/ui/text';
import { jobHistory } from '@/constants/job-history';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Cross-platform apps',
    description:
      'One React Native codebase for iOS, Android and the web, without the native feel getting lost along the way.',
  },
  {
    title: 'Architecture from zero',
    description:
      'Project setup, state, data fetching and navigation that stay clean as the app and the team grow.',
  },
  {
    title: 'Store releases',
    description:
      'Builds, signing, App Store and Play Store submission, OTA updates and CI that make shipping routine.',
  },
  {
    title: 'Performance & stability',
    description:
      'Crash monitoring, profiling and the unglamorous fixes that turn a demo into a product people keep.',
  },
];

const steps = [
  {
    title: 'Scope',
    description:
      'We agree on the problem, the must-haves and a timeline. You get a written plan before any code.',
  },
  {
    title: 'Build',
    description:
      'Short iterations with a working build you can install every week, so feedback lands early.',
  },
  {
    title: 'Ship',
    description:
      'Store submission, release automation and support after launch so the app stays healthy.',
  },
];

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Container>
      <View className={cn('border-t border-border py-20 md:py-28', className)}>{children}</View>
    </Container>
  );
}

export default function WebHomeScreen() {
  return (
    <View className="flex-1 bg-transparent">
      <Head>
        <title>Sevket Aydogdu — React Native Developer</title>
        <meta
          name="description"
          content="Senior React Native & Expo developer in Turkey. Cross-platform mobile apps for iOS, Android and web, from first commit to the stores."
        />
      </Head>

      {/* ——— Hero ——— */}
      <Container className="pb-20 pt-10 md:pb-28 md:pt-24">
        <Reveal>
          <View className="flex-row items-center gap-3">
            <View className="h-2 w-2 rounded-full bg-orange-500" />
            <Text className={type.mono}>
              {siteFacts.name} — {siteFacts.role}
            </Text>
          </View>
        </Reveal>

        <Reveal delay={80} className="mt-8 max-w-4xl">
          <Text className={type.display}>
            I build mobile apps that ship in weeks,{' '}
            <Span className="text-orange-600 dark:text-orange-400">not months.</Span>
          </Text>
        </Reveal>

        <Reveal delay={160} className="mt-8 max-w-2xl">
          <Text className={type.lead}>
            React Native and Expo apps for iOS, Android and the web — designed, built and released
            from a single codebase by someone who has done it for six years.
          </Text>
        </Reveal>

        <Reveal delay={240} className="mt-10 flex-row flex-wrap gap-3">
          <ButtonLink href="/contact">Start a project</ButtonLink>
          <ButtonLink href="/projects" variant="ghost">
            See the work
          </ButtonLink>
        </Reveal>

        <Reveal delay={320} className="mt-16 flex-row flex-wrap md:mt-24">
          {siteFacts.stats.map((stat, i) => (
            <View
              key={stat.label}
              className={cn(
                'w-1/2 gap-1 border-t border-border py-6 pr-6 md:w-1/3',
                i === 2 && 'hidden md:flex'
              )}>
              <Text className="font-display text-4xl text-foreground md:text-5xl">
                {stat.value}
              </Text>
              <Text className={type.small}>{stat.label}</Text>
            </View>
          ))}
        </Reveal>
      </Container>

      {/* ——— 01 Work ——— */}
      <Section>
        <SectionHeader
          index="01"
          label="Selected work"
          title="Apps in people's pockets"
          description="Products I've designed and built, from social platforms to live sports and everyday utilities."
          action={
            <ButtonLink href="/projects" variant="text">
              All projects
            </ButtonLink>
          }
        />
        <View className="mt-12 border-t border-border">
          {projects.map((project, i) => (
            <ProjectRow key={`${project.id}-${project.title}`} project={project} index={i} />
          ))}
        </View>
      </Section>

      {/* ——— 02 Services ——— */}
      <Section>
        <SectionHeader
          index="02"
          label="What I do"
          title="Everything between the idea and the store listing"
        />
        <View className="mt-12 flex-row flex-wrap gap-px overflow-hidden rounded-3xl border border-border bg-border">
          {services.map((service, i) => (
            <View
              key={service.title}
              className="w-full gap-3 bg-background p-8 md:w-[calc(50%-0.5px)] md:p-10">
              <Text className={cn(type.mono, type.accent)}>{String(i + 1).padStart(2, '0')}</Text>
              <Text className={type.h3}>{service.title}</Text>
              <Text className={type.body}>{service.description}</Text>
            </View>
          ))}
        </View>
      </Section>

      {/* ——— 03 Process ——— */}
      <Section>
        <SectionHeader
          index="03"
          label="How we work"
          title="A short, predictable process"
          description="No endless meetings or vague timelines. Clear scope, a build you can hold every week, and a launch plan."
        />
        <View className="mt-12 gap-10 md:flex-row md:gap-8">
          {steps.map((step, i) => (
            <View key={step.title} className="flex-1 gap-3">
              <View className="mb-3 h-0.5 w-full bg-border">
                <View
                  className="h-0.5 bg-orange-500"
                  style={{ width: `${((i + 1) / steps.length) * 100}%` }}
                />
              </View>
              <Text className={type.mono}>Step {String(i + 1).padStart(2, '0')}</Text>
              <Text className={type.h3}>{step.title}</Text>
              <Text className={type.body}>{step.description}</Text>
            </View>
          ))}
        </View>
      </Section>

      {/* ——— 04 Experience ——— */}
      <Section>
        <SectionHeader
          index="04"
          label="Experience"
          title="Where I've been building"
          action={
            <ButtonLink href="/aboutme" variant="text">
              Full story
            </ButtonLink>
          }
        />
        <View className="mt-12 border-t border-border">
          {jobHistory.map((job) => (
            <View
              key={`${job.company}-${job.period}`}
              className="gap-2 border-b border-border py-6 md:flex-row md:items-baseline md:gap-8">
              <Text className={cn(type.mono, 'md:w-56')}>{job.period.replace(/\s+/g, ' ')}</Text>
              <Text className="flex-1 font-heading text-lg text-foreground md:text-xl">
                {job.company}
              </Text>
              <Text className={cn(type.small, 'md:text-right')}>{job.position}</Text>
            </View>
          ))}
        </View>
      </Section>

      {/* ——— CTA ——— */}
      <Container className="pb-24 md:pb-32">
        <View className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-8 py-14 md:px-16 md:py-20">
          <LinearGradient
            colors={['rgba(249, 115, 22, 0.22)', 'rgba(249, 115, 22, 0.04)', 'transparent']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0.2, y: 1 }}
            style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
            pointerEvents="none"
          />
          <View className="max-w-2xl gap-6">
            <Text className={type.h1}>
              Have an app in mind?{' '}
              <Span className="text-orange-600 dark:text-orange-400">Let's ship it.</Span>
            </Text>
            <Text className={type.lead}>
              Tell me what you're building and where it needs to run. I'll get back to you with
              next steps.
            </Text>
            <View className="mt-4 flex-row flex-wrap items-center gap-3">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <CopyEmail />
            </View>
          </View>
        </View>

        <View className="mt-16 flex-row flex-wrap items-center justify-between gap-4">
          <Text className={type.mono}>
            © {new Date().getFullYear()} {siteFacts.name}
          </Text>
          <Text className={type.mono}>React Native · Expo · {siteFacts.location}</Text>
        </View>
      </Container>
    </View>
  );
}
