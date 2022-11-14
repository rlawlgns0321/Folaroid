// import { css } from '@emotion/css';
import React from 'react';
// import Main from '../components/canvas/Main';
import MainCanvas from '../components/canvas/MainCanvas';
// import Header from '../components/common/Header';
import HeaderContainer from '../containers/header/HeaderContainer';
import TestPage from './TestPage';

const MainPage = () => {
    return (
        <TestPage>
            <HeaderContainer />
            {/* <MainCanvas /> */}
        </TestPage>
    );
};

export default MainPage;
