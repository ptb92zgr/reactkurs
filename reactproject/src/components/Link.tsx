import React from 'react';

export function Link() {
  const address = 'https://google.pl';

  return (
    <a href={address} target='_blank' rel='noreferrer noopener'>
      {address}
    </a>
  );
}
