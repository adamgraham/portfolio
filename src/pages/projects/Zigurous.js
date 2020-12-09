import { Link } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import abstractTheme from '../../images/screenshots/zigurous-screenshot-abstract-theme.png';
import adventureTheme from '../../images/screenshots/zigurous-screenshot-adventure-theme-spread.png';
import cubeTheme from '../../images/screenshots/zigurous-screenshot-cube-theme-spread.png';
import medievalTheme from '../../images/screenshots/zigurous-screenshot-medieval-theme-spread.png';

const Zigurous = () => (
  <Project>
    <section>
      <h1>Zigurous</h1>
    </section>
    <section>
      <p>
        <Link external href="http://www.zigurous.com/">
          <b>www.zigurous.com</b>
        </Link>
      </p>
      <p>
        Zigurous is an indie game development studio. I have managed and
        designed the website since I founded the game studio in 2012. The
        website has been redesigned with a new theme for most of the projects we
        have worked on. Below you can see different examples and the progression
        of the website over time.
      </p>
    </section>
    <section className="height-1em" />
    <section>
      <p className="body-lg">
        <b>2017 - Abstract Theme</b>
      </p>
      <img alt="Zigurous Website Abstract Theme" src={abstractTheme} />
    </section>
    <section>
      <p className="body-lg">
        <b>2016 - Cube Theme</b>
      </p>
      <img alt="Zigurous Website Cube Theme" src={cubeTheme} />
    </section>
    <section>
      <p className="body-lg">
        <b>2015 - Adventure Theme</b>
      </p>
      <img alt="Zigurous Website Adventure Theme" src={adventureTheme} />
    </section>
    <section>
      <p className="body-lg">
        <b>2014 - Medieval Theme</b>
      </p>
      <img alt="Zigurous Website Medieval Theme" src={medievalTheme} />
    </section>
  </Project>
);

export default Zigurous;
