import { Card, Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../dialog/AlertDialog';
import { motion } from 'framer-motion';

const ItemWrap = styled(motion.div)`
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
    cursor: pointer;
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

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <ItemWrap whileHover={{ scale: 1.05 }} variants={item} initial="hidden" animate="visible">
            <TitleBar>
                <Grid sx={{ pl: 2, fontWeight: 'bold', color: 'white' }}>
                    {project.pjtTitle}
                </Grid>
                <DeleteBtn onClick={onDeleteClick} />
            </TitleBar>
            <Img
                src={project.pjtOneImageLocation}
                onClick={() =>
                    navigate(`${project.pjtNo}?pjtId=${project.pjtId}`)
                }
            />
            <AlertDialog
                open={open}
                handleClose={handleClose}
                handleOn={handleOn}
                title="프로젝트 삭제"
                content={`${project.pjtTitle} 프로젝트를 삭제합니다.`}
            />
        </ItemWrap>
    );
};

export default ProjectBodyItem;
