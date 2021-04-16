import PropTypes from 'prop-types';

export const ImageProps = PropTypes.shape({
  sharp: PropTypes.shape({
    original: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }),
});
