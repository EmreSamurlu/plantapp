import React from 'react';

import Router from './navigation';
import ReduxProvider from './redux/ReduxProvider';

const App = () => {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
};

export default App;
