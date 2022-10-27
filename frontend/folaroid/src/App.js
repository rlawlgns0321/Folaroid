import React from 'react';
import Counter from './Counter';
import './App.css';
//import { Route } from 'react-router-dom';
//import MainPage from './MainPage';
import MyPage from './MyPage';
const App = () => {
  return (
    <div>
      <MyPage></MyPage>
      <Counter></Counter>
    </div>
  );
};

export default App;
