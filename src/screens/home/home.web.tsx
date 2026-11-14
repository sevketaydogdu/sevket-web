import { Href, Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { useViewportWidth } from '@/hooks/useViewportWidth';

import {
  ArrowDisc,
  Enter,
  Seo,
  Icon,
  SocialPill,
  Span,
  Wide,
  site,
  type,
  yearRange,
} from '@/components/site';
import { ProjectSlide, screensOf } from '@/components/site/projects';
import { Text } from '@/components/ui/text';
import { jobHistory } from '@/constants/job-history';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';

/** Projects with real screens lead; icon-only client work follows. */
const ORDERED = [...projects.filter((p) => screensOf(p)), ...projects.filter((p) => !screensOf(p))];

const STACK = [
  'React Native',
  'Expo',
  'TypeScript',
  'Next.js',
  'Reanimated',
  'Vite',
  'React Query',
  'Tailwind',
  'Expo Router',
  'Redux',
];

/** Lean the bubble toward the pointer: writes --mx / --my (-1…1) on the element. */
function usePointerLean(ref: React.RefObject<any>) {
  React.useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el || typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)) * 1.2;
        const y = ((e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)) * 1.2;
        el.style.setProperty('--mx', Math.max(-1, Math.min(1, x)).toFixed(3));
        el.style.setProperty('--my', Math.max(-1, Math.min(1, y)).toFixed(3));
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, [ref]);
}

/** Portrait card: name set in poster type over the photo, a soap bubble over the face. */
function PortraitCard() {
  const ref = React.useRef<View>(null);
  usePointerLean(ref);
  return (
    <View
      ref={ref}
      className="photo-scrim photo-scrim-bottom relative w-full overflow-hidden rounded-[32px] sm:rounded-[40px]"
      style={{ aspectRatio: 4 / 5, boxShadow: 'var(--card-shadow)' } as any}>
      <Image
        source={require('../../../assets/images/selfie.jpeg')}
        accessibilityLabel={`Portrait of ${site.name}`}
        resizeMode="cover"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />

      {/* Face sits at ~43% / 47% of the 4:5 crop. */}
      <View
        className="bubble-wrap"
        style={{ left: '17%', top: '23%', width: '60%', aspectRatio: 1 } as any}>
        <View className="bubble" />
      </View>

      <Text
        role="heading"
        aria-level="1"
        className="poster absolute inset-x-0 top-0 z-[2] px-5 pt-6 text-center text-[clamp(44px,13.5vw,74px)] text-[color:var(--color-on-photo)] sm:pt-8">
        Şevket{'\n'}Aydoğdu
      </Text>

      <View className="absolute inset-x-0 bottom-0 z-[2] flex-row flex-wrap justify-center gap-2 px-4 pb-5 sm:gap-3 sm:pb-6">
        {site.elsewhere.map((l) => (
          <SocialPill key={l.label} label={l.label} url={l.url} />
        ))}
      </View>
    </View>
  );
}

function MailCard() {
  return (
    <Pressable
      accessibilityRole="link"
      // @ts-expect-error web-only anchor props
      href={`mailto:${site.email}`}
      className="iri-ring rounded-[28px]">
      {({ hovered }) => (
        <View className="flex-row items-center justify-between gap-4 px-6 py-5">
          <View className="flex-1">
            <Text className="font-body text-[20px] font-bold tracking-[-0.02em] text-foreground">
              Write to me
            </Text>
            <Text className={cn(type.muted, 'mt-0.5')} numberOfLines={1}>
              {site.email}
            </Text>
          </View>
          <ArrowDisc hovered={hovered} />
        </View>
      )}
    </Pressable>
  );
}

function Hero() {
  return (
    <Wide className="pt-6 sm:pt-10 lg:pt-16">
      <View className="gap-10 lg:flex-row lg:items-center lg:gap-16">
        <Enter step={0} className="mx-auto w-full max-w-[460px] lg:mx-0 lg:w-[440px] lg:shrink-0">
          <PortraitCard />
        </Enter>

        <View className="mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none lg:flex-1">
          <Enter step={1}>
            <Text className="text-center font-body text-[17px] text-muted sm:text-[19px] lg:text-left">
              {site.role}
            </Text>
            <Text className="poster mt-5 text-center text-[clamp(42px,10.5vw,92px)] text-foreground lg:text-left">
              Apps that{'\n'}feel right <Span className="poster-outline">in the hand.</Span>
            </Text>
          </Enter>
          <Enter step={2} className="mt-7 gap-4">
            <Text className={cn(type.body, 'text-center text-[16px] lg:text-left lg:text-[17px]')}>
              I design and build apps for phones and the web — React Native and Expo on mobile,
              React, Next.js and Vite on the web. A UX/UI designer first, now senior React Native
              developer at {site.current.company}.
            </Text>
          </Enter>
          <Enter step={3} className="mt-8">
            <MailCard />
          </Enter>
        </View>
      </View>
    </Wide>
  );
}

