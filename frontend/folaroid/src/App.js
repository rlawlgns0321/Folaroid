import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CallBackpage from './pages/CallBackpage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import BaseIntro from './pages/BaseIntro';
import './index.css';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import PortFolioPage from './pages/PortFolioPage';
import ProjectInfoPage from './pages/ProjectInfoPage';
import { useSelector } from 'react-redux';
import Template1 from './pages/Template1';
import Template2 from './pages/Template2';
import Template3 from './pages/Template3';
import Template4 from './pages/Template4';
import TestPage from './pages/TestPage';
import InfoModal from './pages/InfoModal';
import Space from './components/template/space/Space';
import Flex from './components/template/flex/Flex';
import Music from './components/template/music/Music';
import Gallery from './components/template/gallery/Gallery';

function App() {
    const user = useSelector((state) => state.auth.user);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} exact />
                    <Route path="/callback" element={<CallBackpage />} />
                    <Route
                        path="/mypage"
                        element={user ? <MyPage /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/intro"
                        element={user ? <BaseIntro /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/portfolio/:pfNo/*"
                        element={user ? <PortFolioPage /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/portfolio/:pfNo/project/:pjtNo"
                        element={
                            user ? <ProjectInfoPage /> : <Navigate to="/" />
                        }
                    />
                    <Route path="/tem1" element={<Template1 />} />
                    <Route path="/tem2" element={<Template2 />} />
                    <Route path="/tem3" element={<Template3 />} />
                    <Route path="/tem4" element={<Template4 />} />
                    {/* 자기소개 모달 샘플 */}
                    <Route path="/infoModal" element={<InfoModal />} />
                    <Route path="/space" element={<Space />} />
                    <Route path="/flex" element={<Flex />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/Gallery" element={<Gallery />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
