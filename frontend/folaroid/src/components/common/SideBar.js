import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const TabBtn = styled.button`
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => (props.active ? '#248BEA' : '#c8c8c8')};
    border: 0;
    background: inherit;
    cursor: pointer;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        border: 0;
        outline: none;
    }
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
    const { pfNo } = useParams();
    const navigate = useNavigate();
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
                            active={pathname === `/portfolio/${pfNo}/intro`}
                            onClick={() => {navigate(`/portfolio/${pfNo}/intro`)}}
                        >
                            자기소개
                        </TabBtn>
                    </SideTab>
                    <SideTab>
                        <TabBtn
                            active={pathname === `/portfolio/${pfNo}/project`}
                            onClick={() => {navigate(`/portfolio/${pfNo}/project`)}}
                        >
                            프로젝트
                        </TabBtn>
                    </SideTab>
                    <SideTab>
                        <TabBtn
                            active={pathname === `/portfolio/${pfNo}/template`}
                            onClick={() => {navigate(`/portfolio/${pfNo}/template`)}}
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
