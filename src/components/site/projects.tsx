import { Href, Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

import { Text } from '@/components/ui/text';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

import { type } from './index';

export type Project = (typeof projects)[number];

export const projectHref = (project: Project) =>
  `/projects/${clearSpacesAndSpecialCharacters(project.title)}` as Href;

/** Field color each app icon sits on — taken from the icon itself. */
const TINTS: Record<string, string> = {
  'X - UI Clone': '#d9d6ce',
  'Easy Dhikr: Zikirmatik': '#06210a',
  Politicca: '#0d3a8c',
  SkorSever: '#0b1830',
  Botanik: '#2e7a33',
};
export const tintOf = (project: Project) => TINTS[project.title] ?? '#1c1c1a';

export function platformsOf(project: Project): string[] {
  const l: { apple?: string; google?: string; web?: string; github?: string } =
    project.storeLinks ?? {};
  const out: string[] = [];
  if (l.apple) out.push('iOS');
  if (l.google) out.push('Android');
  if (l.web) out.push('Web');
  if (!out.length) out.push('Private');
  return out;
}

export const kindOf = (project: Project) => project.subtitle.replace(/^with\s+/i, 'Built with ');

/** Square colored field with the app icon centred — the only "image" treatment on the site. */
export function IconField({
  project,
  iconSize = 112,
  className,
}: {
  project: Project;
  iconSize?: number;
  className?: string;
}) {
  return (
    <View
      className={cn('aspect-square w-full items-center justify-center overflow-hidden', className)}
      style={{ backgroundColor: tintOf(project) }}>
      <Image
        source={project.imagePath}
        resizeMode="cover"
        style={{ width: iconSize, height: iconSize, borderRadius: iconSize * 0.225 }}
      />
    </View>
  );
}

/**
 * Work index: a typographic list on the left, a sticky preview field on the
 * right that follows whichever row is hovered (desktop only).
 */
export function WorkIndex() {
  const [active, setActive] = React.useState(0);
  const current = projects[active];

  return (
    <View className="lg:flex-row lg:gap-10">
      <View className="flex-1">
        {projects.map((project, i) => (
          <Link key={`${project.id}-${project.title}`} href={projectHref(project)} asChild>
            <Pressable accessibilityRole="link" onHoverIn={() => setActive(i)}>
              {({ hovered }) => (
                <View className="flex-row items-center gap-4 border-b border-border py-5 md:py-6">
                  <Image
                    source={project.imagePath}
                    resizeMode="cover"
                    className="lg:hidden"
                    style={{ width: 44, height: 44, borderRadius: 10 }}
                  />
                  <Text
                    className={cn(
                      type.heading,
                      'flex-1 transition-colors duration-150 md:flex-none md:w-[42%]',
                      hovered && 'text-signal'
                    )}
                    numberOfLines={1}>
                    {project.title}
                  </Text>
                  <Text className={cn(type.meta, 'hidden flex-1 md:flex')} numberOfLines={1}>
                    {kindOf(project)}
                  </Text>
                  <Text className={cn(type.meta, 'tabular text-right md:w-36')}>
                    {platformsOf(project).join(', ')}
                  </Text>
                </View>
              )}
            </Pressable>
          </Link>
        ))}
      </View>

      <View className="hidden w-[30%] lg:flex">
        <View className="sticky top-8">
          <IconField project={current} iconSize={120} />
          <View className="mt-3 flex-row justify-between">
            <Text className={type.label}>{current.title}</Text>
            <Text className={cn(type.label, 'tabular')}>
              {String(active + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

/** Tile for the Work page grid. */
export function ProjectTile({ project }: { project: Project }) {
  return (
    <Link href={projectHref(project)} asChild>
      <Pressable accessibilityRole="link">
        {({ hovered }) => (
          <View>
            <View className="overflow-hidden">
              <View
                className="transition-transform duration-500 ease-out"
                style={{ transform: [{ scale: hovered ? 1.03 : 1 }] }}>
                <IconField project={project} iconSize={128} />
              </View>
            </View>
            <View className="mt-4 flex-row items-baseline justify-between gap-4">
              <Text
                className={cn(
                  type.heading,
                  'transition-colors duration-150',
                  hovered && 'text-signal'
                )}>
                {project.title}
              </Text>
              <Text className={cn(type.meta, 'text-right')}>{platformsOf(project).join(', ')}</Text>
            </View>
            <Text className={cn(type.meta, 'mt-1')}>{kindOf(project)}</Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
}
