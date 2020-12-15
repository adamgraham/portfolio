import {
  EmbeddedYouTube,
  ImageGallery,
  Link,
} from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import projectDreamScreenshot01 from '../../images/screenshots/project-dream-screenshot-01.png';
import projectDreamScreenshot02 from '../../images/screenshots/project-dream-screenshot-02.png';
import projectDreamScreenshot03 from '../../images/screenshots/project-dream-screenshot-03.png';
import projectDreamScreenshot04 from '../../images/screenshots/project-dream-screenshot-04.png';
import theWanderingDarkScreenshot01 from '../../images/screenshots/the-wandering-dark-screenshot-01.png';
import theWanderingDarkScreenshot02 from '../../images/screenshots/the-wandering-dark-screenshot-02.png';
import theWanderingDarkScreenshot03 from '../../images/screenshots/the-wandering-dark-screenshot-03.png';
import theWanderingDarkScreenshot04 from '../../images/screenshots/the-wandering-dark-screenshot-04.png';
import theWanderingDarkScreenshot05 from '../../images/screenshots/the-wandering-dark-screenshot-05.png';
import theWanderingDarkScreenshot06 from '../../images/screenshots/the-wandering-dark-screenshot-06.png';
import theWanderingDarkScreenshot07 from '../../images/screenshots/the-wandering-dark-screenshot-07.png';

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
        grows. I developed the game alongside Michael Louden for my senior
        capstone project before graduating.
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
        <Link
          external
          href="https://drive.google.com/open?id=0BzUWUmwjB6l2ZW00Z3poTXE3UVU"
        >
          <b>Beta</b>
        </Link>
      </p>
      <EmbeddedYouTube
        id="beta-playthrough-video"
        title="Beta Playthrough"
        origin="http://adamgraham.io"
        videoId="JtCg7oB67wY"
      />
      <ImageGallery
        images={[
          theWanderingDarkScreenshot01,
          theWanderingDarkScreenshot02,
          theWanderingDarkScreenshot03,
          theWanderingDarkScreenshot04,
          theWanderingDarkScreenshot05,
          theWanderingDarkScreenshot06,
          theWanderingDarkScreenshot07,
        ]}
      />
    </section>
    <section>
      <p className="body-lg">
        <Link
          external
          href="https://drive.google.com/open?id=0BzUWUmwjB6l2QUd2RTNOYnI3TWs"
        >
          <b>Alpha</b>
        </Link>
      </p>
      <EmbeddedYouTube
        id="alpha-playthrough-video"
        title="Alpha Playthrough"
        origin="http://adamgraham.io"
        videoId="EF8ywk3Qq48"
      />
      <ImageGallery
        images={[
          projectDreamScreenshot01,
          projectDreamScreenshot02,
          projectDreamScreenshot03,
          projectDreamScreenshot04,
        ]}
      />
    </section>
  </Project>
);

export default TheWanderingDark;
