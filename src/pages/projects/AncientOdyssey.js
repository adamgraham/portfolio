import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import ancientOdysseyBanner from '../../images/banners/ancient-odyssey-banner.png';
import ancientOdysseyScreenshot01 from '../../images/screenshots/ancient-odyssey-screenshot-01.png';
import ancientOdysseyScreenshot02 from '../../images/screenshots/ancient-odyssey-screenshot-02.png';
import ancientOdysseyScreenshot03 from '../../images/screenshots/ancient-odyssey-screenshot-03.png';
import ancientOdysseyScreenshot04 from '../../images/screenshots/ancient-odyssey-screenshot-04.png';
import ancientOdysseyScreenshot05 from '../../images/screenshots/ancient-odyssey-screenshot-05.png';
import ancientOdysseyScreenshot06 from '../../images/screenshots/ancient-odyssey-screenshot-06.png';

const AncientOdyssey = () => (
  <Project>
    <section>
      <h1>Ancient Odyssey</h1>
    </section>
    <section>
      <p>
        Ancient Odyssey is a &quot;doors escape&quot; puzzle game containing 30
        unique levels. Each is an individual puzzle designed to make your brain
        think hard! Can you survive the journey to the underworld by plundering
        all 30 levels?
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> Lead Programmer, Producer, Designer
        <br />
        <em>TECH —</em> Adobe Flash, ActionScript 3.0
        <br />
        <em>DATE —</em> November 2013
      </p>
    </section>
    <section>
      <Button
        external
        link="http://www.newgrounds.com/portal/view/628001"
        size="small"
      >
        Play Game
      </Button>
      <Button
        className="margin-top-lg"
        external
        link="https://itunes.apple.com/app/pharaoh's-escape/id702877946"
        size="small"
      >
        iOS Download
      </Button>
    </section>
    <section className="height-1em" />
    <section>
      <p className="body-lg">
        <b>Media</b>
      </p>
      <img alt="" width="100%" src={ancientOdysseyBanner} />
      <ImageGallery
        images={[
          ancientOdysseyScreenshot01,
          ancientOdysseyScreenshot02,
          ancientOdysseyScreenshot03,
          ancientOdysseyScreenshot04,
          ancientOdysseyScreenshot05,
          ancientOdysseyScreenshot06,
        ]}
      />
    </section>
  </Project>
);

export default AncientOdyssey;
