import { Link } from '@zigurous/react-components';
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
      <p className="body-lg">
        <Link external href="http://margaretbaughman.adamgraham.io/">
          <b>Website</b>
        </Link>
      </p>
      <Link
        className="image-link"
        external
        href="http://margaretbaughman.adamgraham.io/"
        undecorated
      >
        <img
          alt="Margaret Baughman Website"
          className="box-shadow-3"
          src={screenshot}
        />
      </Link>
    </section>
  </Project>
);

export default MargaretBaughman;
