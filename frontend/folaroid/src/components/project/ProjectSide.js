import React from 'react';
import ProjectSideItem from './ProjectSideItem';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectSide = ({ projects, onDeleteProject, isProjects }) => {
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
        <>
            {isProjects && (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence>
                        {projects.map((project, key) => (
                            <ProjectSideItem
                                key={project.pjtNo}
                                project={project}
                                onDeleteProject={onDeleteProject}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </>
    );
};

export default ProjectSide;
