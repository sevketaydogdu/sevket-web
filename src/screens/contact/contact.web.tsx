import Head from 'expo-router/head';
import React from 'react';
import { View } from 'react-native';

import { Column, Enter, InkLink, Row, Section, site, type } from '@/components/site';
import { Text } from '@/components/ui/text';

const WebContactScreen = () => {
  return (
    <View className="flex-1">
      <Head>
        <title>Contact — Şevket Aydoğdu</title>
        <meta
          name="description"
          content="Get in touch with Şevket Aydoğdu about a React Native, Expo, React or Next.js project."
        />
      </Head>

      <Column className="pt-16 md:pt-28">
        <Enter>
          <Text role="heading" aria-level="1" className={type.strong}>
            Contact
          </Text>
          <Text className={type.muted}>New apps, existing ones, or an extra pair of hands.</Text>
        </Enter>

        <Enter step={1} className="mt-8">
          <Text className={type.body}>
            Tell me what you're building, where it needs to run, and roughly when. A few lines are
            enough — I'll reply with questions or next steps.
          </Text>
        </Enter>

        <Enter step={2}>
          <Section title="Reach me" className="mt-14">
            <Row label="Email">
              <InkLink href={`mailto:${site.email}`} external>
                {site.email}
              </InkLink>
            </Row>
            {site.elsewhere.map((l) => (
              <Row key={l.label} label={l.label}>
                <InkLink href={l.url} external>
                  {l.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                </InkLink>
              </Row>
            ))}
          </Section>
        </Enter>
      </Column>
    </View>
  );
};

export default WebContactScreen;
