import styled from '@emotion/styled';
import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {Link} from 'react-router-dom';

const Wrap = styled.div`
    width: 90%;
    height: 150px;
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 0.0625rem solid #9e9e9e;
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

const BaseInfo = ({ baseIntro, image }) => {
    return (
        <Wrap>
            <Image>
                <Avatar src={image.imageLocation} alt="Profile" sx={{ width: 120, height: 120 }}>
                </Avatar>
            </Image>
            <Info>
                <InfoTitle>
                    <InfoName>{baseIntro.userName}</InfoName>
                    <IconButton aria-label="delete" size="small">
                        <Link to="/intro">
                            <EditIcon
                                sx={{ color: 'whitesmoke' }}
                                fontSize="small"
                            />
                        </Link>
                    </IconButton>
                </InfoTitle>
                <InfoSub>
                    <EmailIcon fontSize="small" sx={{ mr: 1 }} />
                    {baseIntro.userEmail}
                </InfoSub>
                <InfoSub>
                    <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                    {baseIntro.userPhone}
                </InfoSub>
            </Info>
        </Wrap>
    );
};

export default BaseInfo;
