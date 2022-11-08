import React, { useState } from 'react';
import {
    Button,
    Box,
    Card,
    CardHeader,
    CardContent,
    TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createSlogan } from '../../modules/intro/slogan';

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
    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="슬로건" />
            <CardContent>
                <Box>{props.slogan}</Box>
            </CardContent>
        </Card>
    );
}

function ViewSlogan() {
    const sloganContent = useSelector((state) => state.slogan.sloganContent);
    const intro_no = useSelector((state) => state.auth.user.intro_no);
    console.log('이거', intro_no, sloganContent);
    const [mode, setMode] = useState('CREATE');
    const [slogan, setSlogan] = useState(sloganContent);
    const dispatch = useDispatch();

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <SloganInput
                onCreate={(_slogan) => {
                    dispatch(createSlogan({ introNo: intro_no, sloganContent: _slogan }));
                    setSlogan(_slogan)  
                    setMode('READ');
                }}
            ></SloganInput>
        );
    } else if (mode === 'READ') {
        console.log({ slogan });
        content = <ReadSlogan slogan={slogan}></ReadSlogan>;
    }

    return content;
}

export default ViewSlogan;
