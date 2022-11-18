import React, { useEffect, useState } from 'react';
import CardContent from '@mui/material/CardContent';
import { Autocomplete, Avatar, TextField } from '@mui/material';
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

function StackInput(props) {
    const hash = useSelector((state) => state.stack.hash);
    const [stackData, setStackData] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHash());
    }, [dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onCreate(stackData);
        setStackData();
    };

    const onHashChange = (object, value) => {
        console.log(value.hashNo);
        setStackData(value.hashNo);
    };

    return (
        <IntroCardContent>
            <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                <Autocomplete
                    disablePortal
                    autoSelect
                    onChange={onHashChange}
                    options={hash}
                    getOptionLabel={(option) => option.hashName}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <button type="submit">제출</button>
            </form>
        </IntroCardContent>
    );
}

function ReadStack(props) {
    const dispatch = useDispatch();

    const handleDelete = (introStackNo) => {
        console.info('You clicked');
        dispatch(deleteStack(introStackNo));
    };

    const rowItems = props.stack.map((data) => (
        <Stack spacing={2} alignItems="center">
            <ListItem key={data.introStackNo}>
                <Chip
                    style={{ margin: '5px' }}
                    label={data.hashName}
                    onDelete={handleDelete(data.introStackNo)}
                    avatar={<Avatar src={data.hashImageLocation} />}
                    color="primary"
                    variant="outlined"
                ></Chip>
            </ListItem>
        </Stack>
    ));

    return (
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
                {rowItems}
            </Box>
        </IntroCardContent>
    );
}

function ViewName() {
    const stack = useSelector((state) => state.stack.stack);
    const { pathname } = useLocation();
    const store = useStore();
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStack(intro_no));
    }, [dispatch, intro_no]);

    if (stack.length !== 0 && mode === 'CREATE') {
        setMode('READ');
    } else if (Array.isArray(stack) && stack.length === 0 && mode === 'READ') {
        setMode('CREATE');
    }

    let content = null;
    if (mode === 'CREATE') {
        content = (
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
                        setMode('READ');
                    }}
                ></StackInput>
            </IntroBox>
        );
    } else if (mode === 'READ') {
        console.log({ stack });
        content = (
            <IntroBox>
                <CardHeader>스택</CardHeader>
                <StackInput
                    onCreate={(_hash) => {
                        dispatch(
                            createStack({
                                introNo: intro_no,
                                hashNo: _hash,
                            })
                        );
                        setMode('READ');
                    }}
                ></StackInput>
                <ReadStack stack={stack}></ReadStack>
            </IntroBox>
        );
    }

    return content;
}

export default ViewName;
