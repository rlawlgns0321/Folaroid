import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import ProjectAdd from './ProjectAdd';
import ProjectBodyItem from './ProjectBodyItem';

const ItemWrap = styled(Grid)`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const ProjectBody = ({ projects, onDeleteProject }) => {
    return (
        <Grid
            container
            component={motion.div}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {projects &&
                projects.map((project, key) => (
                    <ItemWrap
                        component={motion.div}
                        variants={item}
                        item
                        xs={6}
                        key={project.pjtNo}
                    >
                        <ProjectBodyItem
                            project={project}
                            onDeleteProject={onDeleteProject}
                            delay={key / 10}
                        />
                    </ItemWrap>
                ))}
            <ItemWrap component={motion.div} variants={item} item xs={6}>
                <ProjectAdd/>
            </ItemWrap>
        </Grid>
    );
};

export default ProjectBody;
