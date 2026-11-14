import React from 'react';
import { View } from 'react-native';

import { Column, Enter, Wide, type, PageTitle } from '@/components/site';
import { Seo } from '@/components/site/Seo';
import { ProjectCard } from '@/components/site/projects';
import { Text } from '@/components/ui/text';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';

const ProjectsScreenWeb = () => {
  return (
    <View className="flex-1">
      <Seo
        title="Work — Şevket Aydoğdu"
        description="Selected mobile and web projects by Şevket Aydoğdu, built with React Native, Expo, React and Next.js."
      />

      <Column className="pt-10 sm:pt-16 md:pt-24">
        <Enter>
          <PageTitle>Work</PageTitle>
          <Text className={cn(type.muted, 'mt-5 text-[17px]')}>
            Mobile and web apps I've designed and built — React Native and Expo on phones, React and
            Next.js on the web. A couple are private client work.
          </Text>
        </Enter>
      </Column>

      <Wide className="mt-14 gap-14 md:mt-20 md:gap-20">
        {projects.map((p, i) => (
          <Enter key={`${p.id}-${p.title}`} step={1 + i}>
            <ProjectCard project={p} />
          </Enter>
        ))}
      </Wide>
    </View>
  );
};

export default ProjectsScreenWeb;
