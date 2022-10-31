<<<<<<< HEAD
import './index.css';
import SignUp from './introduction/base_introduction';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <SignUp></SignUp>
        </header>
      </div>
    </ThemeProvider>
  );
=======
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CallBackpage from './pages/CallBackpage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} exact />
                <Route path="/callback" element={<CallBackpage />} />
                <Route path="/mypage" element={<MyPage />} />
            </Routes>
        </div>
    );
>>>>>>> de04dc58a0f35ad1741f54bc18e7615b811c52dc
}

export default App;
