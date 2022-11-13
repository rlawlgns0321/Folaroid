import { Grid } from '@mui/material';
import React from 'react';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import SignInDialog from '../dialog/SignInDialog';
import AccountMenu from './AccountMenu';

const MenuBtn = styled.button`
    font-size: 1rem;
    font-weight: bold;
<<<<<<< HEAD
    color: white;
=======
    font-family: 'S-CoreDream-3Light';
    color: black;
>>>>>>> origin/develop
    border: 0;
    background-color: inherit;
`;

const RouteBtn = styled(Link)`
    font-size: 1rem;
    font-weight: bold;
<<<<<<< HEAD
    color: white;
=======
    font-family: 'S-CoreDream-3Light';

    color: black;
>>>>>>> origin/develop
    border: 0;
    text-decoration: none;
    background-color: inherit;
`;

const Header = ({ user, onLogout }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid
            sx={{
                width: '100vw',
                height: '7vh',
                px: 3,
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
                        color: white;
                        border: 0;
                        background-color: inherit;
                    `}
                >
                    Folaroid
                </button>
            </Link>
            <Grid
                sx={{ width: '25vw' }}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <MenuBtn>
                    <RouteBtn to="/others">포트폴리오 열람</RouteBtn>
                </MenuBtn>
                <MenuBtn>
                    <RouteBtn to="/portfolio/intro">포트폴리오 제작</RouteBtn>
                </MenuBtn>
                {user ? (
                    <AccountMenu onLogout={onLogout} />
                ) : (
                    <MenuBtn onClick={handleClickOpen}>로그인</MenuBtn>
                )}
            </Grid>
            <SignInDialog open={open} onClose={handleClose} />
        </Grid>
    );
};

export default Header;
