import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';
import ProjectAdd from './ProjectAdd';
import ProjectBodyItem from './ProjectBodyItem';

const ItemWrap = styled(Grid)`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ProjectBody = () => {
    return (
        <Grid container>
            <ItemWrap item xs={6}>
                <ProjectBodyItem />
            </ItemWrap>
            <ItemWrap item xs={6}>
                <ProjectBodyItem />
            </ItemWrap>
            <ItemWrap item xs={6}>
                <ProjectBodyItem />
            </ItemWrap>
            <ItemWrap item xs={6}>
                <ProjectBodyItem />
            </ItemWrap>
            <ItemWrap item xs={6}>
                <ProjectAdd/>
            </ItemWrap>
        </Grid>
    );
};

export default ProjectBody;
