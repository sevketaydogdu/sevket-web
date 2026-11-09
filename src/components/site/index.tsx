import { Href, Link, usePathname } from 'expo-router';
import React from 'react';
import { Linking, Pressable, Text as RNText, View, type TextProps, type ViewProps } from 'react-native';

import { Text } from '@/components/ui/text';
import { useTheme } from '@/contexts/ThemeContext';
import { jobHistory } from '@/constants/job-history';
import { cn } from '@/lib/utils';

/**
 * Site primitives.
 *
 * The look is typographic: hierarchy comes from size and weight contrast on a
 * strict grid, not from cards, pills, gradients or icons. Classes are plain
 * Tailwind utilities so tailwind-merge can override the `text-base` default
 * applied by `@/components/ui/text`.
 */
export const type = {
  /** Large running statement (home intro, page intros). */
  statement:
    'font-body text-[1.9rem] leading-[1.18] tracking-[-0.02em] text-foreground md:text-[2.9rem] md:leading-[1.1] lg:text-[3.4rem]',
  /** Page / project titles. */
  title:
    'font-heading text-[3.25rem] leading-[0.95] tracking-[-0.045em] text-foreground md:text-[5.5rem] lg:text-[7rem]',
  /** Row titles. */
  heading: 'font-heading text-xl tracking-[-0.01em] text-foreground md:text-2xl',
  /** Long-form reading text. */
  prose: 'font-body text-lg leading-[1.6] text-foreground md:text-[1.2rem]',
  body: 'font-body text-base leading-relaxed text-foreground',
  /** Labels and metadata: sentence case, small, muted. No mono, no tracking. */
  label: 'font-body text-sm text-muted',
  meta: 'font-body text-sm leading-relaxed text-muted',
} as const;

export const site = {
  name: 'Şevket Aydoğdu',
  role: 'React Native developer',
  location: 'Turkey',
  timeZone: 'Europe/Istanbul',
  email: 'sevketaydogdu34@gmail.com',
  current: jobHistory[0],
  elsewhere: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sevketaydogdu/' },
    { label: 'GitHub', url: 'https://github.com/sevketaydogdu' },
    { label: 'X', url: 'https://www.x.com/sevketaydogdu/' },
  ],
};

/** "Jul 2025 - present" → "2025–Now", "Jan 2023 - Jul 2025" → "2023–25". */
export function yearRange(period: string) {
  const years = period.match(/\d{4}/g) ?? [];
  const start = years[0] ?? '';
  if (/present/i.test(period)) return `${start}–Now`;
  const end = years[1] ?? start;
  return end === start ? start : `${start}–${end.slice(2)}`;
}

/** Inline span for nested text — RN Text inherits size/family from its parent. */
export function Span({ className, ...props }: TextProps & { className?: string }) {
  return <RNText className={className} {...props} />;
}

/** 12-column-feeling page frame. */
export function Frame({ className, ...props }: ViewProps & { className?: string }) {
  return (
    <View className={cn('mx-auto w-full max-w-[1320px] px-5 md:px-10', className)} {...props} />
  );
}

export function Rule({ className }: { className?: string }) {
  return <View className={cn('h-px w-full bg-border', className)} />;
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

/** Section heading row: a small label on the left, an optional aside on the right. */
export function SectionLabel({ children, aside }: { children: string; aside?: React.ReactNode }) {
  return (
    <View className="flex-row items-baseline justify-between border-t border-foreground pt-3">
      <Text className="font-heading text-sm text-foreground">{children}</Text>
      {aside ? <Text className={type.label}>{aside}</Text> : null}
    </View>
  );
}

/** Live local time in Turkey. Renders a placeholder until mounted to avoid SSR mismatch. */
export function LocalTime({ className }: { className?: string }) {
  const [now, setNow] = React.useState<Date | null>(null);
  React.useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 20_000);
    return () => clearInterval(id);
  }, []);
  const time = now
    ? new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: site.timeZone,
      }).format(now)
    : '--:--';
  return <Span className={cn('tabular', className)}>{time}</Span>;
}

