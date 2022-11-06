import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { createPersonal } from '../../modules/intro/personal';

const initialState = {
    intro_personal_data_no: null,
    persona_data_birth: '',
    personal_data_email: '',
    personal_data_name: '',
    personal_data_phone: '',
};

function PersonalInput(props) {
    const [birth, setBirth] = useState(dayjs('2000-01-01'));
    const [personal, setPersonal] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPersonal({ ...personal, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
        // const name = event.target[0].value;
        const birth = event.target[2].value;
        // const email = event.target[5].value;
        // const phone = event.target[7].value;
        console.log(birth);
        setPersonal({ ...personal, personal_data_birth: birth });
        console.log(personal);
        props.onCreate(personal);
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
                                    name="personal_data_name"
                                    size="medium"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{ width: '40%' }}
                                    onChange={handleInputChange}
                                    value={personal.personal_data_name || ''}
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
                                        name="personal_data_birth"
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
                                    name="personal_data_email"
                                    onChange={handleInputChange}
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
                                    name="personal_data_phone"
                                    onChange={handleInputChange}
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
    const [value, setValue] = useState({
        intro_personal_data_no: null,
        persona_data_birth: '',
        personal_data_email: '',
        personal_data_name: '',
        personal_data_phone: '',
    });
    const dispatch = useDispatch();

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <PersonalInput
                onCreate={(personal) => {
                    console.log(personal);
                    const newValue = {
                        intro_personal_data_no: personal.intro_personal_data_no,
                        personal_data_birth: personal.personal_data_birth,
                        personal_data_email: personal.personal_data_email,
                        personal_data_name: personal.personal_data_name,
                        personal_data_phone: personal.personal_data_phone,
                    };
                    console.log(newValue);
                    setValue(newValue);
                    console.log({value});
                    dispatch(createPersonal({ personal }))
                        .then((data) => {
                            console.log(data);
                            setValue({
                                intro_personal_data_no:
                                    data.intro_personal_data_no,
                                persona_data_birth: data.persona_data_birth,
                                personal_data_email: data.personal_data_email,
                                personal_data_name: data.personal_data_name,
                                personal_data_phone: data.personal_data_phone,
                            });
                            setMode('READ');
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                    
                    setMode('READ');
                    // newValues.push(newValue);
                    // setValues(newValues)
                }}
            ></PersonalInput>
        );
    } else if (mode === 'READ') {
        console.log({ value });
        console.log(value.personal_data_name)
        content = (
            <ReadName
                name={value.personal_data_name}
                birth={value.persona_data_birth}
                email={value.personal_data_email}
                phone={value.personal_data_phone}
            ></ReadName>
        );
    }

    return content;
}

export default ViewName;
