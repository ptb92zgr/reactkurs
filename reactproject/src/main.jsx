// import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const element = <div></div>;

createRoot(document.getElementById('root')).render(
  <StrictMode>{element}</StrictMode>
);
