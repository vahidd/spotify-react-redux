import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import Root from 'Components/Root';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component/>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
  );
};
render(Root);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render(require('./components/Root').default);
  });
}