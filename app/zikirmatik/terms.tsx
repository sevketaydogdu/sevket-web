import React from 'react';

import LegalPage from 'src/screens/zikirmatik-legal/LegalPage';
import { termsSections } from 'src/screens/zikirmatik-legal/termsContent';

export default function ZikirmatikTermsPage() {
  return (
    <LegalPage
      pageTitle="Terms of Use | Zikirmatik (Easy Dhikr)"
      description="Terms of Use for the Zikirmatik / Easy Dhikr mobile app, including auto-renewable subscription terms."
      sections={termsSections}
    />
  );
}
