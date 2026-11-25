export { default } from 'src/screens/home/home';

import { pageMetadata } from '@/constants/seo';

export function generateMetadata() {
  return pageMetadata({
    path: '/',
  });
}
