import type { Metadata } from 'expo-router/server';

import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from './site';

export const DEFAULT_TITLE = `${SITE_NAME} — React Native & web developer`;

type PageMetadataOptions = {
  /** Route path, used for the canonical URL and og:url. */
  path: string;
  title?: string;
  description?: string;
  /** Override the default share image (absolute URL). */
  image?: string;
  /** Keep the page out of search results (404s, invite links, utility pages). */
  noindex?: boolean;
};

/**
 * Metadata written into each page's static HTML at build time (SDK 58+ `generateMetadata`).
 * `<Seo />` / `<Head>` keep these tags up to date after client-side navigation.
 */
export function pageMetadata({
  path,
  title = DEFAULT_TITLE,
  description = SITE_DESCRIPTION,
  image = OG_IMAGE,
  noindex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      ...(noindex ? {} : { url }),
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sevketaydogdu',
      title,
      description,
      images: image,
    },
    ...(noindex ? { robots: 'noindex, follow' } : { alternates: { canonical: url } }),
  };
}
