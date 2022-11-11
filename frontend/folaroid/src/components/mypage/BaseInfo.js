import styled from '@emotion/styled';
import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Wrap = styled.div`
    width: 90%;
    height: 150px;
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 0.0625rem solid #9E9E9E;
`;

const Image = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Info = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
`;

const InfoTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const InfoName = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
`;

const InfoSub = styled.div`
    display: flex;
    align-items: center;
`;

const BaseInfo = () => {
    return (
        <Wrap>
            <Image>
                <Avatar alt="Profile" sx={{ width: 120, height: 120 }}>
                    Profile
                </Avatar>
            </Image>
            <Info>
                <InfoTitle>
                    <InfoName>김용환</InfoName>
                    <IconButton aria-label="delete" size="small">
                        <EditIcon sx={{color:'whitesmoke'}} fontSize="small" />
                    </IconButton>
                </InfoTitle>
                <InfoSub><EmailIcon fontSize='small' sx={{mr:1}}/>ymin96@naver.com</InfoSub>
                <InfoSub><PhoneIcon fontSize='small' sx={{mr:1}}/>010-1234-5678</InfoSub>
            </Info>
        </Wrap>
    );
};

export default BaseInfo;
