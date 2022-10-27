import React from 'react';
import { Button, Dialog, Grid, Typography } from '@mui/material';
import { css } from '@emotion/css';
const SignInDialog = ({ onClose, open }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog fullWidth maxWidth={'xs'} onClose={handleClose} open={open}>
            <Grid sx={{ my: 5 }} container justifyContent={'center'}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                    Folaroid
                </Typography>
            </Grid>
            <Grid
                sx={{ mb: 5 }}
                container
                justifyContent="center"
                alignItems="center"
            >
                <img
                    className={css`
                        width: 79px;
                        height: 79px;
                    `}
                    alt="git"
                    src={'/public_assets/git-logo.png'}
                />
            </Grid>
            <Grid sx={{ mb: 5 }} container justifyContent={'center'}>
                <Button
                    sx={{
                        width: '300px',
                        height: '50px',
                        backgroundColor: 'black',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        borderRadius: '20px',
                        '&:hover':{
                            backgroundColor: '#505050'
                        }
                    }}
                    disableElevation
                    variant="contained"
                >
                    GitHub 로그인
                </Button>
            </Grid>
        </Dialog>
    );
};

export default SignInDialog;
