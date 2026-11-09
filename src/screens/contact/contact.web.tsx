import Head from 'expo-router/head';
import React from 'react';
import { View } from 'react-native';

import { Frame, InkLink, LocalTime, Span, site, type } from '@/components/site';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

const WebContactScreen = () => {
  return (
    <View className="flex-1">
      <Head>
        <title>Contact — Şevket Aydoğdu</title>
        <meta
          name="description"
          content="Get in touch with Şevket Aydoğdu about a React Native or Expo project."
        />
      </Head>

      <Frame className="pt-6 md:pt-16">
        <Text className={type.title}>Contact</Text>

        <View className="mt-14 gap-12 md:mt-20 lg:flex-row lg:gap-10">
          <View className="lg:w-[30%]">
            <Text className={type.label}>
              It's <LocalTime /> in {site.location} right now.
            </Text>
          </View>
          <View className="flex-1 gap-6 lg:pl-[8%]">
            <Text className={cn(type.statement, 'max-w-[22ch]')}>
              New app, an existing one that needs help, or an extra pair of hands on your team —
              tell me about it.
            </Text>
            <Text className={cn(type.prose, 'max-w-xl text-muted')}>
              A few lines are enough: what you're building, where it needs to run, and roughly when.
              I'll reply with questions or next steps.
            </Text>

            <View className="mt-8 flex-row flex-wrap gap-y-8">
              <View className="w-full gap-1 md:w-1/2">
                <Text className={type.label}>Email</Text>
                <Text className={type.body}>
                  <InkLink href={`mailto:${site.email}`} external>
                    {site.email}
                  </InkLink>
                </Text>
              </View>
              <View className="w-full gap-1 md:w-1/2">
                <Text className={type.label}>Elsewhere</Text>
                <Text className={type.body}>
                  {site.elsewhere.map((l, i) => (
                    <Span key={l.label}>
                      {i > 0 ? ', ' : ''}
                      <InkLink href={l.url} external>
                        {l.label}
                      </InkLink>
                    </Span>
                  ))}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Frame>
    </View>
  );
};

export default WebContactScreen;
