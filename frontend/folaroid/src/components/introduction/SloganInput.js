import React, { useEffect, useState } from 'react';
import {
    Button,
    Box,
    Card,
    CardHeader,
    CardContent,
    TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
    createSlogan,
    getSlogan,
    deleteSlogan,
} from '../../modules/intro/slogan';

function SloganInput(props) {
    const intro_no = useSelector((state) => state.auth.user.intro_no);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSlogan(intro_no));
    }, [dispatch, intro_no]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const content = event.target[0].value;
        props.onCreate(content);
    };

    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="슬로건" />
            <CardContent>
                <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}
                    >
                        <div style={{ width: '100%' }}>
                            <TextField
                                label="슬로건"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                multiline
                                placeholder="취준생 화이팅!"
                                style={{ width: '90%' }}
                                rows={2}
                                maxRows={4}
                            />
                        </div>
                        <div>
                            <Button type="submit" variant="contained">
                                제출
                            </Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

function ReadSlogan(props) {
    const intro_no = useSelector((state) => state.auth.user.intro_no);
    const slogan = useSelector((state) => state.slogan);
    const dispatch = useDispatch();

    const onDeleteClick = (introSloganNo) => {
        dispatch(deleteSlogan(introSloganNo));
        console.log('ondeleteclick', slogan);
    };

    useEffect(() => {
        console.log('이거', intro_no);
        dispatch(getSlogan(intro_no));
    }, [dispatch, intro_no]);

    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="슬로건" />
            <CardContent
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Box>{slogan.sloganContent}</Box>
                <Button onClick={() => onDeleteClick(slogan.introSloganNo)}>
                    삭제
                </Button>
            </CardContent>
        </Card>
    );
}

function ViewSlogan() {
    const slogan = useSelector((state) => state.slogan);
    const intro_no = useSelector((state) => state.auth.user.intro_no);
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('이거', intro_no);
        dispatch(getSlogan(intro_no));
    }, [dispatch, intro_no]);

    let content = null;

    if (slogan.sloganContent && mode === 'CREATE') {
        setMode('READ');
    } else if (slogan.sloganContent === '' && mode === 'READ') {
        setMode('CREATE');
    }

    function checkMode() {
        if (slogan.sloganContent === '' && mode === 'READ') {
            setMode('CREATE');
        }
    }

    if (mode === 'CREATE') {
        content = (
            <SloganInput
                onCreate={(_slogan) => {
                    dispatch(
                        createSlogan({
                            introNo: intro_no,
                            sloganContent: _slogan,
                        })
                    ).then(dispatch(getSlogan(intro_no)).then(setMode('READ')));
                }}
            ></SloganInput>
        );
    } else if (mode === 'READ') {
        console.log({ slogan });
        content = (
            <ReadSlogan
                onClick={(box) => {
                    setMode(box);
                    console.log('delete', mode);
                    console.log('delete', slogan);
                    checkMode();
                }}
            ></ReadSlogan>
        );
    }

    return content;
}

export default ViewSlogan;
