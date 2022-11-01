import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Grid, IconButton, Skeleton } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemBox = styled.div`
    height: 130px;
    width: 95%;
    display: flex;
    margin: auto;
    flex-direction: column;
    margin-top: 10px;
    border-bottom: 2px solid #c8c8c8;
`;

const Header = styled.div`
    display: flex;
    direction: row;
    align-items: center;
`;

const ProjectSideItem = () => {
    return (
        <ItemBox>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Header>
                    <div>
                        <Skeleton
                            variant="rectangular"
                            width={60}
                            height={60}
                            sx={{ mr: 1, marginY: 'auto' }}
                        />
                    </div>
                    <div
                        className={css`
                            font-weight: bold;
                            font-size: 1.3rem;
                            color: #248bea;
                        `}
                    >
                        프로젝트명
                    </div>
                </Header>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Grid>
            <Grid sx={{ my: 1 }}>프로젝트 소개~~</Grid>
            <Grid>
                <div
                    className={css`
                        font-size: 0.7rem;
                        color: #838282;
                    `}
                >
                    마지막 업데이트
                </div>
            </Grid>
        </ItemBox>
    );
};

export default ProjectSideItem;
