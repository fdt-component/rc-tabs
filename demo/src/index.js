import React from 'react';
import ReactDOM from 'react-dom';
import Component from './app.js';

const rootEl = document.getElementById('j-app');

if (module.hot) {
  import('react-hot-loader').then(({AppContainer}) => {
    const render = () => ReactDOM.render(<AppContainer><Component /></AppContainer>, rootEl);
    render();
    module.hot.accept('./app.js', render);
  });
}
