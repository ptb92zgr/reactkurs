// import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Link } from './components/Link';
import { HeadingItalic } from './components/HeadingItalic';
import { Logger } from './components/Logger';

const element = (
  <>
    <Logger>
      <HeadingItalic>Nasza strona</HeadingItalic>
    </Logger>

    <main>
      <Logger>
        <HeadingItalic>Nasza strona</HeadingItalic>
      </Logger>
      <Link text='Google' shouldOpenNewTab={true} />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
        inventore facilis deleniti perferendis illum dolor velit neque
        blanditiis optio iste.
      </p>
      <Link shouldOpenNewTab={false} />
    </main>
  </>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>{element}</StrictMode>
);
