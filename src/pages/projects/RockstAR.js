import { EmbeddedYouTube, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/rockstar-screenshot-01.png';
import screenshot02 from '../../images/screenshots/rockstar-screenshot-02.png';
import screenshot03 from '../../images/screenshots/rockstar-screenshot-03.png';

const RockstAR = () => (
  <Project>
    <section>
      <h1>RockstAR</h1>
    </section>
    <section>
      <p>
        Augmented reality is making it possible to merge virtual objects into
        the physical world around us. To explore the possibilities, fellow
        Solstice engineers and I built RockstAR, an interactive AR experience
        demoed at Solstice FWD. By coupling the power of Microsoft’s HoloLens,
        Philips Hue Lightbulbs, and a series of stage technologies, users are
        given the ability to customize a live rockband experience.
      </p>
      <p>
        You can choose your song and color theme preferences using digital
        menus. Once you&apos;re ready to go, the band plays your song as you set
        the stage for your audience and let the lights groove to the beat. You
        might look a little odd pointing to things no one else can see, but the
        joke&apos;s on them - you&apos;re the star of the show!
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> Front-end Developer, Experience Designer
        <br />
        <em>TECH —</em> Unity, HoloLens, Raspberry Pi + Node.js, Phillips Hue
        Lights, IoT Fog Machine
        <br />
        <em>DATE —</em> September 2016
      </p>
    </section>
    <section>
      <p className="body-lg">
        <b>Media</b>
      </p>
      <ImageGallery images={[screenshot01, screenshot02, screenshot03]} />
      <EmbeddedYouTube
        className="margin-bottom-lg"
        origin="http://adamgraham.io"
        videoId="9VotoUsUsew"
        width="100%"
        height="468"
      />
      <EmbeddedYouTube
        className="margin-bottom-lg"
        origin="http://adamgraham.io"
        videoId="fUKUr3F2VVM"
        width="100%"
        height="468"
      />
      <EmbeddedYouTube
        origin="http://adamgraham.io"
        videoId="zQn6-UV4tGQ"
        width="100%"
        height="468"
      />
    </section>
  </Project>
);

export default RockstAR;
