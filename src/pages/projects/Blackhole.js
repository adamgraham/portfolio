import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import blackholeScreenshot01 from '../../images/screenshots/blackhole-screenshot-01.png';
import blackholeScreenshot02 from '../../images/screenshots/blackhole-screenshot-02.png';
import blackholeScreenshot03 from '../../images/screenshots/blackhole-screenshot-03.png';

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
    </section>
    <section className="height-1em" />
    <section>
      <p className="body-lg">
        <b>Media</b>
        <ImageGallery
          columns={1}
          images={[
            blackholeScreenshot01,
            blackholeScreenshot02,
            blackholeScreenshot03,
          ]}
        />
      </p>
    </section>
  </Project>
);

export default Blackhole;
