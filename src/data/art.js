import paintingCanvas from '../images/banners/canvas-painting.jpg';
import paintingBlackhole from '../images/banners/blackhole-painting.jpg';
import paintingMixed from '../images/banners/mixed-painting.jpg';
import paintingHexahedroniks from '../images/banners/hexahedroniks-painting.jpg';

const art = [
  {
    id: 'canvas',
    title: 'Canvas',
    description:
      'Canvas is a never-ending, interactive painting. Alter the direction of the "brushes" and see what kind of abstract paintings you can create, or sit back and let it paint for you. Every thirty seconds the canvas is cleared and a new set of design principles are put in place. Learn to let go and design with the flow.',
    link: '/art/canvas',
    altText: 'Canvas Painting',
    image: paintingCanvas,
    imageBorder: 'none',
  },
  {
    id: 'blackhole',
    title: 'Blackhole',
    description:
      'Blackhole is a free-form, avant-garde game that enables the player to control particles in unique ways. Individuals explore their own creative design within the art piece, loosely making their own objectives and discovering new ways of controlling this "creative chaos".',
    link: '/art/blackhole',
    altText: 'Blackhole Painting',
    image: paintingBlackhole,
    imageBorder: 'black',
  },
  {
    id: 'mixed',
    title: 'Mixed',
    description:
      'Mixed is an interactive, avant-garde experiment touching on the topics of diversity, racism, and interracial relationships. Navigate around in an abstract space, mixing with different colors to create other AI-controlled players. Explore the effects of cultural diversity and see how diversity is (im)balanced in the world.',
    link: '/art/mixed',
    altText: 'Mixed Painting',
    image: paintingMixed,
  },
  {
    id: 'hexahedroniks',
    title: 'Hexahedroniks',
    description:
      'Hexahedroniks is a virtual reality, puzzle-like toy inspired by Rubik cubes. Paint the cube various colors by looking around and shooting colored orbs at the many faces. Avoid turning the cube all black while enjoying the calming experience of this art piece.',
    link: '/art/hexahedroniks',
    altText: 'Hexahedroniks Painting',
    image: paintingHexahedroniks,
    imageBorder: 'black',
  },
];

export default art;
