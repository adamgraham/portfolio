import { Button } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot from '../../images/screenshots/be-super-screenshot-spread.jpg';

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
      <Button external link="http://besuper.adamgraham.io/" size="small">
        View Website
      </Button>
    </section>
    <section>
      <img alt="Be Super Website" className="shadow-md" src={screenshot} />
    </section>
  </Project>
);

export default BeSuper;
