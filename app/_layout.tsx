import { Slot, usePathname } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Appearance, ColorSchemeName, Platform, useColorScheme } from 'react-native';

import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  absoluteUrl,
} from '@/constants/site';
import { ThemeProvider as NavThemeProvider } from '@/contexts/ThemeContext';
import { useScrollRestoration } from '@/hooks/useScrollRestoration';
import '../global.css';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

// Routes that must not appear in search results or carry a canonical URL.
const NOINDEX_PREFIXES = ['/zikirmatik/c/', '/modal', '/_sitemap', '/+not-found'];

const PERSON_JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: SITE_URL,
  image: OG_IMAGE,
  jobTitle: 'React Native & Web Developer',
  description: SITE_DESCRIPTION,
  sameAs: SOCIAL_PROFILES,
  knowsAbout: ['React Native', 'Expo', 'React', 'Next.js', 'TypeScript', 'UI/UX design'],
});

/**
 * Bridge react-native Appearance to the `data-theme` attribute on <html>.
 * Browser-only: static rendering runs in Node, where touching window would throw
 * and leave every prerendered page empty.
 */
function installWebAppearanceBridge() {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return;
  if ((Appearance as any).__webBridgeInstalled) return;
  (Appearance as any).__webBridgeInstalled = true;

  Appearance.setColorScheme = (scheme) => {
    if (scheme) {
      document.documentElement.setAttribute('data-theme', scheme);
    }
  };

  Appearance.getColorScheme = (): ColorSchemeName => {
    const systemValue = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const userValue = document.documentElement.getAttribute('data-theme');
    return (userValue && userValue !== 'null' ? userValue : systemValue) as ColorSchemeName;
  };

  Appearance.addChangeListener = (listener) => {
    const systemValueListener = (e: { matches: boolean }): void => {
      const newSystemValue: ColorSchemeName = e.matches ? 'dark' : 'light';
      const userValue = document.documentElement.getAttribute('data-theme');
      listener({
        colorScheme:
          userValue && userValue !== 'null' ? (userValue as ColorSchemeName) : newSystemValue,
      });
    };
    const systemValue = window.matchMedia('(prefers-color-scheme: dark)');
    systemValue.addEventListener('change', systemValueListener);

    // Listen for changes of user set value
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === 'data-theme') {
          listener({ colorScheme: Appearance.getColorScheme() });
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });

    return {
      remove() {
        systemValue.removeEventListener('change', systemValueListener);
        observer.disconnect();
      },
    };
  };
}

function SiteHead({ pathname }: { pathname: string }) {
  const noindex = NOINDEX_PREFIXES.some((p) => pathname.startsWith(p)) || pathname.includes('[');
  const url = absoluteUrl(pathname);
  return (
    <Head>
      {/* Defaults; pages override title/description/og:* through <Seo />. */}
      <title>{`${SITE_NAME} — React Native & web developer`}</title>
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sevketaydogdu" />
      <meta name="twitter:image" content={OG_IMAGE} />
      {noindex ? null : <link rel="canonical" href={url} />}
      {noindex ? null : <meta property="og:url" content={url} />}
      {noindex ? <meta name="robots" content="noindex, follow" /> : null}
      {pathname === '/' ? <script type="application/ld+json">{PERSON_JSON_LD}</script> : null}
    </Head>
  );
}

export default function RootLayout() {
  installWebAppearanceBridge();

  const colorScheme = useColorScheme();
  const pathname = usePathname();

  // Web: new pages start at the top; back/forward restores the previous scroll position.
  useScrollRestoration(pathname);

  return (
    <NavThemeProvider>
      <SiteHead pathname={pathname} />
      <Slot screenOptions={{ colorScheme }} />
    </NavThemeProvider>
  );
}
