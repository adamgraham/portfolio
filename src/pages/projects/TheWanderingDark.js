import { ImageGallery, Link } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import projectDreamScreenshot01 from '../../images/screenshots/project-dream-screenshot-01.png';
import projectDreamScreenshot02 from '../../images/screenshots/project-dream-screenshot-02.png';
import projectDreamScreenshot03 from '../../images/screenshots/project-dream-screenshot-03.png';
import projectDreamThumbnail from '../../images/thumbnails/project-dream-thumbnail.png';
import theWanderingDarkScreenshot01 from '../../images/screenshots/the-wandering-dark-screenshot-01.png';
import theWanderingDarkScreenshot02 from '../../images/screenshots/the-wandering-dark-screenshot-02.png';
import theWanderingDarkScreenshot03 from '../../images/screenshots/the-wandering-dark-screenshot-03.png';
import theWanderingDarkScreenshot04 from '../../images/screenshots/the-wandering-dark-screenshot-04.png';
import theWanderingDarkScreenshot05 from '../../images/screenshots/the-wandering-dark-screenshot-05.png';
import theWanderingDarkScreenshot06 from '../../images/screenshots/the-wandering-dark-screenshot-06.png';
import theWanderingDarkThumbnail from '../../images/thumbnails/the-wandering-dark-thumbnail.png';

const TheWanderingDark = () => (
  <Project>
    <section>
      <h1>The Wandering Dark</h1>
    </section>
    <section>
      <p>
        The Wandering Dark is a unique indie adventure game that takes you
        through a girl&apos;s dreams and nightmares as she deals with her
        struggles and fears in life. Battle through these nightmares, explore
        her different dream worlds, and fight for survival as she matures and
        grows. I developed the game alongside{' '}
        <Link external href="http://pixeldinosaur.com/">
          Michael Louden
        </Link>{' '}
        for my senior capstone project before graduating.
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> Lead Programmer, Co-Designer
        <br />
        <em>TECH —</em> Unity, C#
        <br />
        <em>DATE —</em> June 2015
      </p>
    </section>
    <section>
      <p className="body-lg">
        <b>Beta</b>
      </p>
      <Link
        className="image-link"
        external
        href="https://drive.google.com/open?id=0BzUWUmwjB6l2ZW00Z3poTXE3UVU"
        undecorated
      >
        <img alt="Beta Download" src={theWanderingDarkThumbnail} />
      </Link>
      <ImageGallery
        images={[
          theWanderingDarkScreenshot01,
          theWanderingDarkScreenshot02,
          theWanderingDarkScreenshot03,
          theWanderingDarkScreenshot04,
          theWanderingDarkScreenshot05,
          theWanderingDarkScreenshot06,
        ]}
      />
    </section>
    <section>
      <p className="body-lg">
        <b>Alpha</b>
      </p>
      <Link
        className="image-link"
        external
        href="https://drive.google.com/open?id=0BzUWUmwjB6l2QUd2RTNOYnI3TWs"
        undecorated
      >
        <img alt="Alpha Download" src={projectDreamThumbnail}></img>
      </Link>
      <ImageGallery
        images={[
          projectDreamScreenshot01,
          projectDreamScreenshot02,
          projectDreamScreenshot03,
        ]}
      />
    </section>
  </Project>
);

export default TheWanderingDark;
