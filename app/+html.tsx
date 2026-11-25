import { useServerDocumentContext } from 'expo-router/html';

import { lineOf, nameOf } from '@/components/site/projects';
import { projects } from '@/constants/projects';
import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
  absoluteUrl,
} from '@/constants/site';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({
  children,
  pathname,
}: {
  children: React.ReactNode;
  pathname?: string;
}) {
  // SDK 58+: metadata, styles and the JS bundles come from here; without them the page never hydrates.
  const { headNodes, bodyNodes, htmlAttributes, bodyAttributes } = useServerDocumentContext();
  const projectPage = pathname ? projectPageFor(pathname) : null;

  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* 
          This viewport disables scaling which makes the mobile website act more like a native app.
          However this does reduce built-in accessibility. If you want to enable scaling, use this instead:
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#f5efe4" />
        {/* Google Search Console ownership (URL-prefix property https://sevketaydogdu.com/). */}
        <meta name="google-site-verification" content="Tz0n3F4sORm2Dcg0Z_xriH6kj_I9cTG9W7kO-YqsPw0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@96,88,800&family=Geist:wght@300..700&display=swap"
        />
        {/* 
          Using native document scroll (single scrollbar). ScrollViewStyleReset removed to avoid double scrollbar.
        */}
        {/* <ScrollViewStyleReset /> */}

        {/* Using raw CSS styles as an escape-hatch to ensure the background color never flickers in dark-mode. */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {pathname === '/' ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: PERSON_JSON_LD }}
          />
        ) : null}
        {projectPage ? <ProjectMeta {...projectPage} /> : null}
        {headNodes}
      </head>
      <body {...bodyAttributes}>
        {children}
        {bodyNodes}
      </body>
    </html>
  );
}

/**
 * Project detail pages are prerendered via generateStaticParams, and Expo CLI (SDK 58) passes empty
 * params to generateMetadata for those, so their tags are built here from the pathname instead.
 * Mirrors pageMetadata() in src/constants/seo.ts.
 */
function projectPageFor(pathname: string) {
  const match = /^\/projects\/([^/]+)\/?$/.exec(pathname);
  if (!match) return null;
  const project = projects.find((p) => clearSpacesAndSpecialCharacters(p.title) === match[1]);
  if (!project) return null;
  return {
    title: `${nameOf(project)} — ${SITE_NAME}`,
    description: lineOf(project),
    url: absoluteUrl(`/projects/${match[1]}`),
  };
}

function ProjectMeta({ title, description, url }: { title: string; description: string; url: string }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sevketaydogdu" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  );
}

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

const responsiveBackground = `
body {
  margin: 0;
  overflow-x: clip;
  background-color: #f5efe4;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #16100f;
  }
}
`;

// const responsiveBackground = `
// body {
//   background-color: #fff;
// }
// @media (prefers-color-scheme: dark) {
//   body {
//     background-color: #000;
//   }
// }`;
