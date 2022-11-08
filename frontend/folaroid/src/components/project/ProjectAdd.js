import { Grid } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import ProjectListDialog from './dialog/ProjectListDialog';
import ProjectlistDialogConatiner from '../../containers/Project/dialog/ProjectlistDialogConatiner';

const AddBtn = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 252px;
    width: 355px;
    background-color: #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
`;

const ProjectAdd = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AddBtn onClick={handleClickOpen}>
                <AddIcon />
            </AddBtn>
            <ProjectlistDialogConatiner open={open} onClose={handleClose}/>
        </div>
    );
};

export default ProjectAdd;
