import Head from 'expo-router/head';
import React from 'react';

type SeoProps = {
  title: string;
  description: string;
  /** Override the default share image (absolute URL). */
  image?: string;
  /** Keep the page out of search results (404s, invite links, utility pages). */
  noindex?: boolean;
};

/**
 * Per-page title, description and social preview tags. Canonical URL, og:url and
 * the site-wide defaults are set once in app/_layout.tsx from the current path.
 */
export function Seo({ title, description, image, noindex }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta property="og:image" content={image} /> : null}
      {image ? <meta name="twitter:image" content={image} /> : null}
      {noindex ? <meta name="robots" content="noindex, follow" /> : null}
    </Head>
  );
}
