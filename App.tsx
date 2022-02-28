require('node-libs-react-native/globals');

import React from 'react';

import Routes from './src/routes';

import {  PersistGate } from 'redux-persist/integration/react';
import { store, persistedStore } from './src/store'
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Routes/>
      </PersistGate>
    </Provider>
  );
}
