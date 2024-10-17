import type { Image } from './image';
import type { LinkType } from './link';

export type ProjectJson = {
  nodes: ProjectData[];
};

export type ProjectData = {
  buttons?: LinkType[];
  category: string;
  date?: string;
  description?: string;
  description_short?: string;
  description_long?: string[];
  id: string;
  image: Image;
  imageAltText?: string;
  imageBorder?: boolean;
  role?: string;
  sections?: ProjectSection[];
  tech?: string[];
  title: string;
};

export type ProjectSection = {
  title?: string;
  link?: string;
  mainImage?: Image;
  mainImageLink?: string;
  mainVideo?: string;
  paragraphs?: string[];
  gallery?: Image[];
  videos?: string[];
};
