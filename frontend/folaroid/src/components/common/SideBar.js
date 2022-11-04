import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabBtn = styled(Link)`
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => (props.isActive ? '#000000' : '#c8c8c8')};
    border: 0;
    background-color: white;
    text-decoration: none;
`;

const SideTab = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-grow: 1;
`;

const SideBar = ({ children, isPortfolio }) => {
    const { pathname } = useLocation();

    return (
        <Grid
            container
            className={css`
                height: 92vh;
                max-height: 92vh;
            `}
            direction="column"
        >
            {isPortfolio && (
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
                        <TabBtn
                            to="/portfolio/intro"
                            isActive={pathname === '/portfolio/intro'}
                        >
                            자기소개
                        </TabBtn>
                    </SideTab>
                    <SideTab>
                        <TabBtn
                            to="/portfolio/project"
                            isActive={pathname === '/portfolio/project'}
                        >
                            프로젝트
                        </TabBtn>
                    </SideTab>
                    <SideTab
                        className={css`
                            border-left: 3px solid #c8c8c8;
                        `}
                    >
                        <TabBtn
                            to="/portfolio/template"
                            isActive={pathname === '/portfolio/template'}
                        >
                            템플릿
                        </TabBtn>
                    </SideTab>
                </Grid>
            )}
            <div
                className={css`
                    height: ${isPortfolio ? '92% ' : '100%'};
                    max-height: ${isPortfolio ? '92% ' : '100%'};
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

SideBar.defaultProps = {
    isPortfolio: false,
};

export default SideBar;
