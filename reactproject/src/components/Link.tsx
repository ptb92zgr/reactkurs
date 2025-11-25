import React from 'react';

export function Link({ text, shouldOpenNeTab }) {
  const address = 'https://google.pl';
  console.log(text);
  // const { text, shouldOpenNeTab } = props;

  const target = shouldOpenNeTab ? '_blank' : '';
  const rel = shouldOpenNeTab ? 'noreferrer noopener' : '';

  if (text === undefined) {
    text = address;
  }

  return (
    <a href={address} target={target} rel={rel}>
      {text}
    </a>
  );
}
