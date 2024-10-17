import type { Image } from './image';

export type SlideData = {
  category: string;
  date?: string;
  description?: string;
  description_short?: string;
  id: string;
  image: Image;
  imageAltText?: string;
  imageBorder?: boolean;
  title: string;
};
