import React from 'react';
import { View } from 'react-native';

import { Column, Enter, InkLink, Row, Section, site, type, PageTitle } from '@/components/site';
import { Seo } from '@/components/site/Seo';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

const WebContactScreen = () => {
  return (
    <View className="flex-1">
      <Seo
        title="Contact — Şevket Aydoğdu"
        description="Get in touch with Şevket Aydoğdu about a React Native, Expo, React or Next.js project."
      />

      <Column className="pt-10 sm:pt-16 md:pt-24">
        <Enter>
          <PageTitle>Contact</PageTitle>
          <Text className={cn(type.muted, 'mt-5 text-[17px]')}>
            New apps, existing ones, or an extra pair of hands.
          </Text>
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
