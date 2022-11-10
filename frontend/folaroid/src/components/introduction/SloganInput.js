import React, { useEffect, useState } from 'react';
import {
    Button,
    Box,
    Card,
    CardHeader,
    CardContent,
    TextField,
} from '@mui/material';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
    createSlogan,
    getSlogan,
    deleteSlogan,
} from '../../modules/intro/slogan';
import { useLocation } from 'react-router-dom';

function SloganInput(props) {

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
    const dispatch = useDispatch();

    const onDeleteClick = (introSloganNo) => {
        dispatch(deleteSlogan(introSloganNo));
    };

    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="슬로건" />
            <CardContent
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Box>{props.sloganContent}</Box>
                <Button onClick={() => onDeleteClick(props.introSloganNo)}>
                    삭제
                </Button>
            </CardContent>
        </Card>
    );
}

function ViewSlogan() {
    const slogan = useSelector((state) => state.slogan);
    const { pathname } = useLocation();
    const store = useStore();
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('이거', intro_no);
        dispatch(getSlogan(intro_no));
    }, [dispatch, intro_no]);

    let content = null;

    if (slogan.introSloganNo && mode === 'CREATE') {
        setMode('READ');
    } else if (!slogan.introSloganNo && mode === 'READ') {
        setMode('CREATE');
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
                    );
                    setMode('READ');
                }}
            ></SloganInput>
        );
    } else if (mode === 'READ') {
        console.log({ slogan });
        content = (
            <ReadSlogan
                sloganContent={slogan.sloganContent}
                introSloganNo={slogan.introSloganNo}
            ></ReadSlogan>
        );
    }

    return content;
}

export default ViewSlogan;
