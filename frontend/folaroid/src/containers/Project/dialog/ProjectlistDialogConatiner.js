import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProjectListDialog from '../../../components/project/dialog/ProjectListDialog';
import { getReposThunk, getRepoThunk } from '../../../modules/github';
import { createProjectThunk } from '../../../modules/portfolioProject';

const useRepoPrev = (repo) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = repo;
    });
    return ref.current;
};

const ProjectlistDialogConatiner = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.github.repos);
    const repo = useSelector((state) => state.github.repo);
    const pf = useSelector((state) => state.portfolio.pf);
    const navigate = useNavigate();
    const repoPrev = useRepoPrev(repo);

    useEffect(() => {
        if (open) dispatch(getReposThunk());
    }, [dispatch, open]);

    useEffect(() => {
        if (open && repo !== repoPrev) {
            dispatch(
                createProjectThunk({
                    pfNo: pf.pfNo,
                    repo,
                })
            );
            navigate('/projectinfo');
        }
    }, [repo, pf, open, dispatch, navigate, repoPrev]);

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
