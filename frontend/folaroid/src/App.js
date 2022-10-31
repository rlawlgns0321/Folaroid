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
}

export default App;
