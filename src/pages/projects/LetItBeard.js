import { Button } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot from '../../images/screenshots/let-it-beard-screenshot.png';

const LetItBeard = () => (
  <Project>
    <section>
      <h1>Let It Beard</h1>
    </section>
    <section>
      <p>
        Let it Beard is an animated short film that follows the misadventures of
        an enigmatic religious family known simply as &quot;The Cult&quot;. The
        Captain and his bevy of devoted followers aim for truth, inner peace,
        and run various entrepreneurial endeavors on their path to transcendent
        enlightenment.
      </p>
      <p>
        The Let It Beard website is a simple one-page design to help promote the
        animated short film. A random full-screen background is displayed upon
        visit alongside various idle animations. Visit multiple times to see
        different designs.
      </p>
    </section>
    <section>
      <Button external link="http://letitbeard.adamgraham.io/" size="small">
        View Website
      </Button>
    </section>
    <section>
      <img alt="Let It Beard Website" src={screenshot} />
    </section>
  </Project>
);

export default LetItBeard;
