import React from 'react';
import SideBar from '../components/common/SideBar';
import { Route, Routes } from 'react-router-dom';
import TemplateSide from '../components/template/TemplateSide';
import IntroSide from '../components/introduction/IntroSide';
import Contents from '../components/common/Contents';
import ProjectBodyContainer from '../containers/Project/ProjectBodyContainer';
import ProjectSideContainer from '../containers/Project/ProjectSideContainer';
import IntroContent from './IntroContent'
import HeaderContainer from '../containers/header/HeaderContainer';
import styled from '@emotion/styled';
import Template1 from './Template1';
import TestPage from './TestPage';
import TemplateBody from '../components/template/TemplateBody';
import ContentsContainer from '../containers/common/ContentsContainer';
import { motion } from 'framer-motion';

const BodyWrap = styled.div`
    width: 100vw;
    height: 93vh;
    max-height: 93vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentsWrap = styled(motion.div)`
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

const RightBarWrap = styled(motion.div)`
    width: 80%;
    border-radius: 0 10px 10px 0;
    backdrop-filter: blur(10px);
`;


const PortFolioPage = () => {
    return (
        <TestPage>
            <HeaderContainer />
            <BodyWrap>
                <ContentsWrap
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                >
                    <LeftBarWrap>
                        <SideBar isPortfolio>
                            <Routes>
                                <Route
                                    path="template"
                                    element={<TemplateSide />}
                                />
                                <Route
                                    path="project"
                                    element={<ProjectSideContainer />}
                                />
                                <Route path="intro" element={<IntroSide />} />
                            </Routes>
                        </SideBar>
                    </LeftBarWrap>
                    <RightBarWrap>
                        <ContentsContainer>
                            <Routes>
                                <Route
                                path="intro"
                                element={<IntroContent />}
                                />
                                <Route
                                    path="project"
                                    element={<ProjectBodyContainer />}
                                />
                                <Route
                                    path="template"
                                    element={<TemplateBody />}
                                />
                            </Routes>
                        </ContentsContainer>
                    </RightBarWrap>
                </ContentsWrap>
            </BodyWrap>
        </TestPage>
    );
};

export default PortFolioPage;
