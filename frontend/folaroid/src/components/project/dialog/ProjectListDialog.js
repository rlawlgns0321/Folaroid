import { Button, Dialog, Grid, Typography } from '@mui/material';
import React from 'react';
import ProjectListItem from './ProjectListItem';

const ProjectListDialog = ({ onClose, open }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog fullWidth maxWidth={'md'} onClose={handleClose} open={open}>
            <Grid sx={{ my: 5, px: 3 }} container>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '2.1rem',
                        color: '#248BEA',
                        mb: 2,
                    }}
                >
                    프로젝트 선택
                </Typography>
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <Grid sx={{ display: 'flex', justifyContent: 'flex-end', width:'100%' }}>
                    <Button variant='contained'>확인</Button>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default ProjectListDialog;
