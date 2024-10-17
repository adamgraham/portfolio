import { LinkType } from './types/link';

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
    to: '/games',
    name: 'Games',
  },
  {
    id: 'websites',
    to: '/websites',
    name: 'Websites',
  },
  {
    id: 'art',
    to: '/art',
    name: 'Interactive Art',
  },
  {
    id: 'tech',
    to: '/tech',
    name: 'Tech Showcases',
  },
  {
    id: 'presentations',
    to: '/presentations',
    name: 'Presentations',
  },
];

export const dockLinks: LinkType[] = [
  {
    id: 'home',
    to: '/',
    name: 'Home',
    icon: 'home',
  },
  {
    id: 'gallery',
    to: '/gallery',
    name: 'Gallery',
    icon: 'collections',
  },
  {
    id: 'projects',
    to: '/projects',
    name: 'Projects',
    icon: 'menu',
  },
];

export const socialLinks: LinkType[] = [
  {
    id: 'github',
    to: github,
    name: 'GitHub',
    socialIcon: 'github',
  },
  {
    id: 'linkedIn',
    to: linkedIn,
    name: 'LinkedIn',
    socialIcon: 'linkedIn',
  },
  {
    id: 'resume',
    to: resume,
    name: 'Resume',
    icon: 'description',
  },
  {
    id: 'email',
    to: email,
    name: 'Email',
    icon: 'mail',
  },
];
