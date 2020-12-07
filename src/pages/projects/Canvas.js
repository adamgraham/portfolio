import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import canvasScreenshot01 from '../../images/screenshots/canvas-screenshot-01.png';
import canvasScreenshot02 from '../../images/screenshots/canvas-screenshot-02.png';

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
    </section>
    <section className="height-1em" />
    <section>
      <p className="body-lg">
        <b>Media</b>
        <ImageGallery
          columns={1}
          images={[canvasScreenshot01, canvasScreenshot02]}
        />
      </p>
    </section>
  </Project>
);

export default Canvas;
