import PropTypes from 'prop-types';
import { Cover } from './pages';

export const LocationProps = PropTypes.shape({
  pathname: PropTypes.string,
  search: PropTypes.string,
});

export const HistoryProps = PropTypes.shape({
  location: LocationProps,
  push: PropTypes.func,
});

export const RouteProps = PropTypes.shape({
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  component: PropTypes.elementType,
});

const routes = {
  cover: {
    id: 'cover',
    name: 'Cover',
    path: '/',
    component: Cover,
  },
};

export default routes;
