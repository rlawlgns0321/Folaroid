import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectListDialog from '../../../components/project/dialog/ProjectListDialog';
import { getReposThunk } from '../../../modules/github';

const ProjectlistDialogConatiner = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.github.repos);

    useEffect(() => {
        if (open) dispatch(getReposThunk());
    }, [dispatch, open]);

    return (
        <div>
            <ProjectListDialog
                repos={repos}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
};

export default ProjectlistDialogConatiner;
