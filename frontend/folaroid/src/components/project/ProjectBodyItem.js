import { Card, Grid, IconButton, Skeleton } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


const ProjectBodyItem = () => {
    return (
        <Card sx={{ minWidth: 355, width: 355 }}>
            <Skeleton variant="rectangular" width={355} height={200} />
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid sx={{pl:2, fontWeight: "bold"}}>프로젝트명</Grid>
                <Grid>
                    <IconButton aria-label="delete" size="large">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ProjectBodyItem;
