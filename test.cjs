const React = require('react');
const { renderToString } = require('react-dom/server');
const FlipClockCountdown = require('@leenguyen/react-flip-clock-countdown').default;

const html = renderToString(
  React.createElement(FlipClockCountdown, { to: new Date().getTime() + 100000 })
);

console.log(html);
