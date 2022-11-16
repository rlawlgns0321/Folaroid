import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import SideBar from '../components/common/SideBar';
import IntroSide from '../components/introduction/IntroSide';
import Contents from '../components/common/Contents';
import PersonalInput from '../components/introduction/PersonalInput';
import ActivityInput from '../components/introduction/ActivityInput';
import StackInput from '../components/introduction/StackInput';
import ImageInput from '../components/introduction/ImageInput';
import SchoolInput from '../components/introduction/SchoolInput';
import SloganInput from '../components/introduction/SloganInput';
import LanguageInput from '../components/introduction/LanguageInput';
import ArchivingInput from '../components/introduction/ArchivingInput';
import CertificateInput from '../components/introduction/CertificateInput';
import AwardInput from '../components/introduction/AwardInput';
import CareerInput from '../components/introduction/CareerInput';
import styled from '@emotion/styled';
import TestPage from './TestPage';
import HeaderContainer from '../containers/header/HeaderContainer';

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
                            <PersonalInput></PersonalInput>
                            <ImageInput></ImageInput>
                            <SloganInput></SloganInput>
                            <StackInput></StackInput>
                            <SchoolInput></SchoolInput>
                            <LanguageInput></LanguageInput>
                            <ArchivingInput></ArchivingInput>
                            <CertificateInput></CertificateInput>
                            <AwardInput></AwardInput>
                            <ActivityInput></ActivityInput>
                            <CareerInput></CareerInput>
                        </Contents>
                    </RightBarWrap>
                </ContentsWrap>
            </BodyWrap>
        </TestPage>
    );
}

export default BaseIntro;
