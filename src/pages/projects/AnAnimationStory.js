import { EmbeddedYouTube } from '@zigurous/react-components';
import React from 'react';
import { Project } from '../../components';

const AnAnimationStory = () => (
  <Project>
    <section>
      <h1>An Animation Story</h1>
    </section>
    <section>
      <p>
        A simple love story between a girl named Design and a boy named
        Animation. I created, narrated, and presented this story to a group of
        developers at Solstice in order to talk about the importance of having a
        &quot;design-gineering&quot; mindset and the value of the relationship
        between designers and engineers.
      </p>
    </section>
    <section>
      <EmbeddedYouTube
        origin="http://adamgraham.io"
        videoId="uHQvPFud3-I"
        width="100%"
        height="468"
      />
    </section>
    <hr />
    <section>
      <p className="body-lg">
        <b>Script</b>
      </p>
      <p className="body-sm">
        Once upon a time...
        <br />
        There was a girl named Design.
        <br />
        Ahh, but you see, Design was not happy.
        <br />
        She had just had her heart broken.
        <br />
        Long story short, some boy named Engineering...well it just didn&apos;t
        work out.
        <br />
        Design sat alone, crying, unsure of what was next.
        <br />
        She felt motionless; time escaped her.
        <br />
      </p>
      <p className="body-sm">
        <br />
        One day, while sitting down under a tree...
        <br />
        a boy came up to Design.
        <br />
        &quot;Hi! What&apos;s your name?&quot;, he said.
        <br />
        &quot;Uhh, hi, my name is Design&quot;
        <br />
        &quot;Hi Design, my name is Animation!&quot;
        <br />
        The two soon developed a strong connection.
        <br />
        They hung out everyday..talking, sharing ideas, exploring, you name it.
        <br />
        He slowly lit a spark in her heart.
        <br />
        Until one day...
        <br />
        Animation just stopped showing up.
        <br />
        Design was confused and lost. &quot;Is he okay? Where is he?&quot;, she
        pondered.
        <br />
        The days went by...
        <br />
        And by...
        <br />
      </p>
      <p className="body-sm">
        <br />
        Design was standing by the bonfire, when unexpectedly...
        <br />
        Animation finally returned.
        <br />
        &quot;Where have you been!?&quot;, Design asked concerningly.
        <br />
        &quot;You just disappeared without saying anything&quot;
        <br />
        &quot;I&apos;m so sorry!&quot;, he replied.
        <br />
        &quot;The other day on my way home, I took the wrong path, stumbled, and
        hit my head&quot;
        <br />
        &quot;I had to go see a doctor for a little while&quot;
        <br />
        &quot;I guess you could say I was lovestruck&quot;
        <br />
        She blushed.
        <br />
        &quot;I have a surprise for you&quot;, he said.
        <br />
        &quot;I noticed your swing was broken, so I got some more rope to fix
        it&quot;
        <br />
        She forgave him, and they proceeded to fix the swing together.
        <br />
      </p>
      <p className="body-sm">
        <br />
        Reconnected they were.
        <br />
        Side by side, the two eased through life together and lived happily ever
        after.
        <br />
        The end.
      </p>
    </section>
    <hr />
    <section>
      <p className="body-lg">
        <b>My Thoughts</b>
      </p>
      <p className="body-sm">
        So, what the heck was that all about? And what ever happened to
        Engineering? Well, this story highlights the Design-Engineering mindset,
        or rather the lack of. Too often do I see us breaking designers&apos;
        hearts. It seems implementing a design exactly as it was created often
        proposes a problem. But instead of solving the problem, we find ways to
        avoid it. &quot;Oh this increases technical complexity, let&apos;s
        simplify&quot;. &quot;Oh this skyrockets our scope, let&apos;s do this
        later&quot; (aka never). Specifically, implementing animations is a
        common trigger to these excuses.
      </p>
      <p className="body-sm">
        Why is it so important to not break out designers hearts? In my opinion,
        a great design tells a story. It evokes emotions and brings character to
        the product. Animation is one great tool in a designer&apos;s tool-belt
        that brings life to a design. It is a story in of itself - the change of
        values over time from one point to another. You see, when we find
        reasons to not fulfill a designer&apos;s creation, to not implement
        their animations, or any other design element for that matter, we are
        taking the life out of the design. We are stripping it of character and
        emotion.
      </p>
      <p className="body-sm">
        What ever happened to Engineering? Perhaps he makes an epic return in
        Chapter 2. Perhaps not. It is our job as engineers to create Chapter
        2...to not break our designers hearts. And, so, honestly I don&apos;t
        see the value in sitting here and showing you how to implement
        animations. Because, I believe, that without a
        &quot;design-gineering&quot; mindset, we will continue to find excuses
        not to meet design face to face. I don&apos;t think you all need to be
        as passionate about design or animation as I am, but I think we all have
        to at least appreciate what it is a designer does, and the impact their
        designs have on a product.
      </p>
      <p className="body-sm">
        I encourage everyone to work very closely with your designers.
        Understand what it is they do everyday, what problems they think about,
        and what tools they use to solve those problems. The best way to
        understand a designer is to become one. This, in my opinion, is what the
        &quot;design-gineering&quot; mindset is all about.
      </p>
    </section>
  </Project>
);

export default AnAnimationStory;
