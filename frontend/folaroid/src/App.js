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
import Unity, {UnityContext} from "react-unity-webgl";


const unityContext = new UnityContext ({
  loaderUrl: "Build/release.loader.js",
  dataUrl: "Build/release.data",
  frameworkUrl: "Build/release.framework.js",
  codeUrl: "Build/release.wasm",
})

function App() {
    const user = useSelector((state) => state.auth.user);

    return (
        <ThemeProvider theme={theme}>
            <div style={{ height: '100vh', width: '100vw'}}>
                <Routes>
                    <Route path="/" element={<MainPage />} exact />
                    <Route path="/callback" element={<CallBackpage />} />
                    <Route path="/mypage" element={user ? <MyPage /> : <Navigate to="/"/>} />
                    <Route path="/intro" element={user ? <BaseIntro /> : <Navigate to="/"/>} />
                    <Route path="/portfolio/*" element={user ? <PortFolioPage/> : <Navigate to="/" />} />
                    <Route path="/projectinfo" element={user ? <ProjectInfoPage /> : <Navigate to="/"/>} />
                </Routes>
                <Unity style={{
          width: '90%',
          height: '100%',
          justifySelf: 'center',
          alignSelf: 'center',
        }}
        unityContext={unityContext}></Unity>
            </div>
        </ThemeProvider>
    );
}

export default App;
