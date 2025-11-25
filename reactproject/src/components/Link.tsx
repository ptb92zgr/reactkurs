import React from 'react';

export function Link({ text, shouldOpenNeTab }) {
  console.log(props);
  const address = 'https://google.pl';

  // const { text, shouldOpenNeTab } = props;

  const target = shouldOpenNeTab ? '_blank' : '';
  const rel = shouldOpenNeTab ? 'noreferrer noopener' : '';

  return (
    <a href={address} target={target} rel={rel}>
      {text}
    </a>
  );
}
