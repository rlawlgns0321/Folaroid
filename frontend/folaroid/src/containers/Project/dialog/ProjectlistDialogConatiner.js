import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectListDialog from '../../../components/project/dialog/ProjectListDialog';
import { getReposThunk, getRepoThunk } from '../../../modules/github';
import { portfolioProject } from '../../../modules/portfolioProject';

const ProjectlistDialogConatiner = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.github.repos);
    const repo = useSelector((state) => state.github.repo);
    const pf = useSelector((state) => state.portfolio.pf);

    useEffect(() => {
        if (open) dispatch(getReposThunk());
    }, [dispatch, open]);

    useEffect(() => {
        console.log(pf);
        if (open) {
            dispatch(
                portfolioProject.actions.crateProject({
                    pfNo: pf.pfNo,
                    repo,
                })
            );
        }
    }, [repo, pf.pfNo, open, dispatch]);

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
