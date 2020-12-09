import { Link } from '@zigurous/react-components';
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
      <p className="body-lg">
        <Link external href="http://alliumfloral.adamgraham.io/">
          <b>Website</b>
        </Link>
      </p>
      <Link
        className="image-link"
        external
        href="http://alliumfloral.adamgraham.io/"
        undecorated
      >
        <img alt="Allium Website" className="box-shadow-3" src={screenshot} />
      </Link>
    </section>
  </Project>
);

export default Allium;
