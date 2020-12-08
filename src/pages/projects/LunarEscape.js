import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import banner from '../../images/banners/lunar-escape-banner.png';
import screenshot01 from '../../images/screenshots/lunar-escape-screenshot-01.png';
import screenshot02 from '../../images/screenshots/lunar-escape-screenshot-02.png';
import screenshot03 from '../../images/screenshots/lunar-escape-screenshot-03.png';
import screenshot04 from '../../images/screenshots/lunar-escape-screenshot-04.png';
import screenshot05 from '../../images/screenshots/lunar-escape-screenshot-05.png';
import screenshot06 from '../../images/screenshots/lunar-escape-screenshot-06.png';

const LunarEscape = () => (
  <Project>
    <section>
      <h1>Lunar Escape</h1>
    </section>
    <section>
      <p>
        Lunar Escape is a puzzle &quot;doors escape&quot; game. There are a
        total of 30 unique levels. Each is an individual puzzle designed to make
        your brain think out of this world! Do you have the logical skills
        needed to transcend all 30 levels?
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> Lead Programmer, Producer, Designer, Artist
        <br />
        <em>TECH —</em> Adobe Flash, ActionScript 3.0
        <br />
        <em>DATE —</em> September 2013
      </p>
    </section>
    <section>
      <Button
        external
        link="http://www.newgrounds.com/portal/view/625640"
        size="small"
      >
        Play Game
      </Button>
      <Button
        className="margin-top-lg"
        external
        link="https://itunes.apple.com/app/escape-to-space/id681843951"
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
      <img alt="Lunar Escape Banner" width="100%" src={banner} />
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

export default LunarEscape;
