import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import Home from 'components/Home';

import store from './store';

render(
  <Provider store={ store }>
    <Home/>
  </Provider>,
  document.getElementById('index')
);
