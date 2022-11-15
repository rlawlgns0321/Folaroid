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

const ProjectBody = ({ projects, onDeleteProject }) => {
    return (
        <Grid container>
            {projects &&
                projects.map((project) => (
                    <ItemWrap item xs={6} key={project.pjtNo}>
                        <ProjectBodyItem
                            project={project}
                            onDeleteProject={onDeleteProject}
                        />
                    </ItemWrap>
                ))}
            <ItemWrap item xs={6}>
                <ProjectAdd />
            </ItemWrap>
        </Grid>
    );
};

export default ProjectBody;
