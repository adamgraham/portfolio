import { navigate } from 'gatsby';
import { createContext, useMemo } from 'react';
import { setSessionIndex } from '../utils/session';

export const useContext = (category, gallery, slideIndex, setSlideIndex) => {
  return useMemo(
    () => ({
      category,
      gallery,
      slideIndex,
      currentSlide: gallery[slideIndex],
      setSlideIndex: (index) => {
        index = Math.min(Math.max(index, 0), gallery.length - 1);
        setSessionIndex(category, index);
        setSlideIndex(index);
        navigate(`/${category}`);
      },
    }),
    [category, gallery, slideIndex]
  );
};

const GalleryContext = createContext({
  category: '',
  gallery: [],
  slideIndex: 0,
  currentSlide: null,
  setSlideIndex: () => {},
});

export default GalleryContext;
