import { css } from '@emotion/css';
import { Checkbox, Grid } from '@mui/material';
import React from 'react';

const ProjectListItem = ({ repo, onSelect }) => {
    return (
        <div
            className={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 8px 0px;
                padding: 8px 0px;
                border-top: 1px solid #999999;
                border-bottom: 1px solid #999999;
                cursor: pointer;
                width: 100%;
                max-width: 100%;
            `}
            onClick={() => onSelect()}
        >
            <Grid
                sx={{ display: 'flex', direction: 'row', alignItems: 'center' }}
            >
                <Grid sx={{ display: 'flex', flexDirection: 'column', mr: 3 }}>
                    <Grid sx={{ fontSize: '1.2rem', color: '#248BEA', minWidth:'20%' }}>
                        {repo.name}
                    </Grid>
                    <Grid sx={{ fontSize: '0.8rem' }}>{repo.updated_at}</Grid>
                </Grid>
                <Grid>{repo.description}</Grid>
            </Grid>
            <Grid>
                <Checkbox
                    checked={repo.checked}
                />
            </Grid>
        </div>
    );
};

export default ProjectListItem;
