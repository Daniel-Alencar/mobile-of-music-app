import React from 'react';

import Routes from './src/routes';

import { Provider } from 'react-redux';
import store from './src/store';

import { AuthProvider } from './src/context/auth';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </Provider>
  );
}
