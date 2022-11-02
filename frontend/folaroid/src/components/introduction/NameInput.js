import React, { useState, useEffect } from 'react';
import {
    Button,
    Box,
    Card,
    CardHeader,
    CardContent,
    TextField,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import axios from 'axios';

function BaseInput(props) {
    const [birth, setBirth] = useState(dayjs('2022-01-01'));

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const name = event.target[0].value;
        const birth = event.target[2].value;
        const email = event.target[5].value;
        const phone = event.target[7].value;
        console.log(name, birth, email, phone);
        props.onCreate(name, birth, email, phone);
    };

    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="기본 정보" />
            <CardContent>
                <Box>
                    <form style={{ margin: '10px' }} onSubmit={handleSubmit}>
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'column',
                            }}
                        >
                            <div style={{ width: '100%', margin: '20px' }}>
                                <TextField
                                    label="이름"
                                    placeholder="이름"
                                    name="name"
                                    size="medium"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{ width: '40%' }}
                                />
                            </div>
                            <div style={{ width: '100%', margin: '20px' }}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                    sx={{ width: '40%' }}
                                >
                                    <DatePicker
                                        label="생년월일"
                                        inputFormat="YYYY년 MM월 DD일"
                                        value={birth}
                                        name="birth"
                                        onChange={(newValue) => {
                                            setBirth(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} />
                                        )}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div style={{ width: '100%', margin: '20px' }}>
                                <TextField
                                    label="이메일"
                                    type="email"
                                    placeholder="example@ssafy.com"
                                    name="email"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{ width: '40%' }}
                                />
                            </div>

                            <div style={{ width: '100%', margin: '20px' }}>
                                <TextField
                                    label="연락처"
                                    type="tel"
                                    name="phone"
                                    placeholder="010-0000-0000"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{ width: '40%' }}
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    margin: '20px',
                                    justifyContent: 'end'
                                }}
                            >
                                <Button type="submit" variant="contained">
                                    저장
                                </Button>
                            </div>
                        </div>
                    </form>
                </Box>
            </CardContent>
        </Card>
    );
}

function ReadName(props) {
    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="기본정보" />
            <CardContent>
                <Box style={{ margin: '20px' }}>{props.name}</Box>
                <Box style={{ margin: '20px' }}>{props.birth}</Box>
                <Box style={{ margin: '20px' }}>{props.email}</Box>
                <Box style={{ margin: '20px' }}>{props.phone}</Box>
            </CardContent>
        </Card>
    );
}

function ViewName() {
    const [mode, setMode] = useState('CREATE');
    const [value, setValue] = useState([
        {
            github_id: '',
            name: '',
            birth: '',
            email: '',
            phone: '',
        },
    ]);

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <BaseInput
                onCreate={(_name, _birth, _email, _phone) => {
                    const newValue = {
                        name: _name,
                        birth: _birth,
                        email: _email,
                        phone: _phone,
                    };
                    setValue(newValue);
                    setMode('READ');
                    // newValues.push(newValue);
                    // setValues(newValues)
                }}
            ></BaseInput>
        );
    } else if (mode === 'READ') {
        console.log({ value });
        content = (
            <ReadName
                name={value.name}
                birth={value.birth}
                email={value.email}
                phone={value.phone}
            ></ReadName>
        );
    }

    return content;
}

export default ViewName;
