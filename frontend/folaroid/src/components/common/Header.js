import { Grid } from '@mui/material';
import React from 'react';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import SignInDialog from '../dialog/SignInDialog';

const MenuBtn = styled.button`
    font-size: 1rem;
    font-weight: bold;
    color: black;
    border: 0;
    background-color: white;
`;

const RouteBtn = styled(Link)`
    font-size: 1rem;
    font-weight: bold;
    color: black;
    border: 0;
    background-color: white;
    text-decoration: none;
`;

const Header = ({ user, onLogout }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        onLogout();
    };

    return (
        <Grid
            sx={{
                width: '100vw',
                height: '7vh',
            }}
            container
            justifyContent="space-between"
            alignItems="center"
            direction="row"
        >
            <Link to="/">
                <button
                    className={css`
                        font-size: 2rem;
                        font-weight: bold;
                        color: black;
                        border: 0;
                        background-color: white;
                    `}
                >
                    folaroid
                </button>
            </Link>
            <Grid
                sx={{ width: '35vw' }}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <MenuBtn>
                    <RouteBtn to="/others">포트폴리오 열람</RouteBtn>
                </MenuBtn>
                <MenuBtn>포트폴리오 제작</MenuBtn>
                {user ? (
                    <MenuBtn onClick={handleLogout}>로그아웃</MenuBtn>
                ) : (
                    <MenuBtn onClick={handleClickOpen}>로그인</MenuBtn>
                )}
            </Grid>
            <SignInDialog open={open} onClose={handleClose} />
        </Grid>
    );
};

export default Header;
