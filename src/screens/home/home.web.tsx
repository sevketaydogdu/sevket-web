import { jobHistory } from '@/constants/job-history';
import { projects } from '@/constants/projects';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';
import { LinearGradient } from 'expo-linear-gradient';
import Head from 'expo-router/head';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { Text } from '@/components/ui/text';

const featuredProjects = projects;
// 3×4 grid (12 tiles) to match design; fill with projects then repeat if needed
const featuredJobs = jobHistory.slice(0, 3);

const featureCards = [
  {
    title: 'Cross-platform',
    description:
      'One codebase for iOS, Android, and web. Ship to every platform without rewriting.',
  },
  {
    title: 'React Native & Expo',
    description:
      'Modern stack that ships fast. TypeScript, Expo Router, and production-ready tooling.',
  },
  {
    title: 'From idea to store',
    description: 'From concept to App Store and Play Store. Architecture, build, and release.',
  },
  {
    title: 'Built to last',
    description: 'Scalable structure, clear code, and maintainable apps that grow with you.',
  },
];

const steps = [
  {
    step: 1,
    title: 'Define & design',
    description:
      'We align on your vision, scope, and UX. Wireframes and flows so we build the right thing.',
  },
  {
    step: 2,
    title: 'Build with React Native',
    description:
      'I build the app with Expo and TypeScript. You get regular updates and a single codebase for all platforms.',
  },
  {
    step: 3,
    title: 'Ship to the stores',
    description:
      'App Store and Play Store submission, CI/CD, and post-launch support so your app stays live.',
  },
];

