import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import React from 'react';

const IntroSide = () => {
    return (
        <div>
            <List>
                <h1>개인 정보</h1>
                {['이름', '생년월일', '이메일', '연락처'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <h1>추가 사항</h1>
                {[
                    '사진',
                    '슬로건',
                    '기술스택',
                    '학력',
                    '공인어학성적',
                    '링크',
                    '자격증',
                    '수상내역',
                    '경력사항',
                    '기타',
                ].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default IntroSide;
