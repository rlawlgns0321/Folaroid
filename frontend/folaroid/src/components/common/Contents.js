import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Title = styled(Grid)`
    height: 8%;
    border-bottom: 3px solid #c8c8c8;
    font-weight: bold;
    color: #248bea;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    padding-left: 7px;
`;

const Wrap = styled(Grid)`
    height: 92vh;
    max-height: 92vh;
`;

const Contents = ({ children }) => {
    const { pathname } = useLocation();
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (pathname === '/portfolio/intro') setTitle('자기소개');
        else if (pathname === '/portfolio/project') setTitle('프로젝트');
        else if (pathname === '/portfolio/template') setTitle('템플릿');
    },[pathname]);

    return (
        <Wrap container direction="column">
            <Title>{title}</Title>
            <Grid>{children}</Grid>
        </Wrap>
    );
};

export default Contents;
