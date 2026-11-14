import { Href, Link, usePathname } from 'expo-router';
import React from 'react';
import { Pressable, Text as RNText, View, type TextProps, type ViewProps } from 'react-native';

import { Text } from '@/components/ui/text';
import { useTheme } from '@/contexts/ThemeContext';
import { jobHistory } from '@/constants/job-history';
import { cn } from '@/lib/utils';

/**
 * Site primitives.
 *
 * One type size for almost everything (15px Geist). Hierarchy comes from
 * weight and grey, not from size. Text lives in a narrow column; project
 * media breaks out wider. No accent colour — links are hairline underlines.
 */
export const type = {
  body: 'font-body text-[15px] leading-[1.65] tracking-[-0.006em] text-foreground',
  strong: 'font-body text-[15px] leading-[1.65] tracking-[-0.011em] font-medium text-foreground',
  muted: 'font-body text-[15px] leading-[1.65] tracking-[-0.006em] text-muted',
  small: 'font-body text-[13px] leading-[1.5] text-muted',
} as const;

export const site = {
  name: 'Şevket Aydoğdu',
  role: 'React Native & web developer',
  email: 'sevketaydogdu34@gmail.com',
  current: jobHistory[0],
  elsewhere: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sevketaydogdu/' },
    { label: 'GitHub', url: 'https://github.com/sevketaydogdu' },
    { label: 'X', url: 'https://www.x.com/sevketaydogdu/' },
  ],
};

/** "Jul 2025 - present" → "2025 — Now", "Jan 2023 - Jul 2025" → "2023 — 2025". */
export function yearRange(period: string) {
  const years = period.match(/\d{4}/g) ?? [];
  const start = years[0] ?? '';
  if (/present/i.test(period)) return `${start} — Now`;
  const end = years[1] ?? start;
  return end === start ? start : `${start} — ${end}`;
}

/** Inline span for nested text — RN Text inherits size/family from its parent. */
export const Span = React.forwardRef<RNText, TextProps & { className?: string }>(function Span(
  { className, ...props },
  ref
) {
  return <RNText ref={ref} className={className} {...props} />;
});

/** The reading column. */
export function Column({ className, ...props }: ViewProps & { className?: string }) {
  return <View className={cn('mx-auto w-full max-w-[640px] px-6', className)} {...props} />;
}

/** Media width — breaks out of the column on larger screens. */
export function Wide({ className, ...props }: ViewProps & { className?: string }) {
  return (
    <View className={cn('mx-auto w-full max-w-[1080px] px-4 md:px-6', className)} {...props} />
  );
}

/** Fades content in once on load. `step` staggers siblings by 70ms. */
export function Enter({
  step = 0,
  className,
  style,
  ...props
}: ViewProps & { step?: number; className?: string }) {
  return (
    <View
      className={cn('enter', className)}
      style={[{ animationDelay: `${80 + step * 70}ms` } as any, style]}
      {...props}
    />
  );
}

