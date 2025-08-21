import { type LinkTypeWithIcon } from '@zigurous/forge-react';
import type { Image } from './image';

export interface SlideData {
  id: string;
  category: string;
  title: string;
  description?: string;
  description_short?: string;
  date?: string;
  image: Image;
  imageBorder?: boolean;
  customLink?: LinkTypeWithIcon;
}

export interface SlidesQueryData {
  json: {
    slides: SlideData[];
  };
}
