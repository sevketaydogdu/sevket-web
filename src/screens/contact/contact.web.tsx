import { AntDesign, Feather } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Pressable, View } from 'react-native';

import {
  Container,
  CopyEmail,
  Eyebrow,
  Reveal,
  Span,
  siteFacts,
  type,
  useSiteColors,
} from '@/components/site';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

const channels: {
  label: string;
  handle: string;
  url: string;
  icon: React.ComponentProps<typeof AntDesign>['name'];
}[] = [
  {
    label: 'LinkedIn',
    handle: 'in/sevketaydogdu',
    url: 'https://www.linkedin.com/in/sevketaydogdu/',
    icon: 'linkedin-square',
  },
  {
    label: 'X (Twitter)',
    handle: '@sevketaydogdu',
    url: 'https://www.x.com/sevketaydogdu/',
    icon: 'twitter',
  },
  {
    label: 'GitHub',
    handle: 'sevketaydogdu',
    url: 'https://github.com/sevketaydogdu',
    icon: 'github',
  },
];

function ChannelRow({ channel }: { channel: (typeof channels)[number] }) {
  const colors = useSiteColors();
  return (
    <Link href={channel.url as Href} asChild target="_blank" rel="noopener noreferrer">
      <Pressable accessibilityRole="link">
        {({ hovered }) => (
          <View
            className={cn(
              'flex-row items-center gap-5 border-b border-border py-6 transition-colors duration-200',
              hovered && 'bg-orange-500/[0.04]'
            )}>
            <AntDesign name={channel.icon} size={22} color={hovered ? colors.accent : colors.fg} />
            <View className="flex-1 gap-0.5">
              <Text
                className={cn('font-heading text-lg text-foreground', hovered && type.accent)}>
                {channel.label}
              </Text>
              <Text className={type.small}>{channel.handle}</Text>
            </View>
            <View
              className={cn(
                'h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-200',
                hovered && 'border-orange-500 bg-orange-500'
              )}>
              <Feather name="arrow-up-right" size={18} color={hovered ? '#ffffff' : colors.fg} />
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

const WebContactScreen = () => {
  return (
    <View className="flex-1">
      <Head>
        <title>Contact me | Sevket Aydogdu - React Native Developer</title>
        <meta
          name="description"
          content="Get in touch with Sevket Aydogdu about a React Native or Expo project."
        />
      </Head>

      <Container className="pb-24 pt-10 md:pb-32 md:pt-20">
        <View className="gap-16 lg:flex-row lg:gap-20">
          <Reveal className="flex-1 gap-8">
            <Eyebrow label="Contact" />
            <Text className={type.h1}>
              Let's build something{' '}
              <Span className="text-orange-600 dark:text-orange-400">people use.</Span>
            </Text>
            <Text className={type.lead}>
              Whether it's a new app, a rescue mission on an existing one, or a second pair of
              hands for your team — send a few lines about what you're building and I'll get
              back to you.
            </Text>

            <View className="mt-2 gap-3">
              <Text className={type.mono}>Email</Text>
              <CopyEmail />
              <Text className={type.small}>Click to copy · Based in {siteFacts.location}</Text>
            </View>
          </Reveal>

          <Reveal delay={120} className="flex-1 lg:pt-4">
            <Text className={cn(type.mono, 'mb-4')}>Elsewhere</Text>
            <View className="border-t border-border">
              {channels.map((channel) => (
                <ChannelRow key={channel.label} channel={channel} />
              ))}
            </View>
          </Reveal>
        </View>
      </Container>
    </View>
  );
};

export default WebContactScreen;
