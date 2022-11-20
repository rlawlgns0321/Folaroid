import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteProjectThunk,
    portfolioProject,
} from '../../modules/portfolioProject';
import ProjectSide from '../../components/project/ProjectSide';

const ProjectSideContainer = () => {
    const { projects, isProjects } = useSelector(
        (state) => state.portfolioProject
    );

    const dispatch = useDispatch();

    const onDeleteProject = (id) => {
        dispatch(deleteProjectThunk(id));
    };

    return (
        <div>
            <ProjectSide
                projects={projects}
                onDeleteProject={onDeleteProject}
                isProjects={isProjects}
            />
        </div>
    );
};

export default ProjectSideContainer;
