import {
  Button,
  EmbeddedYouTube,
  ImageGallery,
} from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/canvas-screenshot-01.png';
import screenshot02 from '../../images/screenshots/canvas-screenshot-02.png';

const Canvas = () => (
  <Project>
    <section>
      <h1>Canvas</h1>
    </section>
    <section>
      <p>
        Canvas is a never-ending, interactive painting. Alter the direction of
        the &quot;brushes&quot; and see what kind of abstract paintings you can
        create, or sit back and let it paint for you. Every thirty seconds the
        canvas is cleared and a new set of design principles are created. Learn
        to let go and design with the flow.
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>TECH —</em> Adobe Flash, ActionScript 3.0
        <br />
        <em>DATE —</em> March 2015
      </p>
    </section>
    <section>
      <Button
        external
        link="https://drive.google.com/open?id=1oLkn4-Zg5VK-ZHi1LO3SvlIHqf6Tzh_n"
        size="small"
      >
        Download
      </Button>
      <Button
        className="margin-top-lg"
        external
        link="https://github.com/adamgraham/canvas"
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
      <ImageGallery columns={1} images={[screenshot01, screenshot02]} />
      <EmbeddedYouTube
        origin="http://adamgraham.io"
        videoId="xXHhnwwRHIw"
        width="100%"
        height="468"
      />
    </section>
  </Project>
);

export default Canvas;
