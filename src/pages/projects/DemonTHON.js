import { Button } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot from '../../images/screenshots/demonthon-screenshot-spread.png';

const DemonTHON = () => (
  <Project>
    <section>
      <h1>DemonTHON</h1>
    </section>
    <section>
      <p>
        DemonTHON is a year-long fundraising organization benefiting Ann &amp;
        Robert H. Lurie Children&apos;s Hospital of Chicago that culminates in a
        24-hour Dance Marathon.
      </p>
      <p>
        As the Director of Technology, Adam designed and managed the
        organization&apos;s website from June 2014 to May 2016. The site was
        awarded &quot;Best Website&quot; by Children&apos;s Miracle Network
        Hospitals for the 2014-15 Dance Marathon year.
      </p>
    </section>
    <section>
      <Button external link="http://demonthon.adamgraham.io/" size="small">
        View Website
      </Button>
    </section>
    <section>
      <img alt="DemonTHON Website" src={screenshot} />
    </section>
  </Project>
);

export default DemonTHON;
