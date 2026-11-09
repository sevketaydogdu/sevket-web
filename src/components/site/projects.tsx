import { Feather } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { Text } from '@/components/ui/text';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

import { Tag, type, useSiteColors } from './index';

type Project = (typeof projects)[number];

export const projectHref = (project: Project) =>
  `/projects/${clearSpacesAndSpecialCharacters(project.title)}` as Href;

const pad = (n: number) => String(n).padStart(2, '0');

const tagsOf = (project: Project, max: number) =>
  project.technicalDetails
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, max);

/** Editorial list row: index · logo · title/subtitle · tags · arrow. */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const colors = useSiteColors();
  const tags = tagsOf(project, 3);
  return (
    <Link href={projectHref(project)} asChild>
      <Pressable accessibilityRole="link">
        {({ hovered }) => (
          <View
            className={cn(
              'flex-row items-center gap-4 border-b border-border py-5 transition-colors duration-200 md:gap-6 md:py-6',
              hovered && 'bg-orange-500/[0.04]'
            )}>
            <Text className={cn(type.mono, 'hidden w-8 md:flex', hovered && type.accent)}>
              {pad(index + 1)}
            </Text>
            <Image
              source={project.imagePath}
              resizeMode="cover"
              style={{ width: 56, height: 56, borderRadius: 14 }}
            />
            <View className="min-w-0 flex-1 gap-1">
              <Text
                className={cn(
                  'font-heading text-lg text-foreground transition-colors md:text-xl',
                  hovered && type.accent
                )}
                numberOfLines={1}>
                {project.title}
              </Text>
              <Text className={type.small} numberOfLines={1}>
                {project.subtitle}
              </Text>
            </View>
            <View className="hidden flex-row gap-2 lg:flex">
              {tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </View>
            <View
              className={cn(
                'h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-200',
                hovered && 'border-orange-500 bg-orange-500'
              )}>
              <Feather
                name="arrow-up-right"
                size={18}
                color={hovered ? '#ffffff' : colors.fg}
              />
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

/** Grid card used on the Projects page. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const colors = useSiteColors();
  const tags = tagsOf(project, 4);
  return (
    <Link href={projectHref(project)} asChild>
      <Pressable accessibilityRole="link" className="h-full">
        {({ hovered }) => (
          <View
            className={cn(
              'h-full gap-6 rounded-3xl border border-border bg-card p-6 transition-all duration-300 md:p-8',
              hovered && 'border-orange-500/50 shadow-2xl shadow-orange-500/10'
            )}
            style={{ transform: [{ translateY: hovered ? -4 : 0 }] }}>
            <View className="flex-row items-start justify-between">
              <Image
                source={project.imagePath}
                resizeMode="cover"
                style={{ width: 72, height: 72, borderRadius: 18 }}
              />
              <Text className={cn(type.mono, hovered && type.accent)}>{pad(index + 1)}</Text>
            </View>
            <View className="flex-1 gap-2">
              <Text className={cn('font-heading text-2xl text-foreground', hovered && type.accent)}>
                {project.title}
              </Text>
              <Text className={type.body}>{project.subtitle}</Text>
            </View>
            {tags.length ? (
              <View className="flex-row flex-wrap gap-2">
                {tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </View>
            ) : null}
            <View className="flex-row items-center gap-2 border-t border-border pt-5">
              <Text className={cn('font-heading text-sm', hovered ? type.accent : 'text-foreground')}>
                View case study
              </Text>
              <Feather
                name="arrow-right"
                size={16}
                color={hovered ? colors.accent : colors.fg}
                style={{ transform: [{ translateX: hovered ? 4 : 0 }] }}
              />
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}
