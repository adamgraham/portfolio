import { EmbeddedYouTube, ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot01 from '../../images/screenshots/hackathon-for-wildlife-screenshot-01.png';
import screenshot02 from '../../images/screenshots/hackathon-for-wildlife-screenshot-02.png';

const HackathonForWildlife = () => (
  <Project>
    <section>
      <h1>Hackathon for Wildlife</h1>
    </section>
    <section>
      <p>
        An empathetic game created in 24 hours that invokes the emotions an
        elephant feels while being hunted by a deadly poacher. By putting the
        player in the role of the elephant, it creates a deeper connection
        between the human and the animal.
      </p>
      <p>
        &quot;On November 14th and 15th over 60 people came together to explore
        and develop innovative ways to engage worldwide audiences with wild
        animals. The hackathon teams created amazing concepts through a
        combination of technologies that include GPS hardware, data, games, and
        social media to create a stronger, more vested connection between people
        and animals.&quot;
      </p>
    </section>
    <section>
      <p className="font-sm">
        <em>AWARDS —</em> 1st place &quot;Best Prototype&quot;, 2nd place
        &quot;Most Innovative Use of Technology&quot;
        <br />
        <em>ROLE —</em> Team Lead, Lead Programmer &amp; Designer
        <br />
        <em>TECH —</em> Unity, C#
        <br />
        <em>DATE —</em> November 2015
      </p>
    </section>
    <section>
      <p className="font-lg">
        <b>Media</b>
      </p>
      <ImageGallery columns={1} images={[screenshot01, screenshot02]} />
      <EmbeddedYouTube origin="http://adamgraham.io" videoId="VXWw1CmOkEw" />
    </section>
  </Project>
);

export default HackathonForWildlife;
