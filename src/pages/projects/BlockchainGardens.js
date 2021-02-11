import { EmbeddedYouTube, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/blockchain-gardens-screenshot-01.jpg';
import screenshot02 from '../../images/screenshots/blockchain-gardens-screenshot-02.jpg';
import screenshot03 from '../../images/screenshots/blockchain-gardens-screenshot-03.jpg';
import screenshot04 from '../../images/screenshots/blockchain-gardens-screenshot-04.jpg';

const BlockchainGardens = () => (
  <Project>
    <section>
      <h1>Blockchain Gardens</h1>
    </section>
    <section>
      <p>
        The blockchain is as complicated, misunderstood and powerfully
        compelling as any emerging technology that currently exists. It’s no
        longer sufficient to merely explain the technical nuances and
        intricacies, the time has come for you to experience them. Built on the
        Ethereum backbone, Solstice FWD attendees participated in one of the
        first human blockchain experiments in history. Interactions and
        exchanges were recorded on the FWD ledger and the &quot;future of trust
        in a trustless world&quot; was on full display.
      </p>
      <p>
        Blockchain Gardens is a real-time 3D visualization of a private Ethereum
        blockchain instance displayed at Solstice’s digital innovation summit.
        Attendees at the event were tracked throughout the space by an RFID in
        their badge. As they checked out the various demos at the event, these
        moments and experiences were recorded on the blockchain. We wanted to
        explore what it would be like to put humans at the center of this
        emerging technology.
      </p>
    </section>
    <section>
      <p className="font-sm">
        <em>ROLE —</em> Sole Front-end Developer, 3D Visualization Designer
        <br />
        <em>TECH —</em> Unity, Ethereum, IoT RFID Readers, Google Firebase, PCF,
        AWS
        <br />
        <em>DATE —</em> June 2018
      </p>
    </section>
    <section>
      <p className="font-lg">
        <b>Media</b>
      </p>
      <ImageGallery
        minWidth={128}
        images={[screenshot01, screenshot02, screenshot03, screenshot04]}
      />
      <EmbeddedYouTube
        className="margin-bottom-lg"
        id="data-visualization-video"
        title="Data Visualization"
        origin="http://adamgraham.io"
        videoId="R-OoF7NQWOI"
      />
      <EmbeddedYouTube
        className="margin-bottom-lg"
        id="solstice-labs-video"
        title="Solstice Labs"
        origin="http://adamgraham.io"
        videoId="s7MI_uzRdMI"
      />
      <EmbeddedYouTube
        id="fwd-recap-video"
        title="FWD Recap"
        origin="http://adamgraham.io"
        videoId="Ng0IEkbdkHc"
      />
    </section>
  </Project>
);

export default BlockchainGardens;
