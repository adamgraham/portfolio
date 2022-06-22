import { useMediaQuery } from '@zigurous/react-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Slide from './slide';
import chevronLeftIcon from '../images/icons/chevron-left.svg';
import chevronRightIcon from '../images/icons/chevron-right.svg';
// import imageIcon from '../images/icons/image.svg';
// import infoIcon from '../images/icons/info.svg';
import '../styles/gallery.css';
import { GalleryContext } from '../context';

const Gallery = ({ className }) => {
  const verticalLayout = useMediaQuery('(max-width: 1365px)');
  // const [showInfo, setShowInfo] = useState(true);
  return (
    <GalleryContext.Consumer>
      {({ gallery, currentSlide, slideIndex, nextSlide, previousSlide }) => (
        <article
          className={classNames(
            'gallery',
            // { 'gallery--hide-info': !showInfo },
            { 'gallery--vertical-layout': verticalLayout },
            className
          )}
        >
          <button
            aria-label="Previous Slide"
            className="gallery__button left"
            disabled={slideIndex <= 0}
            onClick={previousSlide}
          >
            {slideIndex > 0 && <img alt="" src={chevronLeftIcon} />}
          </button>
          <div className="gallery__slides">
            {currentSlide && <Slide slide={currentSlide} />}
          </div>
          <button
            aria-label="Next Slide"
            className="gallery__button right"
            disabled={slideIndex >= gallery.length - 1}
            onClick={nextSlide}
          >
            {slideIndex < gallery.length - 1 && (
              <img alt="" src={chevronRightIcon} />
            )}
          </button>
          {/* <button
          aria-label={showInfo ? 'Hide Info' : 'Show Info'}
          className="gallery__button info"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <img alt="" src={imageIcon} />
          ) : (
            <img alt="" src={infoIcon} />
          )}
        </button> */}
        </article>
      )}
    </GalleryContext.Consumer>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
};

export default Gallery;
