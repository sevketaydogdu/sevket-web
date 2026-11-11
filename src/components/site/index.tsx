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

/** Label / value row used for metadata and contact details. */
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
    <View className={cn('flex-row gap-6 py-1.5', className)}>
      <Text className={cn(type.muted, 'w-24 shrink-0 md:w-32')}>{label}</Text>
      <Text className={cn(type.body, 'flex-1')}>{children}</Text>
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

function NavLink({ title, href, active }: { title: string; href: string; active: boolean }) {
  return (
    <Link href={href as Href} asChild>
      <Pressable
        accessibilityRole="link"
        aria-current={active ? 'page' : undefined}
        className="py-2">
        {({ hovered }) => (
          <Text
            className={cn(
              'font-body text-[15px] tracking-[-0.006em] transition-colors duration-150',
              active || hovered ? 'text-foreground' : 'text-muted'
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
    <Column className="pt-6 md:pt-10">
      <View className="flex-row items-center justify-between">
        {pathname === '/' ? (
          <View />
        ) : (
          <Link href={'/' as Href} asChild>
            <Pressable accessibilityRole="link" accessibilityLabel="Home" className="py-2">
              {({ hovered }) => (
                <Text
                  className={cn(
                    type.strong,
                    'transition-opacity duration-150',
                    hovered && 'opacity-60'
                  )}>
                  {site.name}
                </Text>
              )}
            </Pressable>
          </Link>
        )}
        <View className="flex-row items-center gap-5">
          {NAV.map((item) => (
            <NavLink key={item.href} {...item} active={isActive(item.href)} />
          ))}
          <Pressable
            onPress={toggleColorScheme}
            accessibilityRole="button"
            accessibilityLabel={colorScheme === 'dark' ? 'Use light theme' : 'Use dark theme'}
            className="-mr-2 h-9 w-9 items-center justify-center">
            {({ hovered }) => (
              <View
                className={cn(
                  'h-[13px] w-[13px] flex-row overflow-hidden rounded-full border transition-colors duration-150',
                  hovered ? 'border-foreground' : 'border-muted'
                )}>
                <View
                  className={cn(
                    'h-full w-1/2 transition-colors duration-150',
                    hovered ? 'bg-foreground' : 'bg-muted'
                  )}
                />
              </View>
            )}
          </Pressable>
        </View>
      </View>
    </Column>
  );
}

export function SiteFooter() {
  return (
    <Column className="mt-28 pb-16 md:mt-36">
      <View className="border-t border-border pt-6">
        <Text className={type.muted}>
          Reach me at{' '}
          <InkLink href={`mailto:${site.email}`} external className="text-foreground">
            {site.email}
          </InkLink>
          , or find me on{' '}
          {site.elsewhere.map((l, i) => (
            <Span key={l.label}>
              {i > 0 ? (i === site.elsewhere.length - 1 ? ' and ' : ', ') : ''}
              <InkLink href={l.url} external className="text-foreground">
                {l.label}
              </InkLink>
            </Span>
          ))}
          .
        </Text>
        <Text className={cn(type.small, 'mt-6')}>
          © {new Date().getFullYear()} {site.name}
        </Text>
      </View>
    </Column>
  );
}
