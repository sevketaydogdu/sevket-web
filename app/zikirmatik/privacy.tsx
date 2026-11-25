import React from 'react';

import LegalPage from 'src/screens/zikirmatik-legal/LegalPage';
import { privacySections } from 'src/screens/zikirmatik-legal/privacyContent';

import { pageMetadata } from '@/constants/seo';

export function generateMetadata() {
  return pageMetadata({
    path: '/zikirmatik/privacy',
    title: 'Privacy Policy | Zikirmatik (Easy Dhikr)',
    description: 'Privacy Policy for the Zikirmatik / Easy Dhikr mobile app: what data is collected, how it is used, and your choices.',
  });
}

export default function ZikirmatikPrivacyPage() {
  return (
    <LegalPage
      pageTitle="Privacy Policy | Zikirmatik (Easy Dhikr)"
      description="Privacy Policy for the Zikirmatik / Easy Dhikr mobile app: what data is collected, how it is used, and your choices."
      sections={privacySections}
    />
  );
}
