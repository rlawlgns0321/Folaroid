import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';

const TabBtn = styled.button`
    font-size: 1rem;
    font-weight: bold;
    color: black;
    border: 0;
    background-color: white;
`;

const SideTab = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 100%;
    flex-grow: 1;
`;

const SideBar = ({ children }) => {
    return (
        <Grid
            container
            className={css`
                height: 92vh;
                max-height: 92vh;
            `}
            direction="column"
        >
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                className={css`
                    border-bottom: 3px solid #c8c8c8;
                    height: 8%;
                `}
            >
                <SideTab
                    className={css`
                        border-right: 3px solid #c8c8c8;
                    `}
                >
                    <TabBtn>자기소개</TabBtn>
                </SideTab>
                <SideTab>
                    <TabBtn>프로젝트</TabBtn>
                </SideTab>
                <SideTab
                    className={css`
                        border-left: 3px solid #c8c8c8;
                    `}
                >
                    <TabBtn>템플릿</TabBtn>
                </SideTab>
            </Grid>
            <div
                className={css`
                    height: 92%;
                    max-height: 92%;
                    overflow: auto;
                    -ms-overflow-style: none;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                `}
            >
                {children}
            </div>
        </Grid>
    );
};

export default SideBar;
