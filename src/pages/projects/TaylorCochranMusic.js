import { Link } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot from '../../images/screenshots/taylor-cochran-music-screenshot-spread.png';

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
        I designed and managed Taylor’s website from late 2013 to mid 2014. The
        website was launched alongside the success of Taylor&apos;s debut EP
        Kickstarter campaign, for which I also helped produce the promo video.
      </p>
    </section>
    <section>
      <p>
        <Link external href="http://taylorcochranmusic.adamgraham.io/">
          <b>Website</b>
        </Link>
      </p>
      <Link
        className="image-link"
        external
        href="http://taylorcochranmusic.adamgraham.io/"
        undecorated
      >
        <img alt="Taylor Cochran Music Website" src={screenshot} />
      </Link>
    </section>
  </Project>
);

export default TaylorCochranMusic;
