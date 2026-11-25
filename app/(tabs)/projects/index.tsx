export { default } from 'src/screens/projects/projectsScreen';

import { pageMetadata } from '@/constants/seo';

export function generateMetadata() {
  return pageMetadata({
    path: '/projects',
    title: 'Work — Şevket Aydoğdu',
    description: 'Selected mobile and web projects by Şevket Aydoğdu, built with React Native, Expo, React and Next.js.',
  });
}
