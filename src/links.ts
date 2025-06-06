import { type LinkType, type LinkTypeWithIcon } from '@zigurous/forge-react';

export const baseUri = 'https://adamgraham.github.io';
export const email = 'mailto:adam@zigurous.com';
export const resume = 'https://docs.google.com/document/d/1qLHBV7Ry11O-pd0XC3HvALBIKJ8YDBmSafP0Z5c4dww/edit?usp=drive_link'; // prettier-ignore
export const github = 'https://github.com/adamgraham';
export const linkedIn = 'https://www.linkedin.com/in/adamzigurous';
export const instagram = 'http://instagram.com/adam.zigurous';
export const twitter = 'https://twitter.com/zigurous';

export const headerLinks: LinkType[] = [
  {
    id: 'games',
    href: '/games',
    name: 'Games',
  },
  {
    id: 'websites',
    href: '/websites',
    name: 'Websites',
  },
  {
    id: 'art',
    href: '/art',
    name: 'Interactive Art',
  },
  {
    id: 'tech',
    href: '/tech',
    name: 'Tech Showcases',
  },
  {
    id: 'presentations',
    href: '/presentations',
    name: 'Presentations',
  },
];

export const dockLinks: LinkTypeWithIcon[] = [
  {
    id: 'home',
    href: '/',
    name: 'Home',
    icon: 'home',
  },
  {
    id: 'gallery',
    href: '/gallery',
    name: 'Gallery',
    icon: 'collections',
  },
  {
    id: 'projects',
    href: '/projects',
    name: 'Projects',
    icon: 'menu',
  },
];

export const socialLinks: SocialLinkType[] = [
  {
    id: 'github',
    href: github,
    name: 'GitHub',
    socialIcon: 'github',
  },
  {
    id: 'linkedIn',
    href: linkedIn,
    name: 'LinkedIn',
    socialIcon: 'linkedIn',
  },
  {
    id: 'resume',
    href: resume,
    name: 'Resume',
    icon: 'description',
  },
  {
    id: 'email',
    href: email,
    name: 'Email',
    icon: 'mail',
  },
];

export type SocialLinkType = {
  socialIcon?: string;
} & LinkTypeWithIcon;
