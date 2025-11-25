import React from 'react';

const address = 'https://google.pl';

export function Link({ text = address, shouldOpenNeTab }) {
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
