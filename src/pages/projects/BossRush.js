import {
  Button,
  EmbeddedYouTube,
  ImageGallery,
} from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/boss-rush-screenshot-01.png';
import screenshot02 from '../../images/screenshots/boss-rush-screenshot-02.png';

const BossRush = () => (
  <Project>
    <section>
      <h1>Boss Rush</h1>
    </section>
    <section>
      <p>
        Boss Rush is a top-down, twin-stick shooter consisting of nothing but
        boss fights. Developed with a team of seven people for a course at
        DePaul University, the objective was to create a slice of a complete
        game, so it consists of one action-packed boss fight – the Spider Tank.
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> Gameplay &amp; Systems Programmer
        <br />
        <em>TECH —</em> Unity, C#
        <br />
        <em>DATE —</em> November 2014
      </p>
    </section>
    <section>
      <Button
        external
        link="https://github.com/ModSquadWorkshop/BossRush/releases"
        size="small"
      >
        Download
      </Button>
      <div className="height-1em" />
    </section>
    <section>
      <p className="body-lg">
        <b>Media</b>
      </p>
      <ImageGallery columns={1} images={[screenshot01, screenshot02]} />
      <EmbeddedYouTube
        origin="http://adamgraham.io"
        videoId="mbLD45xPQME"
        width="100%"
        height="468"
      />
    </section>
  </Project>
);

export default BossRush;
