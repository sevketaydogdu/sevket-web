import { Href, Link, useLocalSearchParams } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Pressable, View } from 'react-native';

import { Frame, InkLink, SectionLabel, Span, type } from '@/components/site';
import {
  IconField,
  kindOf,
  platformsOf,
  projectHref,
} from '@/components/site/projects';
import { Text } from '@/components/ui/text';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

export async function generateStaticParams(): Promise<Record<string, string>[]> {
  return projects.map((project) => ({
    name: clearSpacesAndSpecialCharacters(project.title),
  }));
}

/** Split the free-form description into paragraphs of trimmed lines. */
function toParagraphs(text?: string) {
  if (!text) return [];
  return text
    .split(/\n\s*\n/)
    .map((block) =>
      block
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)
        .join('\n')
    )
    .filter(Boolean);
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <View className="gap-1 border-t border-border py-4">
      <Text className={type.label}>{label}</Text>
      <Text className={type.body}>{children}</Text>
    </View>
  );
}

const ProjectDetailScreen = () => {
  const { name } = useLocalSearchParams();
  const index = projects.findIndex((p) => clearSpacesAndSpecialCharacters(p.title) === name);
  const project = projects[index];

  React.useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, [name]);

  if (!project) {
    return (
      <Frame className="gap-6 pt-6 md:pt-16">
        <Text className={type.title}>Not found</Text>
        <Text className={type.prose}>
          There's no project called “{String(name)}”. <InkLink href="/projects">See all work</InkLink>.
        </Text>
      </Frame>
    );
  }

  const links: { apple?: string; google?: string; web?: string; github?: string } =
    project.storeLinks ?? {};
  const linkList = [
    links.apple && { label: 'App Store', url: links.apple },
    links.google && { label: 'Google Play', url: links.google },
    links.web && { label: 'Website', url: links.web },
    links.github && { label: 'Source', url: links.github },
  ].filter(Boolean) as { label: string; url: string }[];
  const paragraphs = toParagraphs(project.description);
  const stack = project.technicalDetails.map((t) => t.trim()).filter(Boolean);
  const next = projects[(index + 1) % projects.length];

  return (
    <View className="flex-1">
      <Head>
        <title>{`${project.title} — Şevket Aydoğdu`}</title>
        <meta name="description" content={project.description ?? project.subtitle} />
      </Head>

      <Frame className="pt-6 md:pt-16">
        <Text className={type.label}>
          <InkLink href="/projects">Work</InkLink>
          <Span> / {String(index + 1).padStart(2, '0')}</Span>
        </Text>
        <Text className={cn(type.title, 'mt-6')}>{project.title}</Text>
        <Text className={cn(type.prose, 'mt-6 text-muted')}>{kindOf(project)}</Text>
      </Frame>

      <Frame className="mt-14 md:mt-20">
        <IconField project={project} iconSize={176} className="aspect-[16/9] md:aspect-[21/9]" />
      </Frame>

      <Frame className="mt-14 md:mt-20">
        <View className="gap-12 lg:flex-row lg:gap-10">
          <View className="lg:w-[30%]">
            <Meta label="Platforms">{platformsOf(project).join(', ')}</Meta>
            {stack.length ? <Meta label="Stack">{stack.join(', ')}</Meta> : null}
            {linkList.length ? (
              <Meta label="Links">
                {linkList.map((l, i) => (
                  <Span key={l.label}>
                    {i > 0 ? ', ' : ''}
                    <InkLink href={l.url} external>
                      {l.label}
                    </InkLink>
                  </Span>
                ))}
              </Meta>
            ) : null}
          </View>

          <View className="flex-1 gap-6 lg:pl-[8%]">
            {paragraphs.length ? (
              paragraphs.map((p) => (
                <Text key={p.slice(0, 32)} className={cn(type.prose, 'max-w-2xl')}>
                  {p}
                </Text>
              ))
            ) : (
              <Text className={cn(type.prose, 'max-w-2xl text-muted')}>
                Client work under NDA — happy to talk through it on a call.
              </Text>
            )}
          </View>
        </View>
      </Frame>

      {next && next !== project ? (
        <Frame className="mt-28 md:mt-40">
          <SectionLabel>Next</SectionLabel>
          <Link href={projectHref(next)} asChild>
            <Pressable accessibilityRole="link" className="mt-4 self-start">
              {({ hovered }) => (
                <Text
                  className={cn(
                    type.title,
                    'transition-colors duration-150',
                    hovered && 'text-signal'
                  )}>
                  {next.title}
                </Text>
              )}
            </Pressable>
          </Link>
        </Frame>
      ) : null}
    </View>
  );
};

export default ProjectDetailScreen;
