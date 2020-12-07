import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import escapeTheEstateBanner from '../../images/banners/escape-the-estate-banner.png';
import escapeTheEstateScreenshot01 from '../../images/screenshots/escape-the-estate-screenshot-01.png';
import escapeTheEstateScreenshot02 from '../../images/screenshots/escape-the-estate-screenshot-02.png';
import escapeTheEstateScreenshot03 from '../../images/screenshots/escape-the-estate-screenshot-03.png';
import escapeTheEstateScreenshot04 from '../../images/screenshots/escape-the-estate-screenshot-04.png';
import escapeTheEstateScreenshot05 from '../../images/screenshots/escape-the-estate-screenshot-05.png';
import escapeTheEstateScreenshot06 from '../../images/screenshots/escape-the-estate-screenshot-06.png';
import escapeTheEstateScreenshot07 from '../../images/screenshots/escape-the-estate-screenshot-07.png';

const EscapeTheEstate = () => (
  <Project>
    <section>
      <h1>Escape the Estate</h1>
    </section>
    <section>
      <p>
        Escape the Estate is a point-and-click puzzle &quot;escape&quot; game.
        Your life is on the line! Kane is at it again, and this time he is
        angry! Do you have what it takes to prevent his cruel intentions? Put
        your puzzle-solving skills to the test in the sequel to{' '}
        <a href="/games/escape-the-basement">Escape the Basement</a>!
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> Lead Programmer, Producer, Designer, Artist
        <br />
        <em>TECH —</em> Adobe Flash, ActionScript 3.0
        <br />
        <em>DATE —</em> August 2013
      </p>
    </section>
    <section>
      <Button
        external
        link="https://www.newgrounds.com/portal/view/622915"
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
      <img alt="" width="100%" src={escapeTheEstateBanner} />
      <ImageGallery
        images={[
          escapeTheEstateScreenshot01,
          escapeTheEstateScreenshot02,
          escapeTheEstateScreenshot03,
          escapeTheEstateScreenshot04,
          escapeTheEstateScreenshot05,
          escapeTheEstateScreenshot06,
          escapeTheEstateScreenshot07,
        ]}
      />
    </section>
  </Project>
);

export default EscapeTheEstate;
