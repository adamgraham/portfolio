import { ImageGallery } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import internetOfElephantsScreenshot01 from '../../images/screenshots/internet-of-elephants-screenshot-01.png';
import internetOfElephantsScreenshot02 from '../../images/screenshots/internet-of-elephants-screenshot-02.png';

const InternetOfElephants = () => (
  <Project>
    <section>
      <h1>Internet of Elephants</h1>
    </section>
    <section>
      <p>
        During a 24 hour hackathon, I set out to create an empathetic game that
        invokes the emotions an elephant feels while being hunted by a deadly
        poacher. By putting the player in the role of the elephant, it creates a
        deeper connection between the human and the animal.
      </p>
      <p>
        “On November 14th and 15th over 60 people came together to explore and
        develop innovative ways to engage worldwide audiences with wild animals.
        The hackathon teams created amazing concepts through a combination of
        technologies that include GPS hardware, data, games, and social media to
        create a stronger, more vested connection between people and animals.”
      </p>
    </section>
    <section>
      <p className="body-sm">
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
      <p className="body-lg">
        <b>Media</b>
      </p>
      <ImageGallery
        columns={1}
        images={[
          internetOfElephantsScreenshot01,
          internetOfElephantsScreenshot02,
        ]}
      />
    </section>
  </Project>
);

export default InternetOfElephants;
