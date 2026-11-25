export { default } from 'src/screens/download-zikirmatik/downloadZikirmatik';

import { pageMetadata } from '@/constants/seo';

export function generateMetadata() {
  return pageMetadata({
    path: '/download-zikirmatik',
  });
}
