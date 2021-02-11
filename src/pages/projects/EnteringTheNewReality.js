import { Button, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/entering-the-new-reality-screenshot-01.jpg';
import screenshot02 from '../../images/screenshots/entering-the-new-reality-screenshot-02.jpg';
import screenshot03 from '../../images/screenshots/entering-the-new-reality-screenshot-03.jpg';
import screenshot04 from '../../images/screenshots/entering-the-new-reality-screenshot-04.jpg';
import screenshot05 from '../../images/screenshots/entering-the-new-reality-screenshot-05.jpg';
import screenshot06 from '../../images/screenshots/entering-the-new-reality-screenshot-06.jpg';
import screenshot07 from '../../images/screenshots/entering-the-new-reality-screenshot-07.jpg';
import screenshot08 from '../../images/screenshots/entering-the-new-reality-screenshot-08.jpg';

const EnteringTheNewReality = () => (
  <Project>
    <section>
      <h1>Entering The New &quot;Reality&quot;</h1>
    </section>
    <section>
      <p className="font-sm">
        <em>May 2016</em>
      </p>
      <p>
        If you were at or watched Facebook’s F8 conference and witnessed their
        10 year roadmap, you may have noticed how the company plans to continue
        to invest in not only Virtual Reality with its Oculus, but also into
        augmented reality as well. They even stated that future headsets would
        be the size of a normal pair of glasses and would be able to not only
        handle AR, but VR as well all in one platform. Considering the
        social-networking leader’s Q1 revenue jumped 52% year over year to $5.38
        billion, topping the consensus estimate of $5.26 billion. It would be
        safe to assume that they have a good idea of where the market is
        heading.
      </p>
      <p>
        It is nothing new that these technologies are becoming more and more
        prominent and focused on by several big name players such as Samsung,
        HTC, Google, and Microsoft. Rumors have been flying around about a
        possible Google Headset in the works with the release of Android N’s
        second developer preview where there are references to virtual reality
        capabilities. Furthermore, &quot;VR&quot; is an entire content track at
        Google I/O this year, with seven sessions dedicated to virtual or
        augmented reality, based on the schedule posted by Google.
      </p>
      <p>
        So ok we established that this is important and worth paying attention
        to. However, where are we exactly with these reality technologies? Is it
        at a mature state at this point where the barrier entry for producing a
        successful application have been reduced that any developer can produce
        a VR or AR application? What’s the difference between VR and AR? What
        does it take to build one of these new &quot;reality&quot; applications?
        What problems will they solve? What industries will it disrupt and who
        will be building these applications? Will it only be important to the
        gaming industry? Are we scratching the surface with these platforms?
        What can we predict these platforms will become in the near future?
      </p>
    </section>
    <section>
      <ImageGallery
        minWidth={128}
        images={[
          screenshot01,
          screenshot02,
          screenshot03,
          screenshot04,
          screenshot05,
          screenshot06,
          screenshot07,
          screenshot08,
        ]}
      />
    </section>
    <section>
      <Button
        external
        link="https://drive.google.com/open?id=0BzUWUmwjB6l2X0RCeERwRm9hejA"
        size="small"
      >
        View Deck
      </Button>
    </section>
  </Project>
);

export default EnteringTheNewReality;
