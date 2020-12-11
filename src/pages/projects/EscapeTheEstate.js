import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../components';
import banner from '../../images/banners/escape-the-estate-banner.png';
import screenshot01 from '../../images/screenshots/escape-the-estate-screenshot-01.png';
import screenshot02 from '../../images/screenshots/escape-the-estate-screenshot-02.png';
import screenshot03 from '../../images/screenshots/escape-the-estate-screenshot-03.png';
import screenshot04 from '../../images/screenshots/escape-the-estate-screenshot-04.png';
import screenshot05 from '../../images/screenshots/escape-the-estate-screenshot-05.png';
import screenshot06 from '../../images/screenshots/escape-the-estate-screenshot-06.png';
import screenshot07 from '../../images/screenshots/escape-the-estate-screenshot-07.png';

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
        <Link to="/games/escape-the-basement">Escape the Basement</Link>!
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
      <div className="height-1em" />
    </section>
    <section>
      <p className="body-lg">
        <b>Media</b>
      </p>
      <img alt="Escape the Estate Banner" width="100%" src={banner} />
      <ImageGallery
        images={[
          screenshot01,
          screenshot02,
          screenshot03,
          screenshot04,
          screenshot05,
          screenshot06,
          screenshot07,
        ]}
      />
    </section>
  </Project>
);

export default EscapeTheEstate;
