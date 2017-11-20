import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {};

const store = createStore(reducers, initialState, applyMiddleware(thunk));

function Store(props) {
  return <Provider store={store}>{props.children}</Provider>;
}

export default Store;
