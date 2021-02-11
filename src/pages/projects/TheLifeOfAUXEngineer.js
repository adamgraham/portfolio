import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/the-life-of-a-ux-engineer-screenshot-01.jpg';
import screenshot02 from '../../images/screenshots/the-life-of-a-ux-engineer-screenshot-02.jpg';
import screenshot03 from '../../images/screenshots/the-life-of-a-ux-engineer-screenshot-03.jpg';
import screenshot04 from '../../images/screenshots/the-life-of-a-ux-engineer-screenshot-04.jpg';
import screenshot05 from '../../images/screenshots/the-life-of-a-ux-engineer-screenshot-05.jpg';
import screenshot06 from '../../images/screenshots/the-life-of-a-ux-engineer-screenshot-06.jpg';
import screenshot07 from '../../images/screenshots/the-life-of-a-ux-engineer-screenshot-07.jpg';
import screenshot08 from '../../images/screenshots/the-life-of-a-ux-engineer-screenshot-08.jpg';

const TheLifeOfAUXEngineer = () => (
  <Project>
    <section>
      <h1>The Life of a UX Engineer</h1>
    </section>
    <section>
      <p className="font-sm">
        <em>August 2020</em>
      </p>
      <p>
        What is a UX Engineer? This specialty role sits on a cross-functional
        design team and helps facilitate collaboration between designers and
        engineers. This presentation explores the relationship between designers
        and engineers and how a UX Engineer uses a particular skillset to solve
        UX problems.
      </p>
    </section>
    <section>
      <ImageGallery
        minWidth={128}
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
        link="https://drive.google.com/open?id=1j_bFqhJ2f6z17afxccK0hWlX6mMVkFGj"
        size="small"
      >
        View Deck
      </Button>
    </section>
  </Project>
);

export default TheLifeOfAUXEngineer;
