import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProjectBody from '../../components/project/ProjectBody';

const ProjectBodyContainer = () => {
    const { projects } = useSelector((state) => state.portfolioProject);
    
    
    return (
        <div>
            <ProjectBody projects={projects} />
        </div>
    );
};

export default ProjectBodyContainer;
