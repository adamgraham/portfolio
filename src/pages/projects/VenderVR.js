import { EmbeddedYouTube, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/vender-vr-screenshot-01.png';
import screenshot02 from '../../images/screenshots/vender-vr-screenshot-02.png';
import screenshot03 from '../../images/screenshots/vender-vr-screenshot-03.png';

const VenderVR = () => (
  <Project>
    <section>
      <h1>Vender VR</h1>
    </section>
    <section>
      <p>
        Vender is an IoT connected vending machine that started as an R&amp;D
        project at Solstice before Adam joined the team. Less than a month
        before Solstice&apos;s digital innovation summit – Solstice FWD – Vender
        was expanded to the virtual world. Adam took on the project head first
        and developed the first ever virtual reality vending machine experience.
      </p>
      <p>
        A user vends the drink of their choice by putting their hand up to one
        of the drink taps and waiting for the cup to be filled. Once filled, a
        service call is made to the Raspberry Pi hooked up to the vending
        machine, which then vends the user&apos;s drink. Drink choices are
        populated from a Hybris Platform which stores and manages all of
        Vender&apos;s data.
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>ROLE —</em> Sole VR / Unity Developer
        <br />
        <em>TECH —</em> Unity, C#, Oculus Rift, Leap Motion, Raspberry Pi,
        Hybris Platform
        <br />
        <em>DATE —</em> September 2015
      </p>
    </section>
    <section>
      <p className="body-lg">
        <b>Media</b>
      </p>
      <ImageGallery images={[screenshot01, screenshot02, screenshot03]} />
      <EmbeddedYouTube
        className="margin-bottom-lg"
        id="solstice-labs-video"
        title="Solstice Labs"
        origin="http://adamgraham.io"
        videoId="aBnGN1j3OMM"
      />
      <EmbeddedYouTube
        className="margin-bottom-lg"
        id="experience-demo-video"
        title="Experience Demo"
        origin="http://adamgraham.io"
        videoId="Y-1ZXwGhHM8"
      />
      <EmbeddedYouTube
        id="fwd-recap-video"
        title="FWD Recap"
        origin="http://adamgraham.io"
        videoId="nHNOTxh7Rdg"
      />
    </section>
  </Project>
);

export default VenderVR;
