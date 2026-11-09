import { Feather } from '@expo/vector-icons';
import { Href, Link, useLocalSearchParams } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { ButtonLink, Container, Reveal, Tag, type, useSiteColors } from '@/components/site';
import { projectHref } from '@/components/site/projects';
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

function BackLink() {
  const colors = useSiteColors();
  return (
    <Link href={'/projects' as Href} asChild>
      <Pressable accessibilityRole="link" className="self-start">
        {({ hovered }) => (
          <View className="flex-row items-center gap-2">
            <Feather
              name="arrow-left"
              size={16}
              color={hovered ? colors.accent : colors.muted}
              style={{ transform: [{ translateX: hovered ? -3 : 0 }] }}
            />
            <Text className={cn(type.mono, hovered && type.accent)}>All projects</Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

function StoreBadge({ href, source, label }: { href: string; source: any; label: string }) {
  return (
    <Link href={href as Href} asChild target="_blank" rel="noopener noreferrer">
      <Pressable accessibilityRole="link" accessibilityLabel={label}>
        {({ hovered }) => (
          <Image
            source={source}
            style={{ width: 135, height: 40, opacity: hovered ? 0.85 : 1 }}
            resizeMode="contain"
          />
        )}
      </Pressable>
    </Link>
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
      <Container className="items-start gap-6 py-24">
        <Text className={type.h1}>Project not found</Text>
        <Text className={type.lead}>There's no project called “{String(name)}”.</Text>
        <ButtonLink href="/projects">Back to projects</ButtonLink>
      </Container>
    );
  }

  const links: { apple?: string; google?: string; web?: string; github?: string } =
    project.storeLinks ?? {};
  const paragraphs = toParagraphs(project.description);
  const stack = project.technicalDetails.map((t) => t.trim()).filter(Boolean);
  const next = projects[(index + 1) % projects.length];
  const hasLinks = links.apple || links.google || links.web || links.github;

  return (
    <View className="flex-1">
      <Head>
        <title>{project.title} | Sevket Aydogdu - React Native Developer</title>
        <meta name="description" content={project.description ?? project.subtitle} />
      </Head>

      <Container className="pb-24 pt-10 md:pb-32 md:pt-16">
        <BackLink />

        {/* ——— Header ——— */}
        <Reveal className="mt-10 gap-8 md:flex-row md:items-center md:gap-10">
          <Image
            source={project.imagePath}
            resizeMode="cover"
            style={{ width: 112, height: 112, borderRadius: 28 }}
          />
          <View className="flex-1 gap-3">
            <Text className={cn(type.mono, type.accent)}>
              Project {String(index + 1).padStart(2, '0')}
            </Text>
            <Text className={type.h1}>{project.title}</Text>
            <Text className={type.lead}>{project.subtitle}</Text>
          </View>
        </Reveal>

        {hasLinks ? (
          <Reveal delay={100} className="mt-10 flex-row flex-wrap items-center gap-3">
            {links.apple ? (
              <StoreBadge
                href={links.apple}
                label="Download on the App Store"
                source={require('../../../../assets/images/appleBadge.png')}
              />
            ) : null}
            {links.google ? (
              <StoreBadge
                href={links.google}
                label="Get it on Google Play"
                source={require('../../../../assets/images/googlebadge.png')}
              />
            ) : null}
            {links.web ? (
              <ButtonLink href={links.web} variant="ghost" external icon="globe">
                Live site
              </ButtonLink>
            ) : null}
            {links.github ? (
              <ButtonLink href={links.github} variant="ghost" external icon="github">
                Source code
              </ButtonLink>
            ) : null}
          </Reveal>
        ) : null}

        {/* ——— Body ——— */}
        <View className="mt-16 gap-12 border-t border-border pt-12 lg:flex-row lg:gap-16">
          <Reveal delay={160} className="flex-1 gap-6">
            <Text className={type.mono}>Overview</Text>
            {paragraphs.length ? (
              paragraphs.map((p) => (
                <Text key={p.slice(0, 32)} className={cn(type.body, 'text-lg')}>
                  {p}
                </Text>
              ))
            ) : (
              <Text className={cn(type.body, 'text-lg')}>
                {project.subtitle}. A detailed case study is on its way.
              </Text>
            )}
          </Reveal>

          {stack.length ? (
            <Reveal delay={220} className="gap-4 lg:w-80">
              <Text className={type.mono}>Stack</Text>
              <View className="flex-row flex-wrap gap-2">
                {stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </View>
            </Reveal>
          ) : null}
        </View>

        {/* ——— Next ——— */}
        {next && next !== project ? (
          <Link href={projectHref(next)} asChild>
            <Pressable accessibilityRole="link" className="mt-20">
              {({ hovered }) => (
                <View className="flex-row items-center gap-5 border-t border-border pt-10">
                  <View className="flex-1 gap-2">
                    <Text className={type.mono}>Next project</Text>
                    <Text
                      className={cn(
                        'font-heading text-2xl text-foreground md:text-3xl',
                        hovered && type.accent
                      )}>
                      {next.title}
                    </Text>
                  </View>
                  <Image
                    source={next.imagePath}
                    resizeMode="cover"
                    style={{ width: 64, height: 64, borderRadius: 16 }}
                  />
                </View>
              )}
            </Pressable>
          </Link>
        ) : null}
      </Container>
    </View>
  );
};

export default ProjectDetailScreen;
