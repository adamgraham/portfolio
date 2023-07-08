import { createContext } from 'react';

export const GalleryContext = createContext({
  category: '',
  gallery: [],
  slideIndex: 0,
  currentSlide: null,
  setSlideIndex: () => {},
});
