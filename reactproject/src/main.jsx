import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const element = React.createElement('a', { href: 'https://google.pl' }, 'test');
console.log(<h1>test</h1>);
console.log(element);

const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
console.log(hours, minutes);

const timer = (
  <div>
    {hours}:{minutes}:{seconds}
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>{timer}</StrictMode>
);
