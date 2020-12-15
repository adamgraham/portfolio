import {
  Button,
  EmbeddedYouTube,
  ImageGallery,
} from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/hexahedroniks-screenshot-01.png';
import screenshot02 from '../../images/screenshots/hexahedroniks-screenshot-02.png';
import screenshot03 from '../../images/screenshots/hexahedroniks-screenshot-03.png';

const Hexahedroniks = () => (
  <Project>
    <section>
      <h1>Hexahedroniks</h1>
    </section>
    <section>
      <p>
        Hexahedroniks is a virtual reality, puzzle-like toy inspired by Rubik
        cubes. Paint the cube various colors by looking around and shooting
        colored orbs at the many faces. Avoid turning the cube all black while
        enjoying the calming experience of this art piece.
      </p>
    </section>
    <section>
      <p className="body-sm">
        <em>TECH —</em> Unity, C#, Oculus Rift
        <br />
        <em>DATE —</em> June 2015
      </p>
    </section>
    <section>
      <Button
        external
        link="https://drive.google.com/drive/folders/1VrMFBTO4-DQbiazHRnyDYpN_LQCaGETv?usp=sharing"
        size="small"
      >
        Download
      </Button>
      <Button
        className="margin-top-lg"
        external
        link="https://github.com/adamgraham/hexahedroniks"
        size="small"
      >
        Source Code
      </Button>
      <div className="height-1em" />
    </section>
    <section>
      <p className="body-lg">
        <b>Media</b>
      </p>
      <ImageGallery
        columns={1}
        images={[screenshot01, screenshot02, screenshot03]}
      />
      <EmbeddedYouTube origin="http://adamgraham.io" videoId="_QMCs2V_IA4" />
    </section>
  </Project>
);

export default Hexahedroniks;
