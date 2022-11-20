import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import SideBar from '../components/common/SideBar';
import IntroSide from '../components/introduction/IntroSide';
import IntroContent from './IntroContent';
import styled from '@emotion/styled';
import TestPage from './TestPage';
import HeaderContainer from '../containers/header/HeaderContainer';
import Contents from '../components/common/Contents';
import { useSelector } from 'react-redux';

const BodyWrap = styled.div`
    width: 100vw;
    height: 93vh;
    max-height: 93vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentsWrap = styled.div`
    display: flex;
    width: 90vw;
    height: 90vh;
    max-height: 90vh;
    flex-direction: row;
    border: 1px solid #2c2b2b;
    border-radius: 10px;
`;

const LeftBarWrap = styled.div`
    width: 20%;
    background-color: #2c2b2b;
    border-radius: 10px 0 0 10px;
`;

const RightBarWrap = styled.div`
    width: 80%;
    border-radius: 0 10px 10px 0;
    backdrop-filter: blur(10px);
`;

function BaseIntro() {
    const introSelector = useSelector((state) => state.introSelector);

    return (
        <TestPage>
            <HeaderContainer />
            <BodyWrap>
                <ContentsWrap>
                    <LeftBarWrap>
                        <SideBar isPortfolio={false}>
                            <IntroSide />
                        </SideBar>
                    </LeftBarWrap>
                    <RightBarWrap>
                        <Contents title="자기소개">
                            <IntroContent></IntroContent>
                        </Contents>
                    </RightBarWrap>
                </ContentsWrap>
            </BodyWrap>
        </TestPage>
    );
}

export default BaseIntro;
