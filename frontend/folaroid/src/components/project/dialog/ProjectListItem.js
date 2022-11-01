import { Checkbox, Grid } from '@mui/material';
import React from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ProjectListItem = () => {
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
                        프로젝트 이름
                    </Grid>
                    <Grid sx={{ fontSize: '0.8rem' }}>마지막 업데이트</Grid>
                </Grid>
                <Grid>프로젝트 설명~~~</Grid>
            </Grid>
            <Grid>
                <Checkbox {...label} />
            </Grid>
        </Grid>
    );
};

export default ProjectListItem;
