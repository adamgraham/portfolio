import {
  Button,
  EmbeddedYouTube,
  ImageGallery,
} from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/elegy-screenshot-01.png';
import screenshot02 from '../../images/screenshots/elegy-screenshot-02.png';

const Elegy = () => (
  <Project>
    <section>
      <h1>Elegy</h1>
    </section>
    <section>
      <p>
        Elegy is a deep game covering the five stages of grief as a parent deals
        with the loss of their child. A parent attends the funeral of their
        child and tries to rewind time to stop the child&apos;s death from
        occurring. The player engages in different scenes to figure out how they
        can stop the events from happening, but ultimately they must accept the
        death of their child. Elegy was developed with a team of five people in
        less than two weeks at DePaul University.
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> Lead Programmer, Designer
        <br />
        <em>TECH —</em> Adobe Flash, ActionScript 3.0
        <br />
        <em>DATE —</em> March 2015
      </p>
    </section>
    <section>
      <Button
        external
        link="https://drive.google.com/open?id=1RHmvqyU1B5gXo0hb18n7ahSxnKQeSTra"
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
        videoId="KQxgLDEK05g"
        width="100%"
        height="468"
      />
    </section>
  </Project>
);

export default Elegy;