function SectionHead({
  title,
  outline,
  aside,
}: {
  title: string;
  outline?: string;
  aside?: React.ReactNode;
}) {
  return (
    <View className="flex-row items-end justify-between gap-4">
      <Text
        role="heading"
        aria-level="2"
        className="poster text-[clamp(48px,13vw,120px)] text-foreground">
        {title}
        {outline ? (
          <>
            {'\n'}
            <Span className="poster-outline">{outline}</Span>
          </>
        ) : null}
      </Text>
      {aside}
    </View>
  );
}

function RoundButton({
  label,
  flip,
  onPress,
}: {
  label: string;
  flip?: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      className="h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-line sm:h-14 sm:w-14">
      {({ hovered }) => (
        <View
          className="text-foreground"
          style={
            {
              transform: [{ rotate: flip ? '-135deg' : '45deg' }, { scale: hovered ? 1.15 : 1 }],
              transitionProperty: 'transform',
              transitionDuration: '300ms',
            } as any
          }>
          <Icon name="Arrow" size={20} />
        </View>
      )}
    </Pressable>
  );
}

function Work() {
  const vw = useViewportWidth();
  const slideW = Math.round(Math.min(vw < 640 ? vw * 0.82 : vw * 0.42, 440));
  const gap = vw < 640 ? 14 : 24;
  const track = React.useRef<View>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current as unknown as HTMLElement | null;
    el?.scrollBy({ left: dir * (slideW + gap), behavior: 'smooth' });
  };
  // Left edge of the track lines up with <Wide>'s content; slides bleed off the right.
  const inset = Math.max((vw - 1080) / 2, 0) + (vw >= 768 ? 24 : 16);

  return (
    <View className="mt-28 sm:mt-40">
      <Wide>
        <SectionHead
          title="Selected"
          outline="work"
          aside={
            <View className="hidden flex-row gap-2 pb-2 sm:flex">
              <RoundButton label="Previous project" flip onPress={() => scroll(-1)} />
              <RoundButton label="Next project" onPress={() => scroll(1)} />
            </View>
          }
        />
      </Wide>
      <View
        ref={track}
        className="snap-x mt-8 flex-row pb-10 pt-2 sm:mt-12"
        style={
          {
            gap,
            paddingLeft: inset,
            paddingRight: inset,
            scrollPaddingLeft: inset,
          } as any
        }>
        {ORDERED.map((p, i) => (
          <ProjectSlide key={p.title} project={p} width={slideW} index={i} />
        ))}
      </View>
      <Wide>
        <Link href={'/projects' as Href} asChild>
          <Pressable accessibilityRole="link" className="self-start">
            {({ hovered }) => (
              <Text
                className={cn(
                  'font-body text-[15px] font-medium text-foreground underline decoration-1 underline-offset-4',
                  hovered ? 'decoration-foreground' : 'decoration-line'
                )}>
                All projects, written up →
              </Text>
            )}
          </Pressable>
        </Link>
      </Wide>
    </View>
  );
}

function StackTicker() {
  const items = [...STACK, ...STACK];
  return (
    <View
      className="marquee mt-28 overflow-hidden border-y border-border py-6 sm:mt-40 sm:py-8"
      accessibilityLabel={`Stack: ${STACK.join(', ')}`}>
      <View className="marquee-track" aria-hidden>
        {items.map((t, i) => (
          <View key={`${t}-${i}`} className="flex-row items-center">
            <Text
              className={cn(
                'poster px-5 text-[clamp(36px,7vw,72px)] text-foreground',
                i % 2 === 1 && 'poster-outline'
              )}>
              {t}
            </Text>
            <View
              className="h-4 w-4 rounded-full sm:h-5 sm:w-5"
              style={
                {
                  background: 'conic-gradient(from var(--iri-angle), var(--iri))',
                  animation: 'iri-spin 6s linear infinite',
                } as any
              }
            />
          </View>
        ))}
      </View>
    </View>
  );
}

function Experience() {
  return (
    <Wide className="mt-28 sm:mt-40">
      <SectionHead title="Experience" />
      <View className="mt-10 border-t border-border sm:mt-14">
        {jobHistory.map((job) => (
          <Pressable key={`${job.company}-${job.period}`} className="border-b border-border">
            {({ hovered }) => (
              <View
                className="gap-1 py-6 sm:flex-row sm:items-center sm:gap-8 sm:py-8"
                style={
                  {
                    transform: [{ translateX: hovered ? 10 : 0 }],
                    transitionProperty: 'transform',
                    transitionDuration: '500ms',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  } as any
                }>
                <Text className="poster tabular text-[28px] text-muted sm:w-[260px] sm:text-[40px]">
                  {yearRange(job.period)}
                </Text>
                <View className="flex-1">
                  <Text className="font-body text-[19px] font-bold tracking-[-0.02em] text-foreground sm:text-[22px]">
                    {job.company}
                  </Text>
                  <Text className={type.muted}>{job.position}</Text>
                </View>
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </Wide>
  );
}

export default function WebHomeScreen() {
  return (
    <View className="flex-1">
      <Seo
        title="Şevket Aydoğdu — React Native & web developer"
        description="Şevket Aydoğdu designs and builds mobile apps with React Native and Expo, and web apps with React, Next.js and Vite."
      />

      <Hero />
      <Work />
      <StackTicker />
      <Experience />
    </View>
  );
}
