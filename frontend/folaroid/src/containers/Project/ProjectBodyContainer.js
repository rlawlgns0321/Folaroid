import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectBody from '../../components/project/ProjectBody';
import {
    deleteProjectThunk,
    getProjectsThunk,
} from '../../modules/portfolioProject';

const ProjectBodyContainer = () => {
    const { projects } = useSelector((state) => state.portfolioProject);
    const pf = useSelector((state) => state.portfolio.pf);
    const dispatch = useDispatch();

    const onDeleteProject = (id) => {
        dispatch(deleteProjectThunk(id));
    };

    useEffect(() => {
        dispatch(getProjectsThunk(pf.pfNo));
    }, [dispatch, pf]);

    return (
        <div>
            <ProjectBody
                projects={projects}
                onDeleteProject={onDeleteProject}
            />
        </div>
    );
};

export default ProjectBodyContainer;
