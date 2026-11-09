import { Slot } from 'expo-router';
import React from 'react';

export const unstable_settings = {
  // Ensure that reloading on a project keeps the projects index underneath.
  initialRouteName: 'index',
};

// The back link now lives inside the detail page so it follows the page layout and theme.
const ProjectsLayout = () => <Slot />;

export default ProjectsLayout;
