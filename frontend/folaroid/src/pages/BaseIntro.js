import React from 'react';
import '../components/introduction/base_introduction.css';
import { Grid } from '@mui/material';
import { css } from '@emotion/css';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import SideBar from '../components/common/SideBar';
import ProjectSide from '../components/project/ProjectSide';
import TemplateSide from '../components/template/TemplateSide';
import IntroSide from '../components/introduction/IntroSide';
import Contents from '../components/common/Contents';

// import Sidebar from '../components/introduction/Sidebar';
import NameInput from '../components/introduction/NameInput';
import BirthInput from '../components/introduction/BirthInput';
import EmailInput from '../components/introduction/EmailInput';
import StackInput from '../components/introduction/StackInput';
import PhoneInput from '../components/introduction/PhoneInput';
import ImageInput from '../components/introduction/ImageInput';
import SchoolInput from '../components/introduction/SchoolInput';
import SloganInput from '../components/introduction/SloganInput';
import LanguageInput from '../components/introduction/LanguageInput';
import LinkInput from '../components/introduction/LinkInput';
import CertificateInput from '../components/introduction/CertificateInput';
import AwardInput from '../components/introduction/AwardInput';
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
                    <SideBar>
                        <Routes>
                            <Route path="template" element={<TemplateSide />} />
                            <Route path="project" element={<ProjectSide />} />
                            <Route path="intro" element={<IntroSide />} />
                        </Routes>
                    </SideBar>
                </Grid>
                <Grid
                    className={css`
                        width: 80vw;
                    `}
                >
                    <Contents title={title}>
                      <NameInput></NameInput>
                      <BirthInput></BirthInput>
                      <EmailInput></EmailInput>
                      <PhoneInput></PhoneInput>
                      <ImageInput></ImageInput>
                      <SloganInput></SloganInput>
                      <StackInput></StackInput>
                      <SchoolInput></SchoolInput>
                      <LanguageInput></LanguageInput>
                      <LinkInput></LinkInput>
                      <CertificateInput></CertificateInput>
                      <AwardInput></AwardInput>
                    </Contents>
                </Grid>
            </Grid>
        </div>
    );
}

export default BaseIntro;
