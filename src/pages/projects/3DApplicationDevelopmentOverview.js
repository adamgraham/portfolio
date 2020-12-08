import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/3d-application-development-overview-screenshot-01.png';
import screenshot02 from '../../images/screenshots/3d-application-development-overview-screenshot-02.png';
import screenshot03 from '../../images/screenshots/3d-application-development-overview-screenshot-03.png';
import screenshot04 from '../../images/screenshots/3d-application-development-overview-screenshot-04.png';
import screenshot05 from '../../images/screenshots/3d-application-development-overview-screenshot-05.png';
import screenshot06 from '../../images/screenshots/3d-application-development-overview-screenshot-06.png';
import screenshot07 from '../../images/screenshots/3d-application-development-overview-screenshot-07.png';
import screenshot08 from '../../images/screenshots/3d-application-development-overview-screenshot-08.png';

const ThreeDApplicationDevelopmentOverview = () => (
  <Project>
    <section>
      <h1>3D Application Development Overview</h1>
    </section>
    <section>
      <p className="body-sm">
        <em>May 2016</em>
      </p>
      <p>
        This presentation teaches concepts – ranging from art to technical – to
        developers who are new to 3D application development. It was designed to
        be a high-level presentation, with quick definitions, that give creators
        a taste of the information they will potentially need to know when
        developing a 3D application. The presentation serves as a starting point
        to which creators can continue to grow their foundation of knowledge.
        The deck is grounded in the Unity engine to provide real, applicable
        examples of the concepts. I presented this deck at Solstice to around 30
        developers who were interested in learning more.
      </p>
    </section>
    <section>
      <ImageGallery
        images={[
          screenshot01,
          screenshot02,
          screenshot03,
          screenshot04,
          screenshot05,
          screenshot06,
          screenshot07,
          screenshot08,
        ]}
      />
    </section>
    <section>
      <Button
        external
        link="https://drive.google.com/open?id=0BzUWUmwjB6l2MnYzWk00VzZWY1k"
        size="small"
      >
        View Deck
      </Button>
    </section>
  </Project>
);

export default ThreeDApplicationDevelopmentOverview;
