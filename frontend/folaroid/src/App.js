import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CallBackpage from './pages/CallBackpage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import './index.css';
import BaseIntro from './pages/BaseIntro';
import Template1 from './pages/Template1';
import Template2 from './pages/Template2';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import PortFolioPage from './pages/PortFolioPage';
import ProjectInfoPage from './pages/ProjectInfoPage';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} exact />
                    <Route path="/callback" element={<CallBackpage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/intro" element={<BaseIntro />} />
                    <Route path="/portfolio/*" element={<PortFolioPage />} />
                    <Route path="/projectinfo" element={<ProjectInfoPage />} />
                    <Route path="/tem1" element={<Template1 />} />
                    <Route path="/tem2" element={<Template2 />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
