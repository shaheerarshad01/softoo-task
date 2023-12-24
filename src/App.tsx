import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './navigation';
import {Provider} from 'react-redux';
import {store} from './lib/store';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <MainNavigation />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;