/** Underlined inline text link. Internal routes by default; `external` opens a new tab. */
export function InkLink({
  href,
  children,
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  if (external) {
    return (
      <Span
        className={cn('ink-link cursor-pointer', className)}
        accessibilityRole="link"
        // @ts-expect-error web-only anchor props
        href={href}
        hrefAttrs={{ target: '_blank', rel: 'noopener noreferrer' }}>
        {children}
      </Span>
    );
  }
  return (
    <Link href={href as Href} asChild>
      <Span className={cn('ink-link cursor-pointer', className)}>{children}</Span>
    </Link>
  );
}

/** A quiet section heading: grey, sentence case, same size as the text. */
export function Section({
  title,
  aside,
  children,
  className,
}: {
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <View className={className}>
      <View className="mb-5 flex-row items-baseline justify-between">
        <Text role="heading" aria-level="2" className={type.muted}>
          {title}
        </Text>
        {aside ? <Text className={type.muted}>{aside}</Text> : null}
      </View>
      {children}
    </View>
  );
}

/** Label / value row used for metadata and contact details. Stacks on phones. */
export function Row({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <View className={cn('py-2 sm:flex-row sm:gap-6 sm:py-1.5', className)}>
      <Text className={cn(type.muted, 'sm:w-32 sm:shrink-0')}>{label}</Text>
      <Text className={cn(type.body, 'sm:flex-1')}>{children}</Text>
    </View>
  );
}

/** Experience list: company and role on the left, years on the right. */
export function Experience({ detailed = false }: { detailed?: boolean }) {
  return (
    <View className={detailed ? 'gap-9' : 'gap-5'}>
      {jobHistory.map((job) => (
        <View key={`${job.company}-${job.period}`}>
          <View className="flex-row items-baseline justify-between gap-6">
            <Text className={cn(type.strong, 'flex-1')}>{job.company}</Text>
            <Text className={cn(type.muted, 'tabular')}>{yearRange(job.period)}</Text>
          </View>
          <Text className={type.muted}>{job.position}</Text>
          {detailed ? (
            <Text className={cn(type.body, 'mt-3')}>
              {job.description.split('\n')[0].replace(/^•\s*/, '').trim()}
            </Text>
          ) : null}
        </View>
      ))}
    </View>
  );
}

const NAV = [
  { title: 'Work', href: '/projects' },
  { title: 'About', href: '/aboutme' },
  { title: 'Contact', href: '/contact' },
];

/* ───────────── Brand icons (inline SVG, web only) ───────────── */

const ICON_PATHS: Record<string, string> = {
  GitHub:
    'M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z',
  X: 'M17.75 2h3.07l-6.7 7.66L22 22h-6.17l-4.83-6.32L5.47 22H2.4l7.17-8.2L2 2h6.33l4.37 5.77L17.75 2Zm-1.08 18.17h1.7L7.4 3.74H5.58l11.09 16.43Z',
  LinkedIn:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4V9.75Z',
  Arrow: 'M7 17 17 7M9 7h8v8',
};

export function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  if (name === 'Arrow') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d={d} stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

/** Social link as a cream pill with an iridescent, slowly turning rim. */
export function SocialPill({ label, url }: { label: string; url: string }) {
  return (
    <Pressable
      accessibilityRole="link"
      // @ts-expect-error web-only anchor props
      href={url}
      hrefAttrs={{ target: '_blank', rel: 'noopener noreferrer' }}
      className="iri-pill flex-row items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3">
      <View className="text-foreground">
        <Icon name={label} size={18} />
      </View>
      <Text className="font-body text-[15px] font-semibold tracking-[-0.01em] text-foreground sm:text-[16px]">
        {label}
      </Text>
    </Pressable>
  );
}

/** Round dark button with a diagonal arrow — the one call to action shape. */
export function ArrowDisc({ size = 52, hovered = false }: { size?: number; hovered?: boolean }) {
  return (
    <View
      className="items-center justify-center rounded-full bg-foreground text-background"
      style={
        {
          width: size,
          height: size,
          transform: [{ rotate: hovered ? '45deg' : '0deg' }],
          transitionProperty: 'transform',
          transitionDuration: '500ms',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        } as any
      }>
      <Icon name="Arrow" size={Math.round(size * 0.4)} />
    </View>
  );
}

/** Big poster heading for a page. `outline` sets the second line hollow. */
export function PageTitle({
  children,
  outline,
  className,
}: {
  children: React.ReactNode;
  outline?: React.ReactNode;
  className?: string;
}) {
  return (
    <Text
      role="heading"
      aria-level="1"
      className={cn('poster text-[clamp(56px,16vw,128px)] text-foreground', className)}>
      {children}
      {outline ? (
        <>
          {'\n'}
          <Span className="poster-outline">{outline}</Span>
        </>
      ) : null}
    </Text>
  );
}

function NavLink({ title, href, active }: { title: string; href: string; active: boolean }) {
  return (
    <Link href={href as Href} asChild>
      <Pressable
        accessibilityRole="link"
        aria-current={active ? 'page' : undefined}
        className={cn(
          'rounded-full px-3 py-2 transition-colors duration-200 sm:px-4',
          active ? 'bg-foreground' : 'bg-transparent'
        )}>
        {({ hovered }) => (
          <Text
            className={cn(
              'font-body text-[14px] font-medium tracking-[-0.006em] transition-colors duration-150 sm:text-[15px]',
              active ? 'text-background' : hovered ? 'text-foreground' : 'text-muted'
            )}>
            {title}
          </Text>
        )}
      </Pressable>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { colorScheme, toggleColorScheme } = useTheme();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <View
      className="z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4"
      style={{ position: 'sticky', top: 0 } as any}>
      <View className="glass mx-auto w-full max-w-[1080px] flex-row items-center justify-between rounded-full border border-border py-1.5 pl-2 pr-1.5 sm:pl-3">
        <Link href={'/' as Href} asChild>
          <Pressable accessibilityRole="link" accessibilityLabel="Home" className="flex-row items-center gap-2 py-1 pl-1 pr-2">
            {({ hovered }) => (
              <>
                <View
                  className="h-8 w-8 items-center justify-center rounded-full bg-foreground"
                  style={
                    {
                      transform: [{ rotate: hovered ? '-12deg' : '0deg' }],
                      transitionProperty: 'transform',
                      transitionDuration: '400ms',
                    } as any
                  }>
                  <Text className="poster text-[15px] leading-none text-background">ŞA</Text>
                </View>
                <Text className="hidden font-body text-[15px] font-semibold tracking-[-0.01em] text-foreground md:flex">
                  {site.name}
                </Text>
              </>
            )}
          </Pressable>
        </Link>
        <View className="flex-row items-center gap-0.5 sm:gap-1">
          {NAV.map((item) => (
            <NavLink key={item.href} {...item} active={isActive(item.href)} />
          ))}
          <Pressable
            onPress={toggleColorScheme}
            accessibilityRole="button"
            accessibilityLabel={colorScheme === 'dark' ? 'Use light theme' : 'Use dark theme'}
            className="ml-0.5 h-10 w-10 items-center justify-center rounded-full">
            {({ hovered }) => (
              <View
                className="h-4 w-4 flex-row overflow-hidden rounded-full border-[1.5px] border-foreground"
                style={
                  {
                    transform: [{ rotate: hovered ? '180deg' : '0deg' }],
                    transitionProperty: 'transform',
                    transitionDuration: '500ms',
                  } as any
                }>
                <View className="h-full w-1/2 bg-foreground" />
              </View>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export function SiteFooter() {
  return (
    <View className="mt-24 sm:mt-32">
      <Wide>
        <View className="overflow-hidden rounded-[28px] bg-foreground px-6 pb-8 pt-10 sm:rounded-[40px] sm:px-12 sm:pb-12 sm:pt-16">
          <Text className="font-body text-[15px] text-background opacity-70">
            Have an app in mind?
          </Text>
          <Pressable
            accessibilityRole="link"
            // @ts-expect-error web-only anchor props
            href={`mailto:${site.email}`}
            className="mt-3 self-start">
            {({ hovered }) => (
              <View className="flex-row flex-wrap items-center gap-x-5 gap-y-3">
                <Text
                  className={cn(
                    'poster text-[clamp(52px,13vw,148px)] text-background transition-opacity duration-200',
                    hovered && 'opacity-80'
                  )}>
                  Say hello
                </Text>
                <View
                  className="items-center justify-center rounded-full bg-background text-foreground"
                  style={
                    {
                      width: 'clamp(48px, 10vw, 96px)',
                      height: 'clamp(48px, 10vw, 96px)',
                      transform: [{ rotate: hovered ? '45deg' : '0deg' }],
                      transitionProperty: 'transform',
                      transitionDuration: '500ms',
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    } as any
                  }>
                  <Icon name="Arrow" size={32} />
                </View>
              </View>
            )}
          </Pressable>
          <Text className="mt-4 font-body text-[15px] text-background underline decoration-1 underline-offset-4 opacity-80">
            {site.email}
          </Text>

          <View className="mt-14 gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <View className="flex-row flex-wrap gap-x-6 gap-y-2">
              {site.elsewhere.map((l) => (
                <InkLink key={l.label} href={l.url} external className="font-body text-[15px] text-background">
                  {l.label}
                </InkLink>
              ))}
            </View>
            <Text className="font-body text-[13px] text-background opacity-60">
              © {new Date().getFullYear()} {site.name} · Built with Expo Router
            </Text>
          </View>
        </View>
      </Wide>
      <View className="h-6 sm:h-10" />
    </View>
  );
}

export { Seo } from './Seo';
