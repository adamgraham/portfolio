import { Link } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot from '../../images/screenshots/ashantis-jones-screenshot-spread.png';

const AshantisJones = () => (
  <Project>
    <section>
      <h1>Ashantis Jones</h1>
    </section>
    <section>
      <p>
        Ashantis is a native Clevelander that entertains and creates memorable
        events through detail oriented design and calculated execution. Adam
        designed Ashantis&apos;s portfolio to assist in her job hunt as a
        graduate of the BFA Theatre Management at DePaul University looking for
        opportunities in the event management space.
      </p>
    </section>
    <section>
      <p className="body-lg">
        <Link external href="http://ashantisjones.adamgraham.io/">
          <b>Website</b>
        </Link>
      </p>
      <Link
        className="image-link"
        external
        href="http://ashantisjones.adamgraham.io/"
        undecorated
      >
        <img
          alt="Ashantis Jones Website"
          className="box-shadow-2"
          src={screenshot}
        />
      </Link>
    </section>
  </Project>
);

export default AshantisJones;
