import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './introduction/base_introduction';
import CallBackpage from './pages/CallBackpage';
import MainPage from './pages/MainPage';
import PortFolioPage from './pages/PortFolioPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} exact />
                <Route path="/callback" element={<CallBackpage />} />
                <Route path="/intro" element={<SignUp />} />
                <Route path="/portfolio" element={<PortFolioPage />} />
            </Routes>
        </div>
    );
}

export default App;
