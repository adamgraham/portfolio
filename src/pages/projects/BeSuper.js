import { Link } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot from '../../images/screenshots/be-super-screenshot-spread.png';

const BeSuper = () => (
  <Project>
    <section>
      <h1>Be Super</h1>
    </section>
    <section>
      <p>
        Be Super strives to use comic book characters as educational tools to
        understand social justice issues. A movement calling for everyone to be
        the hero within. Adam designed Be Super&apos;s first website to help
        promote the cause.
      </p>
    </section>
    <section>
      <p className="body-lg">
        <Link external href="http://besuper.adamgraham.io/">
          <b>Website</b>
        </Link>
      </p>
      <Link
        className="image-link"
        external
        href="http://besuper.adamgraham.io/"
        undecorated
      >
        <img alt="Be Super Website" className="box-shadow-3" src={screenshot} />
      </Link>
    </section>
  </Project>
);

export default BeSuper;
