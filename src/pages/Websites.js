import React from 'react';
import { Gallery } from '../components';
import paintingAllium from '../images/banners/allium-painting.png';
import paintingAshantisJones from '../images/banners/ashantis-jones-painting.png';
import paintingDemonthon from '../images/banners/demonthon-painting.png';
import paintingMargaretBaughman from '../images/banners/margaret-baughman-painting.png';
import paintingSquishem from '../images/banners/squishem-website-painting.png';
import paintingZigurous from '../images/banners/zigurous-painting.png';
import paintingTaylorCochranMusic from '../images/banners/taylor-cochran-music-painting.png';
import paintingLetItBeard from '../images/banners/let-it-beard-painting.png';

const Websites = () => (
  <Gallery
    slides={[
      {
        id: 'allium',
        title: 'Allium',
        description:
          'Allium is a home-based floral design studio launched in 2013 by Kim Stanke. After years of working in both retail stores and special event design shops, Kim started her own business to flex her creative muscles.',
        link: '/websites/allium',
        image: paintingAllium,
      },
      {
        id: 'demonthon',
        title: 'DemonTHON',
        description:
          "DemonTHON is a year-long fundraising organization benefiting Ann & Robert H. Lurie Children's Hospital of Chicago that culminates in a 24-hour Dance Marathon.",
        link: '/websites/demonthon',
        image: paintingDemonthon,
      },
      {
        id: 'squishem',
        title: 'Squish-em!',
        description:
          'Squish-em! is an arcade game with ever so squishy moles just asking for a tap on the head! It is a simple whack-a-mole re-creation designed for highscore-play.',
        link: '/websites/squishem',
        image: paintingSquishem,
      },
      {
        id: 'zigurous',
        title: 'Zigurous',
        description:
          'Zigurous is an indie game development studio. Adam has managed and designed the website since he founded the game studio in 2012. The website is redesigned with a new theme to fit the project being worked on.',
        link: '/websites/zigurous',
        image: paintingZigurous,
      },
      {
        id: 'ashantis-jones',
        title: 'Ashantis Jones',
        description:
          'Ashantis is a native Clevelander that entertains and creates memorable events through detail oriented design and calculated execution.',
        link: '/websites/ashantis-jones',
        image: paintingAshantisJones,
      },
      {
        id: 'margaret-baughman',
        title: 'Margaret Baughman',
        description:
          'Director, choreographer, and empathetic human, Margaret Baughman is enchanted by a world of contradictions that allows her to shake up perspectives through theatre, advocacy, and impeccable organization.',
        link: '/websites/margaret-baughman',
        image: paintingMargaretBaughman,
      },
      {
        id: 'taylor-cochran-music',
        title: 'Taylor Cochran Music',
        description:
          'Taylor Cochran is a singer/songwriter from Nashville, Tennessee who pursued his songwriting career in early 2013 by gaining experience playing in local bars, venues, and with his church. Through his music, he aspires to send a message of joy, hope, and love.',
        link: '/websites/taylor-cochran-music',
        image: paintingTaylorCochranMusic,
      },
      {
        id: 'let-it-beard',
        title: 'Let It Beard',
        description:
          'Let It Beard is an animated short film that follows the misadventures of an enigmatic religious family known simply as "The Cult". The Captain and his bevy of devoted followers aim for truth, inner peace, and run various entrepreneurial endeavors on their path to transcendent enlightenment.',
        link: '/websites/let-it-beard',
        image: paintingLetItBeard,
      },
    ]}
  />
);

export default Websites;
