import { renderToString } from 'react-dom/server';
import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

console.log('--- START ---');
try {
  const html = renderToString(React.createElement(FlipClockCountdown, { to: new Date().getTime() + 10000, renderOnServer: true }));
  console.log('HTML:', html);
} catch (err) {
  console.error('ERROR:', err);
}
console.log('--- END ---');
