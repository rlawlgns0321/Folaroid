import React, { useEffect } from 'react';
import { createStore } from 'polotno/model/store';
import ProjectInfo from '../../components/projectinfo/ProjectInfo';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { getProjectThunk, portfolioProject } from '../../modules/portfolioProject';
import { getRepoThunk, github } from '../../modules/github';

const ProjectInfoContainer = () => {
    const store = createStore({ key: 'zkx11y_517U965lTjfcT' });
    const dispatch = useDispatch();
    const {pfNo, pjtNo} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch(getProjectThunk(pjtNo));
        dispatch(getRepoThunk(searchParams.get('pjtId')))
        return () => {
            dispatch(portfolioProject.actions.clearProject());
            dispatch(github.actions.clearRepo());
        }
    })

    return (
        <>
            <ProjectInfo store={store}/>
        </>
    );
};

export default ProjectInfoContainer;
