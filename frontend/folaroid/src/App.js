import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CallBackpage from './pages/CallBackpage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import './index.css';
import BaseIntro from './pages/BaseIntro';
import Template1 from './pages/Template1';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ height: '100vh' }}>
                <Routes>
                    <Route path="/" element={<MainPage />} exact />
                    <Route path="/callback" element={<CallBackpage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/intro" element={<BaseIntro />} />
                    <Route path="/tem1" element={<Template1 />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