export default function WebHomeScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <View className="flex-1 bg-transparent">
      <Head>
        <title>Sevket Aydogdu — React Native Developer</title>
        <meta
          name="description"
          content="React Native & Expo developer based in Turkey. Building cross-platform mobile apps with TypeScript and modern tooling."
        />
      </Head>

      {/* ——— Hero (editorial, confident, with depth and motion) ——— */}
      <View className="section-container-wide mx-auto w-full relative min-h-[72vh] justify-center overflow-hidden pt-24 pb-32 md:min-h-[75vh] md:pt-32 md:pb-40">
        {/* Top gradient — warm wash */}
        <LinearGradient
          colors={['rgba(234, 88, 12, 0.08)', 'rgba(234, 88, 12, 0.02)', 'transparent']}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '60%' }}
        />
        {/* Bottom-right ambient glow */}
        <LinearGradient
          colors={['transparent', 'transparent', 'rgba(234, 88, 12, 0.04)']}
          style={{ position: 'absolute', left: '40%', right: 0, top: '35%', bottom: 0 }}
        />
        {/* Decorative orb — adds depth without clutter */}
        <View
          className="absolute right-0 top-1/2 -translate-y-1/2 md:right-[5%] lg:right-[12%]"
          style={{ width: 320, height: 320 }}
          pointerEvents="none">
          <LinearGradient
            colors={['rgba(234, 88, 12, 0.12)', 'rgba(234, 88, 12, 0.04)', 'transparent']}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 9999,
              opacity: 0.9,
            }}
          />
        </View>

        <View className="relative z-10 mx-auto w-full max-w-4xl">
          <View className="flex flex-col items-center text-center md:items-center">
            {/* Label — establishes context */}
            <Text
              className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400/90 md:text-sm">
              React Native & Expo
            </Text>

            {/* Headline — one clear idea */}
            <View
              className="mt-4 md:mt-5">
              <Text className="text-center font-display text-4xl leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
                Create your app in weeks,{' '}
                <Text className="font-display italic text-orange-400">not months.</Text>
              </Text>
            </View>

            {/* Accent line — editorial detail */}
            <View
              className="mt-5 h-0.5 w-16 rounded-full bg-orange-500 md:mt-6 md:w-20"
            />

            {/* Subline — supporting, not competing */}
            <Text
              className="section-subline mx-auto mt-6 max-w-xl text-center text-white/70 md:max-w-2xl md:text-lg md:leading-relaxed">
              Bring your product to life with one codebase. iOS, Android, and web — shipped and
              ready for launch.
            </Text>

            {/* CTAs — primary + secondary with clear hierarchy */}
            <View
              className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4 md:mt-12 md:gap-5">
              <Link href={'/contact' as any} asChild>
                <Pressable>
                  <View className="rounded-full bg-orange-500 px-8 py-4 shadow-lg shadow-orange-500/25 active:opacity-90">
                    <Text className="text-base font-semibold text-white">Get in touch</Text>
                  </View>
                </Pressable>
              </Link>
              <Link href={'/projects' as any} asChild>
                <Pressable>
                  <View className="rounded-full border border-white/25 bg-white/[0.04] px-8 py-4 active:bg-white/[0.08]">
                    <Text className="text-base font-medium text-white">
                      View work <Text className="text-orange-400">→</Text>
                    </Text>
                  </View>
                </Pressable>
              </Link>
            </View>

            {/* Credit — subtle, trustworthy */}
            <Text
              className="mt-8 text-center text-sm tracking-wide text-white/45 md:mt-10">
              Sevket Aydogdu · React Native & Expo · Turkey
            </Text>
          </View>
        </View>
      </View>

      {/* ——— Trust bar (Sourceful: "Trusted by...") ——— */}
      <View className="border-y border-white/5 bg-white/[0.02] py-6 md:py-8">
        <View className="section-container">
          <Text className="text-center text-sm font-medium text-white/60 md:text-base">
            Trusted by teams building the next generation of apps
          </Text>
          <Text className="mt-2 text-center text-sm text-white/40">
            4+ years experience · 5+ apps shipped · React Native · Expo · TypeScript
          </Text>
        </View>
      </View>

      {/* ——— Create everything you need (Sourceful-style feature grid) ——— */}
      <View className="section-container-wide py-20 md:py-28">
        <Text className="section-heading text-center">
          Everything you need to ship apps
        </Text>
        <Text className="section-subline mx-auto mt-3 max-w-2xl text-center">
          From idea to App Store and Play Store — one place, one codebase.
        </Text>
        <View className="mt-12 gap-6 md:flex-row md:flex-wrap md:gap-6">
          {featureCards.map((card) => (
            <View
              key={card.title}
              className="flex-1 min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:min-w-[260px] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(25%-0.75rem)]">
              <Text className="text-lg font-bold text-white">{card.title}</Text>
              <Text className="mt-2 text-sm leading-relaxed text-white/60">{card.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* ——— 3 steps (Sourceful: "Professional visuals in 3 simple steps") ——— */}
      <View className="border-t border-white/5 bg-white/[0.02] py-20 md:py-28">
        <View className="section-container-wide">
          <Text
            className="section-heading text-center">
            From idea to launch in 3 steps
          </Text>
          <Text
            className="section-subline mx-auto mt-3 max-w-xl text-center">
            A clear process so we ship on time and on scope.
          </Text>
          <View className="mt-14 gap-10 md:flex-row md:gap-8 lg:gap-12">
            {steps.map((item, index) => (
              <View
                key={item.step}
                className="flex-1 min-w-0">
                <View className="mb-4 h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20">
                  <Text className="text-lg font-bold text-orange-400">{item.step}</Text>
                </View>
                <Text className="text-xl font-bold text-white">{item.title}</Text>
                <Text className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </Text>
              </View>
            ))}
          </View>
          <View
            className="mt-12 flex flex-row justify-center">
            <Link href={'/contact' as any} asChild>
              <Pressable>
                <Text className="text-orange-400 font-medium">Start a project →</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>

      {/* ——— Old way vs. my way (Sourceful-style comparison) ——— */}
      <View className="border-t border-white/5 bg-white/[0.02] py-20 md:py-28">
        <View className="section-container-wide">
          <Text
            className="section-heading text-center">
            The old way vs. the way we work.
          </Text>
          <Text
            className="section-subline mx-auto mt-3 max-w-2xl text-center">
            Before working with a focused React Native developer, app projects were slow, expensive,
            and hard to align. Here's how we do it now.
          </Text>
          <View className="mt-12 flex flex-col gap-6 md:flex-row md:gap-6">
            {/* Left: The old way */}
            <View
              className="flex-1 min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg md:p-8">
              <Text className="text-xl font-bold text-white">The old way</Text>
              <Text className="mt-1 text-sm text-white/60">Here's what you often get:</Text>
              <View className="mt-6 gap-4">
                {[
                  'Weeks of back-and-forth before a single line of code',
                  'Agencies that over-scope and blow the budget',
                  'Freelancers who disappear mid-project',
                  'Unclear timelines and endless "we need to discuss"',
                  'Native-only builds that double the work',
                  'No single point of contact who actually ships',
                ].map((item, i) => (
                  <View key={i} className="flex-row items-start gap-3">
                    <View className="mt-0.5 h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/30">
                      <Text className="text-xs font-bold text-white/80">✕</Text>
                    </View>
                    <Text className="flex-1 text-sm leading-snug text-white/70">{item}</Text>
                  </View>
                ))}
              </View>
            </View>
            {/* Right: The Sevket way — gradient card */}
            <View className="flex-1 min-w-0 overflow-hidden rounded-2xl border border-orange-500/20 shadow-xl md:border-orange-500/30">
              <LinearGradient
                colors={[
                  'rgba(234, 88, 12, 0.18)',
                  'rgba(234, 88, 12, 0.06)',
                  'rgba(234, 88, 12, 0.02)',
                ]}
                style={{ flex: 1 }}>
                <View className="p-6 md:p-8">
                  <Text className="text-xl font-bold text-white">The way we work</Text>
                  <Text className="mt-1 text-sm text-white/70">
                    Direct collaboration, one codebase, clear scope.
                  </Text>
                  <View className="mt-6 gap-4">
                    {[
                      'Clear scope and timeline from day one',
                      'One React Native codebase for iOS and Android',
                      'Regular updates and a single point of contact',
                      'Iterate in weeks, not months',
                      'Expo and TypeScript — modern, maintainable stack',
                      'Founder-friendly: you get someone who ships',
                    ].map((item, i) => (
                      <View key={i} className="flex-row items-start gap-3">
                        <View className="mt-0.5 h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/40 border border-orange-400/50">
                          <Text className="text-xs font-bold text-white">✓</Text>
                        </View>
                        <Text className="flex-1 text-sm leading-snug text-white/90">{item}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
          <View className="mt-10 flex flex-row justify-center">
            <Link href={'/contact' as any} asChild>
              <Pressable>
                <View className="rounded-full bg-orange-500 px-10 py-4">
                  <Text className="text-base font-semibold text-white">Get in touch</Text>
                </View>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>

      {/* ——— Projects: light section, white card, 3×4 grid, gradient CTA (match design) ——— */}
      <View className="w-full border-t border-white/5  md:py-28">
        <View className="section-container-wide mx-auto w-full">
          {/* Single white card: heading + subtitle + grid + CTA */}
          <View
            className="overflow-hidden rounded-2xl  p-8 shadow-xl md:p-10 md:rounded-[20px]"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.08,
              shadowRadius: 16,
              elevation: 8,
            }}>
            <Text className="text-center text-3xl font-semibold tracking-tight   md:text-4xl">
              Bringing your brand vision to life.
            </Text>
            <Text className="mt-2 text-center text-xl font-normal   md:text-2xl">
              Exactly as you've always imagined it
            </Text>

            {/* 3×4 image grid with rounded tiles */}
            <View className="mt-10 grid grid-cols-5 gap-4 md:mt-12 md:gap-4">
              {featuredProjects.map((proj, index) => (
                <View key={`${proj.id}-${proj.title}-${index}`}>
                  <Link
                    href={`/projects/${clearSpacesAndSpecialCharacters(proj.title)}` as any}
                    asChild>
                    <Pressable className="h-full">
                      <View className="aspect-square w-full overflow-hidden rounded-2xl ">
                        <Image
                          source={proj.imagePath}
                          resizeMode="cover"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </View>
                    </Pressable>
                  </Link>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* ——— Work with a developer who ships (Sourceful: "Work with professional designers") ——— */}
      <View className="border-t border-white/5 bg-white/[0.02] py-20 md:py-28">
        <View className="section-container">
          <Text className="section-heading text-center">
            Work with a developer who ships
          </Text>
          <Text className="section-subline mx-auto mt-3 max-w-xl text-center">
            No endless meetings or vague timelines. Direct collaboration, clear scope, and apps that
            go live.
          </Text>
          <View className="mt-8 flex flex-row flex-wrap justify-center gap-6 md:gap-10">
            <View className="items-center">
              <Text className="text-3xl font-bold text-orange-400 md:text-4xl">4+</Text>
              <Text className="text-sm text-white/50">Years experience</Text>
            </View>
            <View className="items-center">
              <Text className="text-3xl font-bold text-orange-400 md:text-4xl">5+</Text>
              <Text className="text-sm text-white/50">Apps in production</Text>
            </View>
          </View>
          <View className="mt-10 flex flex-row justify-center">
            <Link href={'/contact' as any} asChild>
              <Pressable>
                <View className="rounded-full bg-orange-500 px-8 py-4">
                  <Text className="text-base font-semibold text-white">Start a project</Text>
                </View>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>

      <View className="section-container py-16 md:py-20">
        <Text className="section-heading">
          Previously
        </Text>
        <Text className="section-subline mt-3">
          Senior React Native roles at product companies and agencies.
        </Text>
        <View className="mt-10 gap-8 md:flex-row md:flex-wrap md:gap-10">
          {featuredJobs.map((job, index) => (
            <View
              key={`${job.company}-${index}`}
              className="flex-1 min-w-0 md:min-w-[200px]">
              <Text className="text-lg font-bold text-white">{job.company}</Text>
              <Text className="mt-0.5 text-orange-400/90 font-medium">{job.position}</Text>
              <Text className="mt-1 text-sm text-white/50">{job.period}</Text>
            </View>
          ))}
        </View>
        <View className="mt-8">
          <Link href={'/aboutme' as any} asChild>
            <Pressable>
              <Text className="text-orange-400 font-medium">Full story →</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* ——— Big CTA (Sourceful: "Bringing your brand vision to life") ——— */}
      <View className="relative overflow-hidden">
        <LinearGradient
          colors={['rgba(234, 88, 12, 0.14)', 'rgba(234, 88, 12, 0.05)']}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
        />
        <View className="section-container relative z-10 py-24 md:py-32">
          <View className="mx-auto max-w-2xl text-center">
            <Text className="font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Bringing your app idea to life.{' '}
              <Text className="font-display italic text-orange-400">
                Exactly as you've imagined it.
              </Text>
            </Text>
            <Text className="mt-6 text-lg text-white/60">
              Get in touch for a quick chat about your project.
            </Text>
            <View className="mt-10 flex flex-row justify-center">
              <Link href={'/contact' as any} asChild>
                <Pressable>
                  <View className="rounded-full bg-orange-500 px-10 py-4">
                    <Text className="text-base font-semibold text-white">Get in touch</Text>
                  </View>
                </Pressable>
              </Link>
            </View>
          </View>
        </View>
      </View>

      {/* ——— Footer CTA strip (Sourceful: "Get started today") ——— */}
      <View className="border-t border-white/5 py-8 md:py-10">
        <View className="section-container">
          <View className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
            <Text className="text-center text-base font-medium text-white/80">
              Get in touch today
            </Text>
            <Link href={'/contact' as any} asChild>
              <Pressable>
                <View className="rounded-full border border-orange-500/50 bg-orange-500/10 px-6 py-2.5">
                  <Text className="text-sm font-semibold text-orange-400">Say hello</Text>
                </View>
              </Pressable>
            </Link>
          </View>
          <Text className="mt-4 text-center text-xs text-white/40">
            Sevket Aydogdu · React Native & Expo · Turkey
          </Text>
        </View>
      </View>
    </View>
  );
}
