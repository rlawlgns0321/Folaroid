import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TItleWrap = styled.div`
    height: 8%;
    border: none;
    border-bottom: 1px solid #248bea;
    font-weight: bold;
    color: white;
    background-color: #248bea;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 0 10px 0 0;
`;

const Title = styled.input`
    width: 60%;
    outline: none;
    font-size: 1.7rem;
    color: white;
    background-color: #248bea;
    border: none;
`;

const TitleBtn = styled.button`
    outline: none;
    font-size: 1.7rem;
    color: white;
    background-color: #248bea;
    border: none;
    cursor: pointer;
`;

const Wrap = styled(Grid)`
    height: 100%;
    max-height: 100%;
`;

const Contents = ({ children, pfName, onChange, onSave }) => {
    const { pathname } = useLocation();

    return (
        <Wrap container direction="column">
            {pathname === '/intro' ? (
                <TItleWrap></TItleWrap>
            ) : (
                <TItleWrap>
                    <Title
                        value={pfName}
                        onChange={onChange}
                        spellCheck={false}
                    />
                    <TitleBtn onClick={onSave}>저장</TitleBtn>
                </TItleWrap>
            )}
            <Grid
                className={css`
                    height: 92%;
                    max-height: 92%;
                    overflow: auto;
                    -ms-overflow-style: none;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                `}
            >
                {children}
            </Grid>
        </Wrap>
    );
};

export default Contents;