const NAV = [
  { title: 'Work', href: '/projects' },
  { title: 'About', href: '/aboutme' },
  { title: 'Contact', href: '/contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { colorScheme, toggleColorScheme } = useTheme();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <Frame className="pb-10 pt-6 md:pb-16 md:pt-8">
      <View className="flex-row items-baseline justify-between gap-6">
        <View className="flex-row items-baseline gap-10">
          <Link href={'/' as Href} asChild>
            <Pressable accessibilityRole="link" accessibilityLabel="Home">
              <Text className="font-heading text-base tracking-[-0.01em] text-foreground">
                {site.name}
              </Text>
            </Pressable>
          </Link>
          <Text className={cn(type.label, 'hidden md:flex')}>
            {site.role}, {site.location}
          </Text>
        </View>

        <View className="flex-row items-baseline gap-5 md:gap-8">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href as Href} asChild>
              <Pressable accessibilityRole="link">
                {({ hovered }) => (
                  <View className="flex-row items-baseline gap-1.5">
                    {isActive(item.href) ? (
                      <View className="h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-signal" />
                    ) : null}
                    <Text
                      className={cn(
                        'font-body text-base transition-colors duration-150',
                        isActive(item.href) || hovered ? 'text-foreground' : 'text-muted'
                      )}>
                      {item.title}
                    </Text>
                  </View>
                )}
              </Pressable>
            </Link>
          ))}
          <Pressable
            onPress={toggleColorScheme}
            accessibilityRole="button"
            accessibilityLabel={colorScheme === 'dark' ? 'Use light theme' : 'Use dark theme'}>
            {({ hovered }) => (
              <View
                className={cn(
                  'h-3.5 w-3.5 rounded-full border border-foreground transition-colors',
                  colorScheme === 'dark' ? 'bg-transparent' : 'bg-foreground',
                  hovered && 'border-signal'
                )}
              />
            )}
          </Pressable>
        </View>
      </View>
    </Frame>
  );
}

export function SiteFooter() {
  const [copied, setCopied] = React.useState(false);
  const copy = async () => {
    try {
      const Clipboard = await import('expo-clipboard');
      await Clipboard.setStringAsync(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* address stays visible for manual copy */
    }
  };

  return (
    <Frame className="mt-32 pb-10 md:mt-48">
      <SectionLabel>Get in touch</SectionLabel>

      <Pressable
        onPress={() => Linking.openURL(`mailto:${site.email}`)}
        accessibilityRole="link"
        className="mt-6 self-start">
        {({ hovered }) => (
          <Text
            className={cn(
              'font-heading text-[1.6rem] leading-none tracking-[-0.03em] transition-colors duration-150 md:text-[4.5rem] lg:text-[5.75rem]',
              hovered ? 'text-signal' : 'text-foreground'
            )}>
            {site.email}
          </Text>
        )}
      </Pressable>

      <View className="mt-16 flex-row flex-wrap gap-y-8 md:mt-24">
        <View className="w-1/2 gap-1 md:w-1/4">
          <Text className={type.label}>Elsewhere</Text>
          {site.elsewhere.map((l) => (
            <Text key={l.label} className={type.body}>
              <InkLink href={l.url} external>
                {l.label}
              </InkLink>
            </Text>
          ))}
        </View>
        <View className="w-1/2 gap-1 md:w-1/4">
          <Text className={type.label}>Email</Text>
          <Pressable onPress={copy} accessibilityRole="button" className="self-start">
            <Text className={type.body}>
              <Span className="ink-link">{copied ? 'Copied' : 'Copy address'}</Span>
            </Text>
          </Pressable>
        </View>
        <View className="w-1/2 gap-1 md:w-1/4">
          <Text className={type.label}>Local time</Text>
          <Text className={type.body}>
            <LocalTime /> <Span className="text-muted">GMT+3</Span>
          </Text>
        </View>
        <View className="w-1/2 gap-1 md:w-1/4">
          <Text className={type.label}>Colophon</Text>
          <Text className={type.body}>Set in Satoshi.</Text>
          <Text className={type.body}>Built with Expo.</Text>
        </View>
      </View>

      <Text className={cn(type.label, 'mt-16')}>
        © {new Date().getFullYear()} {site.name}
      </Text>
    </Frame>
  );
}
