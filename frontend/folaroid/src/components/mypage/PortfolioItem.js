import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Wrap = styled(motion.div)`
    width: 80%;
    height: 80px;
    margin: auto;
    margin-top: 20px;
    background-color: #2c2b2b;
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`;

const Info = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    color: #248bea;
`;

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const PortfolioItem = ({ pf, onDeleteClick, onGetClick }) => {
    const navigate = useNavigate();

    return (
        <Wrap
            whileHover={{
                scale: [1.01, 1.03, 1.05],
                rotate: [-3, 3, 0],
                transition: { duration: 0.4 },
            }}
            className="item"
            variants={item}
        >
            <Info>
                <Title>{pf.pfName}</Title>
                <div>{pf.updated_at.substring(0, 10)}</div>
            </Info>
            <div>
                <IconButton edge="end" size="large" sx={{ color: 'white' }}>
                    <VisibilityIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                    onClick={onGetClick}
                    edge="end"
                    size="large"
                    sx={{ color: 'white' }}
                >
                    <CreateIcon fontSize="inherit" />
                </IconButton>
                <IconButton edge="end" size="large" sx={{ color: 'white' }}>
                    <ContentCopyIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                    edge="end"
                    size="large"
                    sx={{ color: 'white' }}
                    onClick={onDeleteClick}
                >
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
        </Wrap>
    );
};

export default PortfolioItem;
