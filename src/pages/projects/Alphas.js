import {
  Button,
  EmbeddedYouTube,
  ImageGallery,
} from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/alphas-screenshot-01.png';
import screenshot02 from '../../images/screenshots/alphas-screenshot-02.png';

const Alphas = () => (
  <Project>
    <section>
      <h1>Alphas</h1>
    </section>
    <section>
      <p>
        Alphas is a top-down twin stick shooter developed with a team of five
        people in less than two weeks for a course at DePaul University. The
        game consists of five interlinked deadly arenas, several unique weapons,
        and a multitude of engaging enemies lead by the alpha boss. Can you
        survive the swarm?
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> Team Lead, Lead Programmer &amp; Designer
        <br />
        <em>TECH —</em> XNA, C#
        <br />
        <em>DATE —</em> June 2013
      </p>
    </section>
    <section>
      <Button
        external
        link="https://drive.google.com/open?id=0BzUWUmwjB6l2b2M2b00zR25xc28"
        size="small"
      >
        Download
      </Button>
    </section>
    <section className="height-1em" />
    <section>
      <p className="body-lg">
        <b>Media</b>
      </p>
      <ImageGallery columns={1} images={[screenshot01, screenshot02]} />
      <EmbeddedYouTube
        origin="http://adamgraham.io"
        videoId="waZor8haeuY"
        width="800"
        height="450"
      />
    </section>
  </Project>
);

export default Alphas;
