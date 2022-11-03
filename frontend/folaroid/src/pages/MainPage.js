// import { css } from '@emotion/css';
import React from 'react';
import Main from '../components/canvas/Main';
// import MainCanvas from '../components/canvas/MainCanvas';
import Header from '../components/common/Header';

const MainPage = () => {
    return (
        <div style={
            {backgroundColor: 'black'}
        }>
            <Header />
            <Main/>
        </div>
    );
};

export default MainPage;
