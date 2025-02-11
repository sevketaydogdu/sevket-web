import { AntDesign } from '@expo/vector-icons';

export const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    id: 'about',
    title: 'About Me',
    href: '/aboutme',
  },
  {
    id: 'projects',

    title: 'Projects',
    href: '/projects',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '/contact',
  },
];

type SocialButtonTypes = {
  name: keyof typeof AntDesign.glyphMap;

  title: string;
  href: string;
};
export const socialButtons: SocialButtonTypes[] = [
  {
    name: 'github',
    title: 'GitHub',
    href: 'https://github.com/sevketaydogdu',
  },
  {
    name: 'twitter',
    title: 'Twitter',
    href: 'https://twitter.com/sevketaydogdu',
  },
  {
    name: 'linkedin-square',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sevketaydogdu/',
  },
];
