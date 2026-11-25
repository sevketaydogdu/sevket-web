export { default } from '@/screens/contact/contact';

import { pageMetadata } from '@/constants/seo';

export function generateMetadata() {
  return pageMetadata({
    path: '/contact',
    title: 'Contact — Şevket Aydoğdu',
    description: 'Get in touch with Şevket Aydoğdu about a React Native, Expo, React or Next.js project.',
  });
}
