import React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { css } from '@emotion/css';
const MyPageHeader = () => {
    const onClick = () => {
        alert('새 포트폴리오 작성 페이지로 이동');
    };
    return (
        <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            style={{ background: 'black', color: 'white' }}
        >
            <h1
                className={css`
                    font-size: 1.5rem;
                    font-weight: bold;
                    border: 0;
                    padding-left: 1rem;
                    padding-right: 1rem;
                }
                `}
            >
                마이페이지
            </h1>
            <Button
                variant="outlined"
                size="large"
                style={{ backgroundColor: 'white', color: 'black' }}
                onClick={onClick}
            >
                새 포트폴리오 작성
            </Button>
        </Grid>
    );
};

export default MyPageHeader;
