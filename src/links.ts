import { type LinkType, type LinkTypeWithIcon } from '@zigurous/forge-react';

export const baseUri = 'https://adamgraham.github.io';
export const email = 'mailto:adam@zigurous.com';
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
  {
    id: 'tutorials',
    href: '/tutorials',
    name: 'Tutorials',
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
    id: 'resume',
    href: '/resume',
    name: 'Resume',
    icon: 'description',
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
    id: 'twitter',
    href: twitter,
    name: 'Twitter',
    icon: 'twitter',
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
