import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './introduction/base_introduction';
import CallBackpage from './pages/CallBackpage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import './index.css';
import BaseIntro from './pages/BaseIntro';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import PortFolioPage from './pages/PortFolioPage';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} exact />
                    <Route path="/callback" element={<CallBackpage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/intro" element={<BaseIntro />} />
                    <Route path="/portfolio" element={<PortFolioPage />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
