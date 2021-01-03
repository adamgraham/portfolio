import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import banner from '../../images/banners/the-rise-banner.png';
import screenshot01 from '../../images/screenshots/the-rise-screenshot-01.png';
import screenshot02 from '../../images/screenshots/the-rise-screenshot-02.png';
import screenshot03 from '../../images/screenshots/the-rise-screenshot-03.png';
import screenshot04 from '../../images/screenshots/the-rise-screenshot-04.png';
import screenshot05 from '../../images/screenshots/the-rise-screenshot-05.png';
import screenshot06 from '../../images/screenshots/the-rise-screenshot-06.png';

const TheRise = () => (
  <Project>
    <section>
      <h1>The Rise</h1>
    </section>
    <section>
      <p>
        The Rise is a &quot;doors escape&quot; puzzle game with a total of 30
        unique levels. Each is an individual puzzle designed to make you think
        hard. Put your logical skills to the test, rise to the top, and conquer
        all 30 levels.
      </p>
    </section>
    <section>
      <p className="font-sm">
        <em>ROLE —</em> Lead Programmer, Producer, Designer
        <br />
        <em>TECH —</em> Adobe Flash, ActionScript 3.0
        <br />
        <em>DATE —</em> July 2013
      </p>
    </section>
    <section>
      <Button
        external
        link="http://www.newgrounds.com/portal/view/622585"
        size="small"
      >
        Play Game
      </Button>
      <div className="height-1em" />
    </section>
    <section>
      <p className="font-lg">
        <b>Media</b>
      </p>
      <img alt="The Rise Banner" width="100%" src={banner} />
      <ImageGallery
        minWidth={128}
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

export default TheRise;
