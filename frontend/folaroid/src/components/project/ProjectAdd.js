import { Grid } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import ProjectlistDialogConatiner from '../../containers/Project/dialog/ProjectlistDialogConatiner';

const AddBtn = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 240px;
    width: 355px;
    background-color:rgba(140, 140, 140, 0.35);
    border-radius: 10px;
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
            <ProjectlistDialogConatiner open={open} handleClose={handleClose}/>
        </div>
    );
};

export default ProjectAdd;
