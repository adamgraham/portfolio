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
import {
  /* Games */
  Alphas,
  AncientOdyssey,
  BossRush,
  Elegy,
  EscapeTheBasement,
  EscapeTheEstate,
  Ferro,
  HackathonForWildlife,
  LunarEscape,
  SquishemGame,
  TheRise,
  TheWanderingDark,
  /* Art */
  Blackhole,
  Canvas,
  Hexahedroniks,
  Mixed,
  /* Websites */
  Allium,
  AshantisJones,
  BeSuper,
  DemonTHON,
  LetItBeard,
  MargaretBaughman,
  SquishemWebsite,
  TaylorCochranMusic,
  Zigurous,
  /* Tech */
  BlockchainGardens,
  RockstAR,
  VenderVR,
  /* Presentations */
  AnAnimationStory,
  ApplicationDevelopmentOverview,
  EnteringTheNewReality,
  TheLifeOfAUXEngineer,
} from './pages/projects';

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

const games = {
  alphas: {
    id: 'alphas',
    name: 'Alphas',
    path: '/games/alphas',
    component: Alphas,
  },
  ancientOdyssey: {
    id: 'ancient-odyssey',
    name: 'Ancient Odyssey',
    path: '/games/ancient-odyssey',
    component: AncientOdyssey,
  },
  bossRush: {
    id: 'boss-rush',
    name: 'Boss Rush',
    path: '/games/boss-rush',
    component: BossRush,
  },
  elegy: {
    id: 'elegy',
    name: 'Elegy',
    path: '/games/elegy',
    component: Elegy,
  },
  escapeTheBasement: {
    id: 'escape-the-basement',
    name: 'Escape the Basement',
    path: '/games/escape-the-basement',
    component: EscapeTheBasement,
  },
  escapeTheEstate: {
    id: 'escape-the-estate',
    name: 'Escape the Estate',
    path: '/games/escape-the-estate',
    component: EscapeTheEstate,
  },
  ferro: {
    id: 'ferro',
    name: 'Ferro',
    path: '/games/ferro',
    component: Ferro,
  },
  hackathonForWildlife: {
    id: 'hackathon-for-wildlife',
    name: 'Hackathon for Wildlife',
    path: '/games/hackathon-for-wildlife',
    component: HackathonForWildlife,
  },
  lunarEscape: {
    id: 'lunar-escape',
    name: 'Lunar Escape',
    path: '/games/lunar-escape',
    component: LunarEscape,
  },
  squishemGame: {
    id: 'squishem-game',
    name: 'Squish-em!',
    path: '/games/squishem',
    component: SquishemGame,
  },
  theRise: {
    id: 'the-rise',
    name: 'The Rise',
    path: '/games/the-rise',
    component: TheRise,
  },
  theWanderingDark: {
    id: 'the-wandering-dark',
    name: 'The Wandering Dark',
    path: '/games/the-wandering-dark',
    component: TheWanderingDark,
  },
};

const art = {
  blackhole: {
    id: 'blackhole',
    name: 'Blackhole',
    path: '/art/blackhole',
    component: Blackhole,
  },
  canvas: {
    id: 'canvas',
    name: 'Canvas',
    path: '/art/canvas',
    component: Canvas,
  },
  hexahedroniks: {
    id: 'hexahedroniks',
    name: 'Hexahedroniks',
    path: '/art/hexahedroniks',
    component: Hexahedroniks,
  },
  mixed: {
    id: 'mixed',
    name: 'Mixed',
    path: '/art/mixed',
    component: Mixed,
  },
};

const websites = {
  allium: {
    id: 'allium',
    name: 'Allium',
    path: '/websites/allium',
    component: Allium,
  },
  ashantisJones: {
    id: 'ashantis-jones',
    name: 'Ashantis Jones',
    path: '/websites/ashantis-jones',
    component: AshantisJones,
  },
  beSuper: {
    id: 'be-super',
    name: 'Be Super',
    path: '/websites/be-super',
    component: BeSuper,
  },
  demonthon: {
    id: 'demonthon',
    name: 'DemonTHON',
    path: '/websites/demonthon',
    component: DemonTHON,
  },
  letItBeard: {
    id: 'let-it-beard',
    name: 'Let It Beard',
    path: '/websites/let-it-beard',
    component: LetItBeard,
  },
  margaretBaughman: {
    id: 'margaret-baughman',
    name: 'Margaret Baughman',
    path: '/websites/margaret-baughman',
    component: MargaretBaughman,
  },
  squishemWebsite: {
    id: 'squishem-website',
    name: 'Squish-em!',
    path: '/websites/squishem',
    component: SquishemWebsite,
  },
  taylorCochranMusic: {
    id: 'taylor-cochran-music',
    name: 'Taylor Cochran Music',
    path: '/websites/taylor-cochran-music',
    component: TaylorCochranMusic,
  },
  zigurous: {
    id: 'zigurous',
    name: 'Zigurous',
    path: '/websites/zigurous',
    component: Zigurous,
  },
};

const tech = {
  blockchainGardens: {
    id: 'blockchain-gardens',
    name: 'Blockchain Gardens',
    path: '/tech/blockchain-gardens',
    component: BlockchainGardens,
  },
  rockstar: {
    id: 'rockstar',
    name: 'RockstAR',
    path: '/tech/rockstar',
    component: RockstAR,
  },
  venderVR: {
    id: 'vender-vr',
    name: 'Vender VR',
    path: '/tech/vender-vr',
    component: VenderVR,
  },
};

const presentations = {
  anAnimationStory: {
    id: 'an-animation-story',
    name: 'An Animation Story',
    path: '/presentations/an-animation-story',
    component: AnAnimationStory,
  },
  applicationDevelopmentOverview: {
    id: '3d-application-development-overview',
    name: '3D Application Development Overview',
    path: '/presentations/3d-application-development-overview',
    component: ApplicationDevelopmentOverview,
  },
  enteringTheNewReality: {
    id: 'entering-the-new-reality',
    name: 'Entering the New Reality',
    path: '/presentations/entering-the-new-reality',
    component: EnteringTheNewReality,
  },
  theLifeOfAUXEngineer: {
    id: 'the-life-of-a-ux-engineer',
    name: 'The Life of a UX Engineer',
    path: '/presentations/the-life-of-a-ux-engineer',
    component: TheLifeOfAUXEngineer,
  },
};

const routes = {
  cover: {
    id: 'cover',
    name: 'Cover',
    path: '/',
    component: Cover,
    exact: true,
  },
  ...games,
  games: {
    id: 'games',
    name: 'Games',
    path: '/games',
    component: Games,
    includeInNavBar: true,
  },
  ...art,
  art: {
    id: 'art',
    name: 'Visual Art',
    path: '/art',
    component: Art,
    includeInNavBar: true,
  },
  ...websites,
  websites: {
    id: 'websites',
    name: 'Web Design',
    path: '/websites',
    component: Websites,
    includeInNavBar: true,
  },
  ...tech,
  tech: {
    id: 'tech',
    name: 'Emerging Tech',
    path: '/tech',
    component: Tech,
    includeInNavBar: true,
  },
  ...presentations,
  presentations: {
    id: 'presentations',
    name: 'Presentations',
    path: '/presentations',
    component: Presentations,
    includeInNavBar: true,
  },
  software: {
    id: 'software',
    name: 'Software 🡕',
    path: '/software',
    component: Software,
    includeInNavBar: true,
  },
};

export default routes;
