import {applyMiddleware, createStore, compose} from 'redux';

import rootReducer from './rootReducer';

const store = createStore(rootReducer, {}, compose(
  window.devToolsExtension()
));

export default store;
