import { Card, Grid, IconButton } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const ItemWrap = styled.div`
    width: 355px;
    height: 240px;
    border-radius: 10px;
    //border: 1px solid #2c2b2b;
`;

const TitleBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 16%;
    width: 100%;
    background-color: rgba(140, 140, 140, 0.35);
    border-radius: 10px 10px 0 0;
`;

const Skeleton = styled.div`
    width: 100%;
    height: 84%;
    background-color: gray;
    border-radius: 0 0 10px 10px;
`;

const Img = styled.img`
    width: 100%;
    height: 84%;
    object-fit: contain;
    border-radius: 0 0 10px 10px;
    background-color: rgba(140, 140, 140, 0.85);
`;
const DeleteBtn = styled.div`
    width: 15px;
    height: 15px;
    background-color: red;
    cursor: pointer;
    border-radius: 50%;
    margin-right: 10px;
`;

const ProjectBodyItem = ({ project, onDeleteProject }) => {
    const navigate = useNavigate();

    const onDeleteClick = (e) => {
        e.stopPropagation();
        onDeleteProject(project.pjtNo);
    };

    return (
        <ItemWrap  onClick={() => navigate(`${project.pjtNo}?pjtId=${project.pjtId}`)}>
            <TitleBar>
                <Grid sx={{ pl: 2, fontWeight: 'bold', color: 'white' }}>
                    {project.pjtTitle}
                </Grid>
                <DeleteBtn onClick={onDeleteClick} />
            </TitleBar>
            <Img src = {project.pjtOneImageLocation}/>
        </ItemWrap>
    );
};

export default ProjectBodyItem;
