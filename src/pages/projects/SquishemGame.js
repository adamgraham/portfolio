import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import squishemBanner from '../../images/banners/squishem-banner.png';
import squishemScreenshot01 from '../../images/screenshots/squishem-screenshot-01.png';
import squishemScreenshot02 from '../../images/screenshots/squishem-screenshot-02.png';
import squishemScreenshot03 from '../../images/screenshots/squishem-screenshot-03.png';
import squishemScreenshot04 from '../../images/screenshots/squishem-screenshot-04.png';

const Squishem = () => (
  <Project>
    <section>
      <h1>Squish-em!</h1>
    </section>
    <section>
      <p>
        Squish-em! is an arcade game with ever so squishy moles just asking for
        a tap on the head! It&apos;s a simple whack-a-mole re-creation designed
        for highscore-play. Squish your way to the top of the leaderboards, earn
        achievements along the way, and brag to your friends once you beat their
        best score! Do you have what it takes to become the best squisher
        around?
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> Lead Programmer, Producer, Designer
        <br />
        <em>TECH —</em> Adobe Flash, ActionScript 3.0
        <br />
        <em>DATE —</em> April 2015
      </p>
    </section>
    <section>
      <Button external link="http://www.squishem.com/" size="small">
        Play Game
      </Button>
    </section>
    <section className="height-1em" />
    <section>
      <p className="body-lg">
        <b>Media</b>
      </p>
      <img alt="" width="100%" src={squishemBanner} />
      <ImageGallery
        images={[
          squishemScreenshot01,
          squishemScreenshot02,
          squishemScreenshot03,
          squishemScreenshot04,
        ]}
      />
    </section>
  </Project>
);

export default Squishem;
