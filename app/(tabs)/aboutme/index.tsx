export { default } from 'src/screens/aboutme/aboutme';

import { pageMetadata } from '@/constants/seo';

export function generateMetadata() {
  return pageMetadata({
    path: '/aboutme',
    title: 'About — Şevket Aydoğdu',
    description: 'Şevket Aydoğdu is a React Native and web developer — React, Next.js, Vite — with a background in UX/UI design.',
  });
}
