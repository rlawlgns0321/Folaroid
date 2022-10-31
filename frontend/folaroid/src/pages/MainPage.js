import { css } from '@emotion/css';
import React from 'react';
import MainCanvas from '../components/canvas/MainCanvas';
import Header from '../components/common/Header';

const MainPage = () => {
    return (
        <div>
            <Header />
            <MainCanvas/>
        </div>
    );
};

export default MainPage;
