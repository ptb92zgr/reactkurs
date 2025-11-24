// import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Link } from './components/Link';

const linkElement = (
  <a href='https://google.pl' target='_blank' rel='noreferrer noopener'>
    test link
  </a>
);

const element = (
  <>
    <h1>Nasza strona</h1>
    <main>
      <Link />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
        inventore facilis deleniti perferendis illum dolor velit neque
        blanditiis optio iste.
      </p>
      {linkElement}
    </main>
  </>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>{element}</StrictMode>
);
