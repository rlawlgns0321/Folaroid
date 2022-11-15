// import { css } from '@emotion/css';
import React from 'react';
// import Main from '../components/canvas/Main';
import MainCanvas from '../components/canvas/MainCanvas';
// import Header from '../components/common/Header';
import HeaderContainer from '../containers/header/HeaderContainer';
import TestPage from './TestPage';
import "./svg.css";

const MainPage = () => {
    return (
        <TestPage>
            <HeaderContainer />
            {/* <MainCanvas /> */}
            {/* <link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet"> */}

            <svg viewBox="0 0 1320 300">
                <text x="50%" y="20%" dy=".35em" text-anchor="middle">
                    FOLAROID
                </text>
            </svg>  
 
        </TestPage>
    );
};

export default MainPage;
