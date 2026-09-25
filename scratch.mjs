import { renderToString } from 'react-dom/server';
import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

console.log('--- START ---');
try {
  const html = renderToString(React.createElement(FlipClockCountdown, { to: new Date('2026-10-15T23:59:59+05:30').getTime(), renderOnServer: true }));
  console.log('HTML:', html);
} catch (err) {
  console.error('ERROR:', err);
}
console.log('--- END ---');
