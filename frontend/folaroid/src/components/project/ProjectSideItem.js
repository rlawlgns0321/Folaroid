import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Grid, IconButton, Skeleton } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AlertDialog from '../dialog/AlertDialog';

const ItemBox = styled.div`
    width: 95%;
    display: flex;
    margin: auto;
    flex-direction: column;
    margin-top: 10px;
    border-bottom: 1px solid #c8c8c8;
    padding-bottom: 20px;
`;

const Header = styled.div`
    display: flex;
    direction: row;
    align-items: center;
`;
const DeleteBtn = styled.div`
    width: 15px;
    height: 15px;
    background-color: red;
    cursor: pointer;
    border-radius: 50%;
    margin-right: 10px;
`;

const Img = styled.img`
    width: 60px;
    height: 40px;
    object-fit: contain;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.3);
    margin-right: 10px;
`;

const ProjectSideItem = ({ project, onDeleteProject }) => {

    const [open, setOpen] = useState();

    const handleClose = () => {
        setOpen(false);
    };

    const onDeleteClick = (e) => {
        e.stopPropagation();
        setOpen(true);
    };

    const handleOn = () => {
        onDeleteProject(project.pjtNo);
    };


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
                        <Img src={project.pjtOneImageLocation} />
                    </div>
                    <div
                        className={css`
                            font-weight: bold;
                            font-size: 1.3rem;
                            color: #248bea;
                            width: 10vw;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        `}
                    >
                        {project.pjtTitle}
                    </div>
                </Header>
                <DeleteBtn onClick={onDeleteClick} />
            </Grid>
            <Grid sx={{ my: 1, color: 'white' }}>{project.pjtSubtitle}</Grid>
            <Grid>
                <div
                    className={css`
                        font-size: 0.7rem;
                        color: #838282;
                    `}
                >
                    {project.pjtGithubUrl}
                </div>
            </Grid>

            <AlertDialog
                open={open}
                handleClose={handleClose}
                handleOn={handleOn}
                title="프로젝트 삭제"
                content={`${project.pjtTitle} 프로젝트를 삭제합니다.`}
            />
        </ItemBox>
    );
};

export default ProjectSideItem;
