import { Button } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';
import screenshot from '../../images/screenshots/allium-screenshot-spread.png';

const Allium = () => (
  <Project>
    <section>
      <h1>Allium</h1>
    </section>
    <section>
      <p>
        Allium is a home-based floral design studio launched in 2013 by Kim
        Stanke. After years of working in both retail stores and special event
        design shops, Kim started her own business to flex her creative muscles.
      </p>
      <p>
        I designed a new website for Allium to improve the old WordPress site.
        The goal of the new design was to better promote the business and its
        floral services.
      </p>
    </section>
    <section>
      <Button external link="http://alliumfloral.adamgraham.io/" size="small">
        View Website
      </Button>
    </section>
    <section>
      <img alt="Allium Website" className="box-shadow-3" src={screenshot} />
    </section>
  </Project>
);

export default Allium;
