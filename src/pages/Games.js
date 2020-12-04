import React from 'react';
import { Gallery } from '../components';
import paintingTheWanderingDark from '../images/banners/the-wandering-dark-painting.png';
import paintingSquishem from '../images/banners/squishem-game-painting.png';
import paintingTheRise from '../images/banners/the-rise-painting.png';
import paintingAncienyOdyssey from '../images/banners/ancient-odyssey-painting.png';
import paintingLunarEscape from '../images/banners/lunar-escape-painting.png';
import paintingEscapeTheBasement from '../images/banners/escape-the-basement-painting.png';
import paintingEscapeTheEstate from '../images/banners/escape-the-estate-painting.png';
import paintingInternetOfElephants from '../images/banners/internet-of-elephants-painting.png';
import paintingBossRush from '../images/banners/boss-rush-painting.png';
import paintingAlphas from '../images/banners/alphas-painting.png';
import paintingFerro from '../images/banners/ferro-painting.png';
import paintingElegy from '../images/banners/elegy-painting.png';

const Games = () => (
  <Gallery
    slides={[
      {
        id: 'the-wandering-dark',
        title: 'The Wandering Dark',
        description:
          "The Wandering Dark is a unique indie adventure game that takes you through a girl's dreams and nightmares as she deals with her struggles and fears in life. Battle through these nightmares, explore her different dream worlds, and fight for survival as she matures and grows.",
        link: '/games/the-wandering-dark',
        image: paintingTheWanderingDark,
        imageBorder: 'black',
      },
      {
        id: 'squishem',
        title: 'Squish-em!',
        description:
          "Squish-em! is an arcade game with ever so squishy moles just asking for a tap on the head! It's a simple whack-a-mole re-creation designed for highscore-play. Squish your way to the top of the leaderboards, earn achievements along the way, and brag to your friends once you beat their best score! Do you have what it takes to become the best squisher around?",
        link: '/games/squishem',
        image: paintingSquishem,
      },
      {
        id: 'the-rise',
        title: 'The Rise',
        description:
          'The Rise is a puzzle "doors escape" game. There are a total of 30 unique levels. Each is an individual puzzle designed to make your brain think hard! Put your logical skills to the test rookie! Can you rise to the top and conquer all 30 levels?',
        link: '/games/the-rise',
        image: paintingTheRise,
      },
      {
        id: 'ancient-odyssey',
        title: 'Ancient Odyssey',
        description:
          'Ancient Odyssey is a puzzle "doors escape" game. There are a total of 30 unique levels. Each is an individual puzzle designed to make your brain think hard! Can you survive the journey to the underworld by plundering all 30 levels?',
        link: '/games/ancient-odyssey',
        image: paintingAncienyOdyssey,
      },
      {
        id: 'lunar-escape',
        title: 'Lunar Escape',
        description:
          'Lunar Escape is a puzzle "doors escape" game. There are a total of 30 unique levels. Each is an individual puzzle designed to make your brain think out of this world! Do you have the logical skills needed to transcend all 30 levels?',
        link: '/games/lunar-escape',
        image: paintingLunarEscape,
      },
      {
        id: 'escape-the-basement',
        title: 'Escape the Basement',
        description:
          'Escape the Basement is a point-and-click puzzle "escape" game. You, of all people, were chosen to die. A cruel man named Kane has locked you in his basement with no thought of letting you free. Can you outwit his evil plan and escape?',
        link: '/games/escape-the-basement',
        image: paintingEscapeTheBasement,
        imageBorder: 'black',
      },
      {
        id: 'escape-the-estate',
        title: 'Escape the Estate',
        description:
          'Escape the Estate is a point-and-click puzzle "escape" game. Your life is on the line! Kane is at it again, and this time he is angry! Do you have what it takes to prevent his cruel intentions? Put your puzzle-solving skills to the test in the sequel to Escape the Basement!',
        link: '/games/escape-the-estate',
        image: paintingEscapeTheEstate,
        imageBorder: 'black',
      },
      {
        id: 'internet-of-elephants',
        title: 'Internet of Elephants',
        description:
          'During a 24 hour hackathon, Adam set out to create an empathetic game that invokes the emotions an elephant feels while being hunted by a deadly poacher. By putting the player in the role of the elephant, it creates a deeper connection between the human and the animal.',
        link: '/games/internet-of-elephants',
        image: paintingInternetOfElephants,
      },
      {
        id: 'boss-rush',
        title: 'Boss Rush',
        description:
          'Boss Rush is a top-down, twin-stick shooter consisting of nothing but boss fights. Developed for a course at DePaul University, the objective was to create a slice of a complete game, so it consists of one action-packed boss fight – the Spider Tank.',
        link: '/games/boss-rush',
        image: paintingBossRush,
      },
      {
        id: 'alphas',
        title: 'Alphas',
        description:
          'Alphas is a top-down twin stick action shooter developed for a course at DePaul University. The game consists of five interlinked deadly arenas, several unique weapons, and a multitude of engaging enemies lead by the alpha boss. Can you survive the swarm?',
        link: '/games/alphas',
        image: paintingAlphas,
        imageBorder: 'black',
      },
      {
        id: 'ferro',
        title: 'Ferro',
        description:
          'Ferro is a unique virtual reality experience inspired by ferrofluids. As a scientist who has discovered a potential gateway into another universe, your job is to channel it to the right frequency. Players use a midi keyboard as the primary input device to initiate the machines and tune the portal.',
        link: '/games/ferro',
        image: paintingFerro,
        imageBorder: 'black',
      },
      {
        id: 'elegy',
        title: 'Elegy',
        description:
          "Elegy is a deep game covering the five stages of grief as a parent deals with the loss of their child. A parent attends the funeral of their child and tries to rewind time to stop the child's death from occurring. The player engages in different scenes to figure out how they can stop the events from happening, but ultimately they must accept the death of their child.",
        link: '/games/elegy',
        image: paintingElegy,
      },
    ]}
  />
);

export default Games;
