import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CallBackpage from './pages/CallBackpage';
import MainPage from './pages/MainPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage/>} exact />
                <Route path="/callback" element={<CallBackpage/>} />
            </Routes>
        </div>
    );
}

export default App;
