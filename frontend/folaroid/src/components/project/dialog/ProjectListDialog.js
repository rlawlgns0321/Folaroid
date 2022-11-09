import { Button, Dialog, Grid, Typography } from '@mui/material';
import React from 'react';
import ProjectListItemConatiner from '../../../containers/Project/dialog/ProjectListItemContainer';

const ProjectListDialog = ({ onClose, open, repos }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog fullWidth maxWidth={'md'} onClose={handleClose} open={open}>
            <Grid sx={{ my: 5, px: 3 }} container direction="column">
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
                <Grid
                    sx={{
                        height: '400px',
                        maxHeight: '400px',
                        overflowY: 'scroll',
                    }}
                >
                    {repos &&
                        repos.map((repo, key) => {
                            return (
                                <ProjectListItemConatiner
                                    key={key}
                                    num={key}
                                    repo={repo}
                                />
                            );
                        })}
                </Grid>
                <Grid
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                    }}
                >
                    <Button variant="contained">확인</Button>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default ProjectListDialog;
