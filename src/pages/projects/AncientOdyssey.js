import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import banner from '../../images/banners/ancient-odyssey-banner.png';
import screenshot01 from '../../images/screenshots/ancient-odyssey-screenshot-01.png';
import screenshot02 from '../../images/screenshots/ancient-odyssey-screenshot-02.png';
import screenshot03 from '../../images/screenshots/ancient-odyssey-screenshot-03.png';
import screenshot04 from '../../images/screenshots/ancient-odyssey-screenshot-04.png';
import screenshot05 from '../../images/screenshots/ancient-odyssey-screenshot-05.png';
import screenshot06 from '../../images/screenshots/ancient-odyssey-screenshot-06.png';

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
      <div className="height-1em" />
    </section>
    <section>
      <p className="body-lg">
        <b>Media</b>
      </p>
      <img alt="Ancient Odyssey Banner" width="100%" src={banner} />
      <ImageGallery
        images={[
          screenshot01,
          screenshot02,
          screenshot03,
          screenshot04,
          screenshot05,
          screenshot06,
        ]}
      />
    </section>
  </Project>
);

export default AncientOdyssey;
