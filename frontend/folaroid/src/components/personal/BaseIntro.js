import { Grid } from '@mui/material';
import React from 'react';
import Intro from '../common/Intro';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const BaseIntro = ({ baseIntro }) => {
    const icons = [
        {
            icon: <PersonIcon fontSize="large" />,
            value: '이름',
            data: baseIntro.userName,
        },
        {
            icon: <PhoneAndroidIcon fontSize="large" />,
            value: '연락처',
            data: baseIntro.userPhone,
        },
        {
            icon: <EventIcon fontSize="large" />,
            value: '생년월일',
            data: baseIntro.userBirth,
        },
        {
            icon: <EmailIcon fontSize="large" />,
            value: '이메일',
            data: baseIntro.userEmail,
        },
        {
            icon: <GitHubIcon fontSize="large" />,
            value: 'Github 저장소',
            data: baseIntro.userGithubId,
        },
    ];

    const onClick = () => {
        alert('User Data 없으면 alert바를 통해 가게 해버릴까?');
    };

    return (
        <div
            className="box"
            style={{
                marginLeft: '10%',
                marginRight: '10%',
            }}
        >
            <Grid container spacing={2} style={{ margin: '1px' }}>
                <Grid item xs={12} md={12}>
                    <CreateIcon
                        onClick={onClick}
                        edge="end"
                        style={{ marginLeft: '90%' }}
                    ></CreateIcon>
                </Grid>
                {icons.map((value, key) => {
                    return (
                        <Grid key={key} item xs={6} md={6}>
                            <Intro>{value}</Intro>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default BaseIntro;
