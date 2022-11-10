import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectListDialog from '../../../components/project/dialog/ProjectListDialog';
import { getReposThunk, getRepoThunk } from '../../../modules/github';

const ProjectlistDialogConatiner = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.github.repos);

    useEffect(() => {
        if (open) dispatch(getReposThunk());
    }, [dispatch, open]);

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
