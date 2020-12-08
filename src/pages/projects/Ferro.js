import { EmbeddedYouTube, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/ferro-screenshot-01.png';
import screenshot02 from '../../images/screenshots/ferro-screenshot-02.png';

const Ferro = () => (
  <Project>
    <section>
      <h1>Ferro</h1>
    </section>
    <section>
      <p>
        Inspired by ferrofluids, Ferro is a unique virtual reality experience
        created by Michael Louden and myself. As a scientist who has discovered
        a potential gateway into another universe, your job is to channel it to
        the right frequency. Alongside virtual reality technologies, players use
        a midi keyboard as the primary input device to initiate the machines and
        tune the portal.
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> I/O Programmer
        <br />
        <em>TECH —</em> Unity, C#, Oculus Rift, Midi Keyboard
        <br />
        <em>DATE —</em> April 2015
      </p>
    </section>
    <section>
      <p className="body-lg">
        <b>Media</b>
      </p>
      <ImageGallery columns={1} images={[screenshot01, screenshot02]} />
      <EmbeddedYouTube
        origin="http://adamgraham.io"
        videoId="nybrBOkmNkM"
        width="100%"
        height="468"
      />
    </section>
  </Project>
);

export default Ferro;
