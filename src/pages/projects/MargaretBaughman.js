import { Button } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot from '../../images/screenshots/margaret-baughman-screenshot-spread.png';

const MargaretBaughman = () => (
  <Project>
    <section>
      <h1>Margaret Baughman</h1>
    </section>
    <section>
      <p>
        Director, choreographer, and empathetic human, Margaret Baughman is
        enchanted by a world of contradictions that allows her to shake up
        perspectives through theatre, advocacy, and impeccable organization.
        Adam designed Margaret&apos;s portfolio to help showcase her work.
      </p>
    </section>
    <section>
      <Button
        external
        link="http://margaretbaughman.adamgraham.io/"
        size="small"
      >
        View Website
      </Button>
    </section>
    <section>
      <img
        alt="Margaret Baughman Website"
        className="shadow-md"
        src={screenshot}
      />
    </section>
  </Project>
);

export default MargaretBaughman;
