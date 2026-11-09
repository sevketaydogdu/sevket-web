import { Feather } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import React from 'react';
import { Pressable, Text as RNText, View, type TextProps, type ViewProps } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Text } from '@/components/ui/text';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

/** Icon colors (vector icons don't read className, so they need real values). */
export function useSiteColors() {
  const { colorScheme } = useTheme();
  const dark = colorScheme !== 'light';
  return {
    fg: dark ? '#fafafa' : '#171717',
    muted: dark ? '#a3a3a3' : '#525252',
    accent: dark ? '#fb923c' : '#ea580c',
  };
}

/**
 * Shared building blocks for the site redesign.
 *
 * Typography is expressed as plain Tailwind utilities (not @layer component
 * classes) so tailwind-merge can resolve them against the `text-base` default
 * that `@/components/ui/text` applies. Component-layer classes lose that fight.
 */
export const type = {
  display:
    'font-display text-[2.75rem] leading-[1.02] tracking-tight text-foreground md:text-6xl lg:text-7xl',
  h1: 'font-display text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl',
  h2: 'font-heading text-3xl leading-tight tracking-tight text-foreground md:text-4xl',
  h3: 'font-heading text-xl leading-snug text-foreground',
  lead: 'font-body text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed',
  body: 'font-body text-base leading-relaxed text-muted',
  small: 'font-body text-sm leading-relaxed text-muted',
  mono: 'font-mono text-xs uppercase tracking-[0.18em] text-muted',
  accent: 'text-orange-600 dark:text-orange-400',
} as const;

/** Inline span for nested text. Uses RN Text so it inherits size/family from its parent. */
export function Span({ className, ...props }: TextProps & { className?: string }) {
  return <RNText className={className} {...props} />;
}

export function Container({ className, ...props }: ViewProps & { className?: string }) {
  return <View className={cn('mx-auto w-full max-w-6xl px-6 md:px-10', className)} {...props} />;
}

export function Reveal({
  delay = 0,
  className,
  ...props
}: ViewProps & { delay?: number; className?: string }) {
  return (
    <Animated.View
      entering={FadeInDown.duration(600).delay(delay)}
      className={className}
      {...props}
    />
  );
}

export function Eyebrow({ index, label }: { index?: string; label: string }) {
  return (
    <View className="flex-row items-center gap-3">
      {index ? <Text className={cn(type.mono, type.accent)}>{index}</Text> : null}
      <View className="h-px w-8 bg-orange-500/60" />
      <Text className={type.mono}>{label}</Text>
    </View>
  );
}

export function SectionHeader({
  index,
  label,
  title,
  description,
  action,
}: {
  index?: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <View className="gap-6 md:flex-row md:items-end md:justify-between">
      <View className="max-w-2xl gap-5">
        <Eyebrow index={index} label={label} />
        <Text className={type.h2}>{title}</Text>
        {description ? <Text className={type.body}>{description}</Text> : null}
      </View>
      {action ? <View className="md:pb-1">{action}</View> : null}
    </View>
  );
}

export function Divider({ className }: { className?: string }) {
  return <View className={cn('h-px w-full bg-border', className)} />;
}

type ButtonVariant = 'primary' | 'ghost' | 'text';

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  icon?: React.ComponentProps<typeof Feather>['name'];
}) {
  const iconName = icon ?? (external ? 'arrow-up-right' : 'arrow-right');
  const colors = useSiteColors();
  return (
    <Link
      href={href as Href}
      asChild
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      <Pressable accessibilityRole="link">
        {({ hovered, pressed }) => {
          if (variant === 'text') {
            return (
              <View className="flex-row items-center gap-2 self-start">
                <Text
                  className={cn(
                    'font-heading text-base',
                    type.accent,
                    hovered && 'underline underline-offset-4'
                  )}>
                  {children}
                </Text>
                <Feather
                  name={iconName}
                  size={16}
                  color={colors.accent}
                  style={{ transform: [{ translateX: hovered ? 3 : 0 }] }}
                />
              </View>
            );
          }
          const primary = variant === 'primary';
          return (
            <View
              className={cn(
                'flex-row items-center gap-2 self-start rounded-full px-6 py-3.5 transition-all duration-200',
                primary
                  ? 'bg-orange-500 shadow-lg shadow-orange-500/20'
                  : 'border border-border bg-transparent',
                primary && hovered && 'bg-orange-400',
                !primary && hovered && 'border-orange-500/60',
                pressed && 'opacity-80'
              )}>
              <Text
                className={cn(
                  'font-heading text-base',
                  primary ? 'text-white' : 'text-foreground'
                )}>
                {children}
              </Text>
              <Feather
                name={iconName}
                size={16}
                color={primary ? '#ffffff' : colors.fg}
                style={{ transform: [{ translateX: hovered ? 2 : 0 }] }}
              />
            </View>
          );
        }}
      </Pressable>
    </Link>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <View className="rounded-full border border-border px-3 py-1.5">
      <Text className="font-body text-xs text-muted">{children}</Text>
    </View>
  );
}

/** Site-wide facts, kept in one place so pages never disagree. */
export const siteFacts = {
  name: 'Sevket Aydogdu',
  role: 'Senior React Native Developer',
  location: 'Turkey',
  email: 'sevketaydogdu34@gmail.com',
  stats: [
    { value: '6+', label: 'Years building mobile apps' },
    { value: '10+', label: 'Apps shipped to production' },
    { value: '3', label: 'Platforms, one codebase' },
  ],
};

/** Pill that shows the email and copies it on press. */
export function CopyEmail({ email = siteFacts.email }: { email?: string }) {
  const colors = useSiteColors();
  const [copied, setCopied] = React.useState(false);
  const onPress = async () => {
    try {
      const Clipboard = await import('expo-clipboard');
      await Clipboard.setStringAsync(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard unavailable: leave the address visible for manual copy.
    }
  };
  return (
    <Pressable onPress={onPress} accessibilityRole="button" accessibilityLabel={`Copy ${email}`}>
      {({ hovered }) => (
        <View
          className={cn(
            'flex-row items-center gap-3 self-start rounded-full border border-border px-5 py-3.5 transition-colors duration-200',
            hovered && 'border-orange-500/60'
          )}>
          <Text className="font-body text-base text-foreground" selectable>
            {copied ? 'Copied to clipboard' : email}
          </Text>
          <Feather
            name={copied ? 'check' : 'copy'}
            size={16}
            color={copied || hovered ? colors.accent : colors.muted}
          />
        </View>
      )}
    </Pressable>
  );
}
