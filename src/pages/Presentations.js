import React from 'react';
import { Gallery } from '../components';

const Presentations = () => (
  <Gallery
    slides={[
      {
        id: 'the-life-of-a-ux-engineer',
        title: 'The Life of a UX Engineer',
        description:
          'What is a UX Engineer? This specialty role sits on a cross-functional design team and helps facilitate collaboration between designers and engineers. This presentation explores the relationship between designers and engineers and how a UX Engineer uses a particular skillset to solve UX problems.',
        link: '/presentations/the-life-of-a-ux-engineer',
      },
      {
        id: 'an-animation-story',
        title: 'An Animation Story',
        description:
          'A simple love story between a girl named Design and a boy named Animation. I created, narrated, and presented this story to a group of developers at Solstice in order to talk about the importance of having a “design-gineering” mindset and the value of the relationship between designers and engineers.',
        link: '/presentations/an-animation-story',
      },
      {
        id: 'entering-the-new-reality',
        title: 'Entering the New "Reality"',
        description:
          'A presentation exploring the technologies of VR, AR, and MR. What are the differences between these technologies? What industries will it disrupt and who will be building these applications? What problems will they solve? These are the questions to be answered.',
        link: '/presentations/entering-the-new-reality',
      },
      {
        id: '3d-application-development',
        title: '3D Application Development Overview',
        description:
          'An introductory presentation to teach new developers concepts – ranging from art to technical – that apply to 3D application development, a starting point to which creators can continue to grow their knowledge.',
        link: '/presentations/3d-application-development',
      },
    ]}
  />
);

export default Presentations;
