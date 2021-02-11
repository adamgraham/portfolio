import {
  EmbeddedYouTube,
  ImageGallery,
  Link,
} from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import projectDreamScreenshot01 from '../../images/screenshots/project-dream-screenshot-01.jpg';
import projectDreamScreenshot02 from '../../images/screenshots/project-dream-screenshot-02.jpg';
import projectDreamScreenshot03 from '../../images/screenshots/project-dream-screenshot-03.jpg';
import projectDreamScreenshot04 from '../../images/screenshots/project-dream-screenshot-04.jpg';
import theWanderingDarkScreenshot01 from '../../images/screenshots/the-wandering-dark-screenshot-01.jpg';
import theWanderingDarkScreenshot02 from '../../images/screenshots/the-wandering-dark-screenshot-02.jpg';
import theWanderingDarkScreenshot03 from '../../images/screenshots/the-wandering-dark-screenshot-03.jpg';
import theWanderingDarkScreenshot04 from '../../images/screenshots/the-wandering-dark-screenshot-04.jpg';
import theWanderingDarkScreenshot05 from '../../images/screenshots/the-wandering-dark-screenshot-05.jpg';
import theWanderingDarkScreenshot06 from '../../images/screenshots/the-wandering-dark-screenshot-06.jpg';
import theWanderingDarkScreenshot07 from '../../images/screenshots/the-wandering-dark-screenshot-07.jpg';

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
        grows. Adam developed the game alongside Michael Louden for his senior
        capstone project before graduating.
      </p>
    </section>
    <section>
      <p className="font-sm">
        <em>ROLE —</em> Lead Programmer, Co-Designer
        <br />
        <em>TECH —</em> Unity, C#
        <br />
        <em>DATE —</em> June 2015
      </p>
    </section>
    <section>
      <p className="font-lg">
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
        minWidth={128}
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
      <p className="font-lg">
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
        minWidth={128}
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
