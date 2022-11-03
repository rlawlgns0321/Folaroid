import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CallBackpage from './pages/CallBackpage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import BaseIntro from './pages/BaseIntro';
import OthersPage from './pages/OthersPage';
import './index.css';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import PortFolioPage from './pages/PortFolioPage';
import ProjectInfoPage from './pages/ProjectInfoPage';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ height: '100vh', width: '100vw'}}>
                <Routes>
                    <Route path="/" element={<MainPage />} exact />
                    <Route path="/callback" element={<CallBackpage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/intro" element={<BaseIntro />} />
                    <Route path="/portfolio/*" element={<PortFolioPage />}/>
                    <Route path="/others" element={<OthersPage />}/>
                    <Route path="/projectinfo" element={<ProjectInfoPage />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
