import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'Root/store/store';
import Root from 'Components/Root';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component/>
        </BrowserRouter>
      </Provider>
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