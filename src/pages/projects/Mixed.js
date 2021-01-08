import {
  Button,
  EmbeddedYouTube,
  ImageGallery,
} from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/mixed-screenshot-01.png';
import screenshot02 from '../../images/screenshots/mixed-screenshot-02.png';

const Mixed = () => (
  <Project>
    <section>
      <h1>Mixed</h1>
    </section>
    <section>
      <p>
        Mixed is an interactive, avant-garde experiment touching on the topics
        of diversity, racism, and interracial relationships. Navigate around in
        an abstract space, mixing with different colors to create other
        AI-controlled players. Explore the effects of cultural diversity and see
        how diversity is (im)balanced in the world. What impact can you leave on
        the world?
      </p>
    </section>
    <section>
      <p className="font-sm">
        <em>TECH —</em> Adobe Flash, ActionScript 3.0
        <br />
        <em>DATE —</em> February 2015
      </p>
    </section>
    <section>
      <Button
        external
        link="https://drive.google.com/open?id=1TJlHyaSILvaviyt8g0tODV9eBN7iC0HJ"
        size="small"
      >
        Download
      </Button>
      <Button
        className="margin-left-lg"
        external
        link="https://github.com/adamgraham/mixed"
        size="small"
      >
        Source Code
      </Button>
      <div className="height-1em" />
    </section>
    <section>
      <p className="font-lg">
        <b>Media</b>
      </p>
      <ImageGallery
        columns={1}
        images={[
          { className: 'shadow-md', src: screenshot01 },
          { className: 'shadow-md', src: screenshot02 },
        ]}
      />
      <EmbeddedYouTube
        className="shadow-md"
        origin="http://adamgraham.io"
        videoId="aMqgmqNu9Qw"
      />
    </section>
  </Project>
);

export default Mixed;
