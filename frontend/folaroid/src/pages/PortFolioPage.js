import { css } from '@emotion/css';
import { Grid } from '@mui/material';
import React from 'react';
import Header from '../components/common/Header';
import SideBar from '../components/common/SideBar';
import { Route, Routes } from 'react-router-dom';
import ProjectSide from '../components/project/ProjectSide';
import TemplateSide from '../components/template/TemplateSide';
import Sidebar from '../components/introduction/Sidebar';
import IntroSide from '../components/introduction/IntroSide';

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
            >
                <div
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
                </div>
            </Grid>
        </div>
    );
};

export default PortFolioPage;
