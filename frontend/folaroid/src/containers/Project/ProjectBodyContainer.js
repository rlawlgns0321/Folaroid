import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AlertDialog from '../../components/dialog/AlertDialog';
import ProjectBody from '../../components/project/ProjectBody';
import {
    deleteProjectThunk,
    getProjectsThunk,
} from '../../modules/portfolioProject';

const ProjectBodyContainer = () => {
    const { projects } = useSelector((state) => state.portfolioProject);
    const dispatch = useDispatch();
    const {pfNo} = useParams();

    const onDeleteProject = (id) => {
        dispatch(deleteProjectThunk(id));
    };

    useEffect(() => {
        dispatch(getProjectsThunk(pfNo));
    }, [dispatch, pfNo]);

    return (
        <>
            <ProjectBody 
                projects={projects}
                onDeleteProject={onDeleteProject}
            />
        </>
    );
};

export default ProjectBodyContainer;