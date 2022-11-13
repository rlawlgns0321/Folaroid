import React from 'react';
import SideBar from '../components/common/SideBar';
import { Route, Routes } from 'react-router-dom';
import TemplateSide from '../components/template/TemplateSide';
import IntroSide from '../components/introduction/IntroSide';
import Contents from '../components/common/Contents';
import ProjectBodyContainer from '../containers/Project/ProjectBodyContainer';
import ProjectSideContainer from '../containers/Project/ProjectSideContainer';
import PortfolioIntro from '../components/portfolio_intro/PortfolioIntro';
import HeaderContainer from '../containers/header/HeaderContainer';
import styled from '@emotion/styled';
import ProjectBody from '../components/project/ProjectBody';

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

const PortFolioPage = () => {
    return (
        <div>
            <HeaderContainer />
            <BodyWrap>
                <ContentsWrap>
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
                        <Contents title="프로젝트">
                            <Routes>
                                <Route
                                    path="project"
                                    element={<ProjectBody />}
                                />
                            </Routes>
                        </Contents>
                    </RightBarWrap>
                </ContentsWrap>
            </BodyWrap>
        </div>
    );
};

export default PortFolioPage;
