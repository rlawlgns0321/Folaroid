import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProjectListDialog from '../../../components/project/dialog/ProjectListDialog';
import { getReposThunk, getRepoThunk } from '../../../modules/github';
import {
    createProjectThunk,
} from '../../../modules/portfolioProject';

const ProjectlistDialogConatiner = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.github.repos);
    const repo = useSelector((state) => state.github.repo);
    const pf = useSelector((state) => state.portfolio.pf);
    const navigate = useNavigate();

    useEffect(() => {
        if (open) dispatch(getReposThunk());
    }, [dispatch, open]);

    useEffect(() => {
        if (open) {
            dispatch(
                createProjectThunk({
                    pfNo: pf.pfNo,
                    repo,
                })
            );
            navigate('/projectinfo');
        }
    }, [repo, pf, open, dispatch, navigate]);

    const handleSubmit = () => {
        let pjtId = null;
        for (let i = 0; i < repos.length; i++) {
            if (repos[i].checked) pjtId = repos[i].id;
        }
        if (pjtId !== null) dispatch(getRepoThunk(pjtId));
    };

    return (
        <div>
            <ProjectListDialog
                repos={repos}
                open={open}
                onClose={handleClose}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default ProjectlistDialogConatiner;
