import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div >
      <Route path='/' component={MainPage} exact/>
    </div>
  );
}

export default App;
