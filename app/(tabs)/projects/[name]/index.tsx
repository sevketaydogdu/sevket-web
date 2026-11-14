import { Link, router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import {
  Column,
  Enter,
  InkLink,
  Row,
  Section,
  Span,
  Wide,
  type,
  PageTitle,
} from '@/components/site';
import {
  ProjectCard,
  Screen,
  lineOf,
  nameOf,
  platformLabel,
  projectHref,
  screensOf,
  useCompact,
} from '@/components/site/projects';
import { Seo } from '@/components/site/Seo';
import { Text } from '@/components/ui/text';
import { goBackOr } from '@/hooks/useScrollRestoration';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

/** Split the free-form description into paragraphs; drop emoji-led checklist lines. */
function toParagraphs(text?: string) {
  if (!text) return [];
  return text
    .split(/\n\s*\n/)
    .map((block) =>
      block
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l && !/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(l))
        .join(' ')
    )
    .filter(Boolean);
}

function Gallery({ project }: { project: (typeof projects)[number] }) {
  const set = screensOf(project)!;
  const compact = useCompact();
  const w = compact ? 180 : 248;
  return (
    <View className="overflow-hidden rounded-[20px] bg-surface md:rounded-[28px]">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: compact ? 16 : 28,
          paddingHorizontal: compact ? 24 : 56,
          paddingTop: compact ? 32 : 56,
          paddingBottom: set.partial ? 0 : compact ? 32 : 56,
        }}
        style={{ scrollSnapType: 'x mandatory' } as any}>
        {set.items.map((s) => (
          <View key={s.caption} style={{ scrollSnapAlign: 'center' } as any}>
            <Screen source={s.source} width={w} aspect={set.aspect} partial={set.partial} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const ProjectDetailScreen = () => {
  const { name } = useLocalSearchParams();
  const index = projects.findIndex((p) => clearSpacesAndSpecialCharacters(p.title) === name);
  const project = projects[index];

  if (!project) {
    return (
      <Column className="pt-10 sm:pt-16 md:pt-24">
        <Text className={type.strong}>Not found</Text>
        <Text className={type.muted}>
          There's no project called “{String(name)}”.{' '}
          <InkLink href="/projects">See all work</InkLink>.
        </Text>
      </Column>
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
  const stack = Array.from(new Set(project.technicalDetails.map((t) => t.trim()).filter(Boolean)));
  const next = projects[(index + 1) % projects.length];

  return (
    <View className="flex-1">
      <Seo title={`${nameOf(project)} — Şevket Aydoğdu`} description={lineOf(project)} />

      <Column className="pt-10 sm:pt-16 md:pt-24">
        <Enter>
          {/* A real <a href="/projects"> for crawlers and new-tab clicks; a plain click goes
              back in history so the previous page keeps its scroll position. */}
          <Pressable
            accessibilityRole="link"
            {...({ href: '/projects' } as object)}
            onPress={(e: any) => {
              if (e?.metaKey || e?.ctrlKey || e?.shiftKey || e?.altKey || e?.button) return;
              e?.preventDefault?.();
              goBackOr(() => router.push('/projects'));
            }}
            className="mb-8 self-start">
            {({ hovered }) => (
              <Text
                className={cn(
                  type.muted,
                  'transition-colors duration-150',
                  hovered && 'text-foreground'
                )}>
                ← Work
              </Text>
            )}
          </Pressable>
          <PageTitle>{nameOf(project)}</PageTitle>
          <Text className={cn(type.muted, 'mt-5 text-[17px]')}>{lineOf(project)}</Text>
        </Enter>

        <Enter step={1} className="mt-8">
          <Row label="Platforms">{platformLabel(project)}</Row>
          {stack.length ? <Row label="Stack">{stack.slice(0, 8).join(', ')}</Row> : null}
          {linkList.length ? (
            <Row label="Links">
              {linkList.map((l, i) => (
                <Span key={l.label}>
                  {i > 0 ? ', ' : ''}
                  <InkLink href={l.url} external>
                    {l.label}
                  </InkLink>
                </Span>
              ))}
            </Row>
          ) : null}
        </Enter>
      </Column>

      <Wide className="mt-14 md:mt-20">
        <Enter step={2}>
          {screensOf(project) ? <Gallery project={project} /> : <ProjectCard project={project} />}
        </Enter>
      </Wide>

      <Column className="mt-14 md:mt-20">
        <Enter step={3} className="gap-4">
          {paragraphs.length ? (
            paragraphs.map((p) => (
              <Text key={p.slice(0, 32)} className={type.body}>
                {p}
              </Text>
            ))
          ) : (
            <Text className={type.muted}>
              Client work under NDA — happy to talk it through on a call.
            </Text>
          )}
        </Enter>

        {next && next !== project ? (
          <Section title="Next" className="mt-20">
            <Link href={projectHref(next)} asChild>
              <Pressable accessibilityRole="link" className="self-start">
                <Text className={type.strong}>
                  <Span className="ink-link">{nameOf(next)}</Span>
                </Text>
              </Pressable>
            </Link>
          </Section>
        ) : null}
      </Column>
    </View>
  );
};

export default ProjectDetailScreen;
