import {
    Divider,
    List,
    // ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import React from 'react';

const IntroSide = () => {
    return (
        <div>
            <List>
                <ListItemButton disablePadding>
                    <ListItemText primary="개인 정보" />
                </ListItemButton>
                <ListItemButton disablePadding>
                    <ListItemText primary="사진" />
                </ListItemButton>
            </List>
            <Divider />
            <List>
                <h1 style={{margin: '10px'}}>추가 사항</h1>
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
                    <ListItemButton key={text} disablePadding>
                        <ListItemText primary={text} />
                    </ListItemButton>
                ))}
            </List>
        </div>
    );
};

export default IntroSide;
