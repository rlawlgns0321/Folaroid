import styled from '@emotion/styled';
import {
    Divider,
    List,
    // ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { introSelector } from '../../modules/intro/introSelector';

const IntroListItemText = styled(ListItemText)`
    padding-left: 20px;
`;

const IntroSide = () => {
    // const introSelector = useSelector((state) => state.introSelector)
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const onClick = (title) => {
        dispatch(introSelector.actions.onBoard(title));
    };

    const sides = [
        { key: 1, name: '슬로건', title: 'slogan' },
        { key: 2, name: '기술스택', title: 'stack' },
        { key: 3, name: '학력', title: 'school' },
        { key: 4, name: '공인어학성적', title: 'language' },
        { key: 5, name: '링크', title: 'archiving' },
        { key: 6, name: '자격증', title: 'certification' },
        { key: 7, name: '수상내역', title: 'awards' },
        { key: 8, name: '활동', title: 'activity' },
        { key: 9, name: '경력사항', title: 'career' },
    ];

    return (
        <div style={{ color: 'white', height: '100%' }}>
            {pathname === '/intro' ? (
                <div style={{ height: '9%' }}></div>
            ) : (
                <div style={{ height: '2%'}}></div>
            )}
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
                {sides.map((item) => (
                    <ListItemButton key={item.key}>
                        <IntroListItemText
                            onClick={() => onClick(item.title)}
                            primary={item.name}
                        />
                    </ListItemButton>
                ))}
            </List>
        </div>
    );
};
export default IntroSide;
