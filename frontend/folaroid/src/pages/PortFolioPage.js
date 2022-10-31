import { css } from '@emotion/css';
import { Grid } from '@mui/material';
import React from 'react';
import Header from '../components/common/Header';
import SideBar from '../components/common/SideBar';

const PortFolioPage = () => {
    return (
        <div>
            <Header />
            <Grid container sx={{ width: '100vw', height: '93vh', borderTop: '3px solid black' }}>
                <div
                    className={css`
                        width: 15vw;
                        border-right: 3px solid black;
                    `}
                >
                    <SideBar></SideBar>
                </div>
            </Grid>
        </div>
    );
};

export default PortFolioPage;
