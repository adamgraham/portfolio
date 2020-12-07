import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import escapeTheBasementBanner from '../../images/banners/escape-the-basement-banner.png';
import escapeTheBasementScreenshot01 from '../../images/screenshots/escape-the-basement-screenshot-01.png';
import escapeTheBasementScreenshot02 from '../../images/screenshots/escape-the-basement-screenshot-02.png';
import escapeTheBasementScreenshot03 from '../../images/screenshots/escape-the-basement-screenshot-03.png';
import escapeTheBasementScreenshot04 from '../../images/screenshots/escape-the-basement-screenshot-04.png';
import escapeTheBasementScreenshot05 from '../../images/screenshots/escape-the-basement-screenshot-05.png';
import escapeTheBasementScreenshot06 from '../../images/screenshots/escape-the-basement-screenshot-06.png';

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
    </section>
    <section className="height-1em" />
    <section>
      <p className="body-xl">
        <b>Media</b>
      </p>
      <img alt="" width="100%" src={escapeTheBasementBanner} />
      <ImageGallery
        images={[
          escapeTheBasementScreenshot01,
          escapeTheBasementScreenshot02,
          escapeTheBasementScreenshot03,
          escapeTheBasementScreenshot04,
          escapeTheBasementScreenshot05,
          escapeTheBasementScreenshot06,
        ]}
      />
    </section>
  </Project>
);

export default EscapeTheBasement;
