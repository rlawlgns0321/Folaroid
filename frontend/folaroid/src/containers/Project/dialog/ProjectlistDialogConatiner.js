import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProjectListDialog from '../../../components/project/dialog/ProjectListDialog';
import { getReposThunk } from '../../../modules/github';

const ProjectlistDialogConatiner = ({open, handleClose}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReposThunk());
    }, [dispatch]);

    return (
        <div>
            <ProjectListDialog  open={open} onClose={handleClose}/>
        </div>
    );
};

export default ProjectlistDialogConatiner;
