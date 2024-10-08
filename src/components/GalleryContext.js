import { navigate } from 'gatsby';
import { createContext, useMemo } from 'react';

export const useContextState = (category, slides = [], slideIndex) => {
  return useMemo(() => {
    return {
      category,
      slides,
      slideIndex,
      currentSlide: slides[slideIndex],
      setSlideIndex: (index) => {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        navigate(`/${category}?index=${index}`);
      },
    };
  }, [category, slides, slideIndex]);
};

const GalleryContext = createContext({
  category: '',
  slides: [],
  slideIndex: 0,
  currentSlide: null,
  setSlideIndex: () => {},
});

export default GalleryContext;
