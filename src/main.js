import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'Src/store/store';
import Root from 'Components/Root';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <HashRouter>
          <Component/>
        </HashRouter>
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