import React from 'react';
import { Gallery } from '../components';
import paintingBlockchainGardens from '../images/banners/blockchain-gardens-painting.png';
import paintingRockstar from '../images/banners/rockstar-painting.png';
import paintingVenderVR from '../images/banners/vender-vr-painting.png';

const Tech = () => (
  <Gallery
    slides={[
      {
        id: 'blockchain-gardens',
        title: 'Blockchain Gardens',
        description:
          'The blockchain is as misunderstood yet powerfully compelling as any emerging technology. It’s no longer sufficient to merely explain the technical nuances and intricacies, the time has come for people to experience them. Blockchain Gardens is a real-time 3D visualization of a private Ethereum blockchain instance displayed at Solstice’s digital innovation summit.',
        link: '/tech/blockchain-gardens',
        image: paintingBlockchainGardens,
      },
      {
        id: 'rockstar',
        title: 'RockstAR',
        description:
          'Augmented reality is making it possible to merge virtual objects into the physical world around us. RockstAR is an interactive AR experience demoed at Solstice FWD. By coupling the power of Microsoft’s HoloLens, Philips Hue Lightbulbs, and a series of stage technologies, users are given the ability to customize a live rockband experience.',
        link: '/tech/rockstar',
        image: paintingRockstar,
      },
      {
        id: 'vender-vr',
        title: 'Vender VR',
        description:
          "Vender is an IoT connected vending machine that started as an R&D project at Solstice. Less than a month before Solstice's digital innovation summit, Vender was expanded to the virtual world. I took on the project head first and developed the first ever virtual reality vending machine experience.",
        link: '/tech/vender-vr',
        image: paintingVenderVR,
      },
    ]}
  />
);

export default Tech;
