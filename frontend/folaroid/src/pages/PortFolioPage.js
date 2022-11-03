import { css } from '@emotion/css';
import { Grid } from '@mui/material';
import React from 'react';
import Header from '../components/common/Header';
import SideBar from '../components/common/SideBar';
import { Route, Routes } from 'react-router-dom';
import TemplateSide from '../components/template/TemplateSide';
import IntroSide from '../components/introduction/IntroSide';
import Contents from '../components/common/Contents';
import ProjectBodyContainer from '../containers/Project/ProjectBodyContainer';
import ProjectSideContainer from '../containers/Project/ProjectSideContainer';

const PortFolioPage = () => {
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
                    <SideBar isPortfolio>
                        <Routes>
                            <Route path="template" element={<TemplateSide />} />
                            <Route path="project" element={<ProjectSideContainer />} />
                            <Route path="intro" element={<IntroSide />} />
                        </Routes>
                    </SideBar>
                </Grid>
                <Grid
                    className={css`
                        width: 80vw;
                    `}
                >
                    <Contents title="프로젝트">
                        <Routes>
                            <Route path="project" element={<ProjectBodyContainer />} />
                        </Routes>
                    </Contents>
                </Grid>
            </Grid>
        </div>
    );
};

export default PortFolioPage;
