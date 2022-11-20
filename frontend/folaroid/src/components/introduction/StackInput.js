import React, { useEffect, useState } from 'react';
import CardContent from '@mui/material/CardContent';
import {
    Autocomplete,
    Avatar,
    Button,
    createStyles,
    makeStyles,
    TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import styled from '@emotion/styled';
import {
    getHash,
    createStack,
    deleteStack,
    getStack,
} from '../../modules/intro/stack';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { introSelector } from '../../modules/intro/introSelector';

const CardHeader = styled.div`
    border-radius: 10px 10px 0 0;
    background-color: rgba(140, 140, 140, 0.35);
    padding: 15px;
    font-size: 1.5rem;
    font-weight: bolder;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const DeleteBtn = styled.button`
    border-radius: 50%;
    background-color: red;
    width: 18px;
    height: 18px;
    border: red;
`;

const IntroCardContent = styled(CardContent)`
    border-radius: 10px;
    background-color: rgba(44, 43, 43, 1);
    color: white;
    font-size: 1.1rem;
    padding: 20px 50px 20px 50px;
    border-radius: 0 0 10px 10px;
`;

const IntroBox = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const IntroAutocomplete = styled(Autocomplete)`
    .MuiAutocomplete-root {
        color: white;
        border-color: white;
        outline-color: white;
        background-color: white;

    }
    .MuiAutocomplete-inputRoot {
        color: white;
        border-color: white;
        outline-color: white;

    }
    .MuiAutocomplete-input {
        outline-color: white;
    }
`;

export function StackInput(props) {
    const hash = useSelector((state) => state.stack.hash);
    const [stackData, setStackData] = useState('');
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const store = useStore();
    const isSelected = props.select;
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;

    useEffect(() => {
        dispatch(getHash());
        dispatch(getStack(intro_no));
    }, [dispatch, intro_no]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            createStack({
                introNo: intro_no,
                hashNo: stackData,
            })
        );
        console.log(stackData);
        setStackData('');
    };

    const onHashChange = (object, value) => {
        setStackData(value.hashNo);
    };
    const onDeleteClick = () => {
        dispatch(introSelector.actions.outBoard('stack'));
    };

    let inputBox = null;
    if (isSelected) {
        inputBox = (
            <IntroBox>
                <CardHeader>
                    <div>기술스택</div>
                    <DeleteBtn onClick={() => onDeleteClick()}></DeleteBtn>
                </CardHeader>
                <IntroCardContent>
                    <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'column',
                            }}
                        >
                            <div style={{ width: '100%', margin: '20px' }}>
                                <IntroAutocomplete
                                    clearOnBlur
                                    disablePortal
                                    // autoSelect
                                    onChange={onHashChange}
                                    options={hash}
                                    getOptionLabel={(option) => option.hashName}
                                    sx={{ width: 300, color: 'white' }}
                                    renderInput={(params) => (
                                        <TextField
                                        sx={{ borderColor: 'white' }}
                                        {...params} />
                                    )}
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    margin: '20px',
                                    justifyContent: 'end',
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="neutral"
                                    style={{ fontWeight: 'bolder' }}
                                >
                                    저장
                                </Button>
                            </div>
                        </div>
                    </form>
                </IntroCardContent>
            </IntroBox>
        );
    }

    return inputBox;
}

export function ReadStack() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const store = useStore();
    const stack = useSelector((state) => state.stack.stack);
    const [mode, setMode] = useState('OFF');

    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    useEffect(() => {
        dispatch(getStack(intro_no));
    }, [dispatch, intro_no]);

    const handleDelete = (introStackNo) => () => {
        dispatch(deleteStack(introStackNo));
    };

    if (stack.length !== 0 && mode === 'OFF') {
        setMode('ON');
    } else if (Array.isArray(stack) && stack.length === 0 && mode === 'ON') {
        setMode('OFF');
    }

    let content = null;
    if (mode === 'ON') {
        content = (
            <IntroBox>
                <CardHeader>기술스택</CardHeader>
                <IntroCardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            p: 0.5,
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            width: '80%',
                            border: 'solid 1px gray',
                            borderRadius: '30px',
                        }}
                        component="ul"
                    >
                        {stack.map((data, index) => (
                            <Stack spacing={3} alignItems="center">
                                <ListItem key={index}>
                                    <Chip
                                        style={{ margin: '5px' }}
                                        label={data.hashName}
                                        onDelete={handleDelete(
                                            data.introStackNo
                                        )}
                                        avatar={
                                            <Avatar
                                                src={data.hashImageLocation}
                                            />
                                        }
                                        color="neutral"
                                        variant="contained"
                                    ></Chip>
                                </ListItem>
                            </Stack>
                        ))}
                    </Box>
                </IntroCardContent>
            </IntroBox>
        );
    } else if (mode === 'OFF') {
        <div></div>;
    }
    return content;
}

export function ViewStack(props) {
    const { pathname } = useLocation();
    const store = useStore();
    const isSelected = props.select;
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStack(intro_no));
    }, [dispatch, intro_no]);

    let inputBox = null;
    if (isSelected) {
        inputBox = (
            <div>
                <IntroBox>
                    <CardHeader>기술스택</CardHeader>
                    <StackInput
                        onCreate={(stackData) => {
                            dispatch(
                                createStack({
                                    introNo: intro_no,
                                    hashNo: stackData,
                                })
                            );
                            dispatch(introSelector.actions.outBoard('stack'));
                        }}
                    ></StackInput>
                </IntroBox>
            </div>
        );
    }

    return inputBox;
}

export default StackInput;
