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
        the physical world around us. To explore the possibilities, Adam and
        fellow Solstice engineers built RockstAR, an interactive AR experience
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
      <p className="font-sm">
        <em>ROLE —</em> Front-end Developer, Experience Designer
        <br />
        <em>TECH —</em> Unity, HoloLens, Raspberry Pi + Node.js, Phillips Hue
        Lights, IoT Fog Machine
        <br />
        <em>DATE —</em> September 2016
      </p>
    </section>
    <section>
      <p className="font-lg">
        <b>Media</b>
      </p>
      <ImageGallery
        minWidth={128}
        images={[screenshot02, screenshot03, screenshot01]}
      />
      <EmbeddedYouTube
        className="margin-bottom-lg"
        id="solstice-labs-video"
        title="Solstice Labs"
        origin="http://adamgraham.io"
        videoId="9VotoUsUsew"
      />
      <EmbeddedYouTube
        className="margin-bottom-lg"
        id="experience-demo-video"
        title="Experience Demo"
        origin="http://adamgraham.io"
        videoId="fUKUr3F2VVM"
      />
      <EmbeddedYouTube
        id="fwd-recap-video"
        title="FWD Recap"
        origin="http://adamgraham.io"
        videoId="zQn6-UV4tGQ"
      />
    </section>
  </Project>
);

export default RockstAR;
