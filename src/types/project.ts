import { type LinkTypeWithIcon } from '@zigurous/forge-react';
import type { Image } from './image';

export interface ProjectJson {
  nodes: ProjectData[];
}

export interface ProjectData {
  buttons?: LinkTypeWithIcon[];
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
}

export interface ProjectSection {
  title?: string;
  link?: string;
  mainImage?: Image;
  mainImageLink?: string;
  mainVideo?: string;
  paragraphs?: string[];
  gallery?: Image[];
  videos?: string[];
}

export interface ProjectQueryData {
  project: ProjectData;
}
