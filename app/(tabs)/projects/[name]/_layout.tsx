import { Slot } from 'expo-router';
import React from 'react';

import { projects } from '@/constants/projects';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

// The [name] segment belongs to this layout, so expo-router only reads
// generateStaticParams from here (not from index.tsx) when prerendering.
export async function generateStaticParams(): Promise<Record<string, string>[]> {
  return projects.map((project) => ({
    name: clearSpacesAndSpecialCharacters(project.title),
  }));
}

export const unstable_settings = {
  // Ensure that reloading on a project keeps the projects index underneath.
  anchor: 'index',
};

// The back link now lives inside the detail page so it follows the page layout and theme.
const ProjectsLayout = () => <Slot />;

export default ProjectsLayout;
