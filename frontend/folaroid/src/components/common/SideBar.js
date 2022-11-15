import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const TabBtn = styled(Link)`
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => (props.$active ? '#248BEA' : '#c8c8c8')};
    border: 0;
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
    const {pfNo} = useParams();
    
    return (
        <Grid
            container
            className={css`
                height: 100%;
                max-height: 100%;
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
                        border-bottom: 1px solid #248bea;
                        height: 8%;
                    `}
                >
                    <SideTab>
                        <TabBtn
                            to={`/portfolio/${pfNo}/intro`}
                            $active={pathname === `/portfolio/${pfNo}/intro`}
                        >
                            자기소개
                        </TabBtn>
                    </SideTab>
                    <SideTab>
                        <TabBtn
                            to={`/portfolio/${pfNo}/project`}
                            $active={pathname === `/portfolio/${pfNo}/project`}
                        >
                            프로젝트
                        </TabBtn>
                    </SideTab>
                    <SideTab>
                        <TabBtn
                            to={`/portfolio/${pfNo}/template`}
                            $active={pathname === `/portfolio/${pfNo}/template`}
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
