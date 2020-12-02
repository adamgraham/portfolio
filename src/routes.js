import PropTypes from 'prop-types';
import {
  Art,
  Cover,
  Games,
  Presentations,
  Software,
  Tech,
  Websites,
} from './pages';

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
    exact: true,
    excludeFromNavBar: true,
  },
  games: {
    id: 'games',
    name: 'Games',
    path: '/games',
    component: Games,
  },
  art: {
    id: 'art',
    name: 'Visual Art',
    path: '/art',
    component: Art,
  },
  web: {
    id: 'web',
    name: 'Web Design',
    path: '/websites',
    component: Websites,
  },
  tech: {
    id: 'tech',
    name: 'Emerging Tech',
    path: '/tech',
    component: Tech,
  },
  presentations: {
    id: 'presentations',
    name: 'Presentations',
    path: '/presentations',
    component: Presentations,
  },
  software: {
    id: 'software',
    name: 'Software',
    path: '/software',
    component: Software,
  },
};

export default routes;
