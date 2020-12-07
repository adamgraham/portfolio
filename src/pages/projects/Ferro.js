import { ImageGallery, Link } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import ferroScreenshot01 from '../../images/screenshots/ferro-screenshot-01.png';
import ferroScreenshot02 from '../../images/screenshots/ferro-screenshot-02.png';

const Ferro = () => (
  <Project>
    <section>
      <h1>Ferro</h1>
    </section>
    <section>
      <p>
        Inspired by ferrofluids, Ferro is a unique virtual reality experience
        created by{' '}
        <Link external href="http://pixeldinosaur.com/">
          Michael Louden
        </Link>{' '}
        and myself. As a scientist who has discovered a potential gateway into
        another universe, your job is to channel it to the right frequency.
        Alongside virtual reality technologies, players use a midi keyboard as
        the primary input device to initiate the machines and tune the portal.
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
      <ImageGallery
        columns={1}
        images={[ferroScreenshot01, ferroScreenshot02]}
      />
    </section>
  </Project>
);

export default Ferro;
