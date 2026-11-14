/** Site-wide SEO constants. Keep SITE_URL in sync with scripts/postbuild.mjs. */
export const SITE_URL = 'https://sevketaydogdu.com';
export const SITE_NAME = 'Şevket Aydoğdu';
export const SITE_DESCRIPTION =
  'Şevket Aydoğdu designs and builds mobile apps with React Native and Expo, and web apps with React, Next.js and Vite.';
export const OG_IMAGE = `${SITE_URL}/og.png`;

export const SOCIAL_PROFILES = [
  'https://github.com/sevketaydogdu',
  'https://www.linkedin.com/in/sevketaydogdu/',
  'https://x.com/sevketaydogdu',
];

/** Absolute URL for a route path, without a trailing slash (except the root). */
export function absoluteUrl(path: string) {
  const clean = path === '/' ? '' : path.replace(/\/+$/, '');
  return `${SITE_URL}${clean}`;
}
