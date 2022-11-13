import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Title = styled(Grid)`
    height: 8%;
    border-bottom: 1px solid #248BEA;
    font-weight: bold;
    color: white;
    background-color: #248BEA;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    padding-left: 15px;
    border-radius: 0 10px 0 0;
`;

const Wrap = styled(Grid)`
    height: 100%;
    max-height: 100%;
`;

const Contents = ({ children }) => {
    const { pathname } = useLocation();
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (pathname === '/portfolio/intro') setTitle('자기소개');
        else if (pathname === '/portfolio/project') setTitle('프로젝트');
        else if (pathname === '/portfolio/template') setTitle('템플릿');
    }, [pathname]);

    return (
        <Wrap container direction="column">
            <Title>{title}</Title>
            <Grid
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
            </Grid>
        </Wrap>
    );
};

export default Contents;
