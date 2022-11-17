import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProjectThunk, portfolioProject } from '../../modules/portfolioProject';
import ProjectSide from '../../components/project/ProjectSide';

const ProjectSideContainer = () => {
    const { projects } = useSelector((state) => state.portfolioProject);

    const dispatch = useDispatch();

    const onDeleteProject = (id) => {
        dispatch(deleteProjectThunk(id));
    };

    return (
        <div>
            <ProjectSide projects={projects} onDeleteProject={onDeleteProject}/>
        </div>
    );
};

export default ProjectSideContainer;
