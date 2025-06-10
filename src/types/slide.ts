import { type LinkTypeWithIcon } from '@zigurous/forge-react';
import type { Image } from './image';

export interface SlideData {
  category: string;
  customLink?: LinkTypeWithIcon;
  date?: string;
  description?: string;
  description_short?: string;
  id: string;
  image: Image;
  imageAltText?: string;
  imageBorder?: boolean;
  title: string;
}
