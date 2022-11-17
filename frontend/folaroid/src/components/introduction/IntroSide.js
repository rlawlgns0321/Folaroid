import styled from '@emotion/styled';
import {
    Divider,
    List,
    // ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const IntroListItemText = styled(ListItemText)`
    padding-left: 20px ;
`

const IntroSide = () => {


    return (
        <div style={{ color: 'white'}}>
            <div style={{ maxheight: '8%', marginLeft: '20px' }}>
                <h1>자기소개 사항</h1>
            </div>
            <List>
                <ListItemButton disablePadding>
                    <IntroListItemText primary="개인 정보" />
                </ListItemButton>
                <ListItemButton disablePadding>
                    <IntroListItemText primary="사진" />
                </ListItemButton>
            </List>
            <Divider />
            <List>
                <h1 style={{ margin: '20px' }}>추가 사항</h1>
                {[
                    '슬로건',
                    '기술스택',
                    '학력',
                    '공인어학성적',
                    '링크',
                    '자격증',
                    '수상내역',
                    '활동',
                    '경력사항',
                ].map((text) => (
                    <ListItemButton key={text}>
                        <IntroListItemText primary={text} />
                    </ListItemButton>
                ))}
            </List>
        </div>
    );
};

export default IntroSide;
