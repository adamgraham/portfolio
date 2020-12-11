import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import banner from '../../images/banners/escape-the-basement-banner.png';
import screenshot01 from '../../images/screenshots/escape-the-basement-screenshot-01.png';
import screenshot02 from '../../images/screenshots/escape-the-basement-screenshot-02.png';
import screenshot03 from '../../images/screenshots/escape-the-basement-screenshot-03.png';
import screenshot04 from '../../images/screenshots/escape-the-basement-screenshot-04.png';
import screenshot05 from '../../images/screenshots/escape-the-basement-screenshot-05.png';
import screenshot06 from '../../images/screenshots/escape-the-basement-screenshot-06.png';

const EscapeTheBasement = () => (
  <Project>
    <section>
      <h1>Escape the Basement</h1>
    </section>
    <section>
      <p>
        Escape the Basement is a point-and-click &quot;escape&quot; puzzle game
        with several uniquely drawn scenes. You of all people were chosen to
        die. A cruel man named Kane has locked you in his basement with no
        thought of letting you free. Can you outwit his evil plan and escape?
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> Lead Programmer, Producer, Designer
        <br />
        <em>TECH —</em> Adobe Flash, ActionScript 3.0
        <br />
        <em>DATE —</em> August 2012
      </p>
    </section>
    <section>
      <Button
        external
        link="https://www.newgrounds.com/portal/view/601869"
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
      <img alt="Escape the Basement Banner" width="100%" src={banner} />
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

export default EscapeTheBasement;
