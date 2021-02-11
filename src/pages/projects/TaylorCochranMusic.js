import { Button } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot from '../../images/screenshots/taylor-cochran-music-screenshot-spread.jpg';

const TaylorCochranMusic = () => (
  <Project>
    <section>
      <h1>Taylor Cochran Music</h1>
    </section>
    <section>
      <p>
        Taylor Cochran is a singer/songwriter from Nashville, Tennessee who
        pursued his songwriting career in early 2013 by gaining experience
        playing in local bars, venues, and with his church. Through his music,
        he aspires to send a message of joy, hope, and love.
      </p>
      <p>
        Adam designed and managed Taylor’s website from late 2013 to mid 2014.
        The website was launched alongside the success of Taylor&apos;s debut EP
        Kickstarter campaign for which he also helped produce the promo video.
      </p>
    </section>
    <section>
      <Button
        external
        link="http://taylorcochranmusic.adamgraham.io/"
        size="small"
      >
        View Website
      </Button>
    </section>
    <section>
      <img alt="Taylor Cochran Music Website" src={screenshot} />
    </section>
  </Project>
);

export default TaylorCochranMusic;
