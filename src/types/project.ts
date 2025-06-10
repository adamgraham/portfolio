import { type LinkTypeWithIcon } from '@zigurous/forge-react';
import type { Image } from './image';

export interface ProjectJson {
  nodes: ProjectData[];
}

export interface ProjectData {
  id: string;
  category: string;
  title: string;
  description?: string;
  description_short?: string;
  description_long?: string[];
  date?: string;
  role?: string;
  tech?: string[];
  image: Image;
  imageAltText?: string;
  imageBorder?: boolean;
  dockLinks?: LinkTypeWithIcon[];
  sections?: ProjectSection[];
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
