import { Button } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot from '../../images/screenshots/squishem-website-screenshot-spread.png';

const Squishem = () => (
  <Project>
    <section>
      <h1>Squish-em!</h1>
    </section>
    <section>
      <p>
        Squish-em! is an arcade game with ever so squishy moles just asking for
        a tap on the head! It is a simple whack-a-mole re-creation designed for
        highscore-play. Squish your way to the top of the leaderboards, earn
        achievements along the way, and brag to your friends once you beat their
        best score! Do you have what it takes to become the best squisher
        around?
      </p>
      <p>
        The Squish-em! website is a one-page, artistic cover designed to promote
        the game and direct users to download the mobile app.
      </p>
    </section>
    <section>
      <Button external link="http://www.squishem.com/" size="small">
        Visit Website
      </Button>
    </section>
    <section>
      <img alt="Squish-em! Website" src={screenshot} />
    </section>
  </Project>
);

export default Squishem;
