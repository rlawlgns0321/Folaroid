import React, { useEffect, useState } from 'react';
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
import { updatePersonal, getPersonal } from '../../modules/intro/personal';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useLocation } from 'react-router-dom';

const initialState = {
    userBirth: '',
    userEmail: '',
    userName: '',
    userPhone: '',
};

function Update(props) {
    const person = props.person;
    const [personal, setPersonal] = useState(person);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPersonal({ ...personal, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onCreate(personal);
    };

    return (
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
                                name="userName"
                                size="medium"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '40%' }}
                                onChange={handleInputChange}
                                value={personal.userName}
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
                                    value={personal.userBirth}
                                    name="userBirth"
                                    onChange={(newValue) => {
                                        setPersonal({
                                            ...personal,
                                            userBirth: dayjs(newValue)
                                                .toISOString()
                                                .substring(0, 10),
                                        });
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
                                name="userEmail"
                                onChange={handleInputChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '40%' }}
                                value={personal.userEmail}
                            />
                        </div>

                        <div style={{ width: '100%', margin: '20px' }}>
                            <TextField
                                label="연락처"
                                type="tel"
                                name="userPhone"
                                onChange={handleInputChange}
                                placeholder="010-0000-0000"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '40%' }}
                                value={personal.userPhone}
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
                            <Button type="submit" variant="contained">
                                저장
                            </Button>
                        </div>
                    </div>
                </form>
            </Box>
        </CardContent>
    );
}

function ReadName(props) {
    const userInfo = props.user;

    return (
        <CardContent>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h3>이름</h3>
                <Box style={{ margin: '20px' }}>{userInfo.userName}</Box>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h3>생년월일</h3>
                <Box style={{ margin: '20px' }}>{userInfo.userBirth}</Box>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h3>이메일</h3>
                <Box style={{ margin: '20px' }}>{userInfo.userEmail}</Box>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h3>전화번호</h3>
                <Box style={{ margin: '20px' }}>{userInfo.userPhone}</Box>
            </div>
        </CardContent>
    );
}

function ViewName() {
    const personal = useSelector((state) => state.personal);
    const { pathname } = useLocation();
    const store = useStore();
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    const [mode, setMode] = useState('READ');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPersonal(intro_no));
    }, [dispatch, intro_no]);

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="개인 정보" />
                <Update
                    person={personal}
                    onCreate={(personal) => {
                        dispatch(
                            updatePersonal({
                                introNo: intro_no,
                                userBirth: personal.userBirth,
                                userEmail: personal.userEmail,
                                userName: personal.userName,
                                userPhone: personal.userPhone,
                            })
                        );
                        setMode('READ');
                    }}
                    personal={personal}
                ></Update>
            </Card>
        );
    } else if (mode === 'READ') {
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="개인 정보" />
                <ReadName user={personal}></ReadName>
                <div>
                    <Button onClick={() => setMode('CREATE')}>수정</Button>
                </div>
            </Card>
        );
    }

    return content;
}

export default ViewName;
