import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import theRiseBanner from '../../images/banners/the-rise-banner.png';
import theRiseScreenshot01 from '../../images/screenshots/the-rise-screenshot-01.png';
import theRiseScreenshot02 from '../../images/screenshots/the-rise-screenshot-02.png';
import theRiseScreenshot03 from '../../images/screenshots/the-rise-screenshot-03.png';
import theRiseScreenshot04 from '../../images/screenshots/the-rise-screenshot-04.png';
import theRiseScreenshot05 from '../../images/screenshots/the-rise-screenshot-05.png';

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
      <p className="body-sm">
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
    </section>
    <section className="height-1em" />
    <section>
      <p className="body-xl">
        <b>Media</b>
      </p>
      <img alt="" width="100%" src={theRiseBanner} />
      <ImageGallery
        images={[
          theRiseScreenshot01,
          theRiseScreenshot02,
          theRiseScreenshot03,
          theRiseScreenshot04,
          theRiseScreenshot05,
        ]}
      />
    </section>
  </Project>
);

export default TheRise;
