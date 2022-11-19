import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
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
    exit: { scale: 0 },
};

const ProjectBody = ({ projects, onDeleteProject, isProjects }) => {
    return (
        <>
            {isProjects && (
                <Grid
                    container
                    component={motion.div}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence>
                        {projects.map((project, key) => (
                            <ItemWrap
                                component={motion.div}
                                variants={item}
                                exit={{ scale: 0 }}
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
                    </AnimatePresence>
                    <ItemWrap
                        component={motion.div}
                        variants={item}
                        item
                        xs={6}
                    >
                        <ProjectAdd />
                    </ItemWrap>
                </Grid>
            )}
        </>
    );
};

export default ProjectBody;
