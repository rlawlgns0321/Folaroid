import React from 'react';
import ProjectSideItem from './ProjectSideItem';
import { motion } from 'framer-motion';

const ProjectSide = ({ projects, onDeleteProject }) => {
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

   

    return (
        <motion.div variants={container} initial="hidden" animate="visible">
            {projects &&
                projects.map((project, key) => (
                    <ProjectSideItem
                        key={project.pjtNo}
                        project={project}
                        onDeleteProject={onDeleteProject}
                    />
                ))}
        </motion.div>
    );
};

export default ProjectSide;
