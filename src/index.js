import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener('scroll', () => {
  const currentScrollPoint = window.pageYOffset;
  const scrollThreshold = 300;

  let opacity = 0;

  if (currentScrollPoint <= scrollThreshold || currentScrollPoint > scrollThreshold) opacity += currentScrollPoint / scrollThreshold;
  document.querySelector('.app-content__hero').style.opacity = opacity;
});