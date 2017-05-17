import React from 'react';
import ReactDOM from 'react-dom';
import Component from './app.js';

const rootEl = document.getElementById('j-app');


const render = () => ReactDOM.render(<Component />,rootEl);

render();

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./app.js', render);
}
