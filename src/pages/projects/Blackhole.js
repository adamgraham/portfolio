import {
  Button,
  EmbeddedYouTube,
  ImageGallery,
} from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/blackhole-screenshot-01.png';
import screenshot02 from '../../images/screenshots/blackhole-screenshot-02.png';
import screenshot03 from '../../images/screenshots/blackhole-screenshot-03.png';

const Blackhole = () => (
  <Project>
    <section>
      <h1>Blackhole</h1>
    </section>
    <section>
      <p>
        Blackhole is a free-form, avant-garde game that enables the player to
        control particles in unique ways. Individuals explore their own creative
        design within the art piece, loosely making their own objectives and
        discovering new ways of controlling this &quot;creative chaos&quot; - a
        new type of game genre.
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>TECH —</em> Adobe Flash, ActionScript 3.0
        <br />
        <em>DATE —</em> January 2015
      </p>
    </section>
    <section>
      <Button
        external
        link="https://drive.google.com/open?id=1qB9JmZHepVmPDG6hM04gqMZAEV7e5miZ"
        size="small"
      >
        Download
      </Button>
      <Button
        className="margin-top-lg"
        external
        link="https://github.com/adamgraham/blackhole"
        size="small"
      >
        Source Code
      </Button>
      <div className="height-1em" />
    </section>
    <section>
      <p className="body-lg">
        <b>Media</b>
      </p>
      <ImageGallery
        columns={1}
        images={[screenshot01, screenshot02, screenshot03]}
      />
      <EmbeddedYouTube origin="http://adamgraham.io" videoId="-rvjwFqjres" />
    </section>
  </Project>
);

export default Blackhole;
