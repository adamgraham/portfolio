import React from 'react';
import { Gallery } from '../components';
import paintingAllium from '../images/banners/allium-painting.png';
import paintingDemonthon from '../images/banners/demonthon-painting.png';
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
        id: 'taylor-cochran-music',
        title: 'Taylor Cochran Music',
        description:
          'Taylor Cochran is a singer/songwriter from Nashville, Tennessee who pursued his songwriting career in early 2013 by gaining experience playing in local bars, venues, and with his church. Through his music, he aspires to send a message of joy, hope, and love.',
        link: '/websites/taylor-cochran-music',
        image: paintingTaylorCochranMusic,
      },
      {
        id: 'zigurous',
        title: 'Zigurous',
        description:
          'Zigurous is an independent video game developer focused on creating games that have a strong balance of play, design, and art through storytelling and self-expression.',
        link: '/websites/zigurous',
        image: paintingZigurous,
      },
      {
        id: 'let-it-beard',
        title: 'Let It Beard',
        description:
          'Let It Beard is an animated short film that follows the misadventures of an enigmatic religious family known simply as “The Cult”. The Captain and his bevy of devoted followers aim for truth, inner peace, and run various entrepreneurial endeavors on their path to transcendent enlightenment.',
        link: '/websites/let-it-beard',
        image: paintingLetItBeard,
      },
    ]}
  />
);

export default Websites;
