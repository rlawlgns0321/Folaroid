import { Checkbox, Grid } from '@mui/material';
import React from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ProjectListItem = ({ repo }) => {
    return (
        <Grid
            container
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{
                my: 1,
                py: 1,
                borderTop: '1px solid #999999',
                borderBottom: '1px solid #999999',
            }}
        >
            <Grid
                sx={{ display: 'flex', direction: 'row', alignItems: 'center' }}
            >
                <Grid sx={{ display: 'flex', flexDirection: 'column', mr: 3 }}>
                    <Grid sx={{ fontSize: '1.2rem', color: '#248BEA' }}>
                        {repo.name}
                    </Grid>
                    <Grid sx={{ fontSize: '0.8rem' }}>{repo.updated_at}</Grid>
                </Grid>
                <Grid>{repo.description}</Grid>
            </Grid>
            <Grid>
                <Checkbox {...label} />
            </Grid>
        </Grid>
    );
};

export default ProjectListItem;
