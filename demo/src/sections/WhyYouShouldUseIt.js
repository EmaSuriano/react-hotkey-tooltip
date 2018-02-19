import React from 'react';

const WhyYouShouldUseIt = () => (
  <section>
    <h2>Why you should use it?</h2>
    <p>
      When working with hotkeys in a React application we will find many
      problems when trying to implement it:
    </p>
    <ul>
      <li>
        Hotkeys are only accesible inside a specific component (not globally).
      </li>
      <li>Must take care of the hotkeys manually throughout the life cycle.</li>
      <li>
        Have to provide a way so the user can see all the hotkeys on the screen.
      </li>
    </ul>
    <p>
      This library will help you by declaring global hotkeys that automatically
      will be updated by any life cycle of the component and show a tooltip by
      pressing a combination of keys ✨
    </p>
  </section>
);

export default WhyYouShouldUseIt;
