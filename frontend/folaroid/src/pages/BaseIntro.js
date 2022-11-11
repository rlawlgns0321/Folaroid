import React from 'react';
import '../components/introduction/base_introduction.css';
import { Grid } from '@mui/material';
import { css } from '@emotion/css';
// import { Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import SideBar from '../components/common/SideBar';
import IntroSide from '../components/introduction/IntroSide';
import Contents from '../components/common/Contents';
import PersonalInput from '../components/introduction/PersonalInput'
import ActivityInput from '../components/introduction/ActivityInput'
import StackInput from '../components/introduction/StackInput';
import ImageInput from '../components/introduction/ImageInput';
import SchoolInput from '../components/introduction/SchoolInput';
import SloganInput from '../components/introduction/SloganInput';
import LanguageInput from '../components/introduction/LanguageInput';
import ArchivingInput from '../components/introduction/ArchivingInput';
import CertificateInput from '../components/introduction/CertificateInput';
import AwardInput from '../components/introduction/AwardInput';
import CareerInput from '../components/introduction/CareerInput'
function BaseIntro() {
    const title = '기본정보';

    return (
        <div>
            <Header />
            <Grid
                container
                sx={{
                    width: '100vw',
                    height: '93vh',
                    maxHeight: '93vh',
                    borderTop: '3px solid black',
                }}
                direction="row"
            >
                <Grid
                    className={css`
                        width: 20vw;
                        border-right: 3px solid black;
                    `}
                >
                    <SideBar isPortfolio={false}>
                        <IntroSide/>
                    </SideBar>
                </Grid>
                <Grid
                    className={css`
                        width: 80vw;
                    `}
                >
                    <Contents title={title}>
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
                </Grid>
            </Grid>
        </div>
    );
}

export default BaseIntro;
