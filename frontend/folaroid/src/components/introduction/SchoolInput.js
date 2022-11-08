import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {
    creaetSchool,
    getSchool,
    deleteSchool
} from '../../modules/intro/school'

function SchoolInput(props) {
    const [admission, setAdmission] = useState(dayjs('2000-01-01'));
    const [graduation, setGraduation] = useState(dayjs('2000-01-01'));

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const school = event.target[0].value;
        const major = event.target[2].value;
        const degree = event.target[4].value;
        const admission = event.target[6].value;
        const graduation = event.target[9].value;
        const credit = event.target[12].value;
        const maxCredit = event.target[14].value;
        props.onCreate(
            school,
            major,
            degree,
            admission,
            graduation,
            credit,
            maxCredit
        );
    };

    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="학력" />
            <CardContent>
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
                            <TextField
                                label="학교명"
                                type="text"
                                placeholder="학교명"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '40%' }}
                            />
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <TextField
                                label="학위"
                                placeholder="학위"
                                name="degree"
                                size="medium"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '40%' }}
                            />
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <TextField
                                label="전공"
                                placeholder="전공"
                                name="major"
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
                                    label="입학일"
                                    inputFormat="YYYY년 MM월"
                                    value={admission}
                                    name="admission"
                                    onChange={(newValue) => {
                                        setAdmission(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                sx={{ width: '40%' }}
                            >
                                <DatePicker
                                    label="졸업일"
                                    inputFormat="YYYY년 MM월"
                                    value={graduation}
                                    name="graduation"
                                    onChange={(newValue) => {
                                        setGraduation(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <TextField
                                label="학점"
                                type="number"
                                InputProps={{
                                    inputProps: { min: 0, max: 10, step: 0.1 },
                                }}
                                placeholder="학점"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '40%' }}
                            />
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <TextField
                                label="최대학점"
                                type="number"
                                InputProps={{
                                    inputProps: { min: 0, max: 10, step: 0.1 },
                                }}
                                placeholder="최대학점"
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
                                justifyContent: 'end',
                                margin: '20px',
                            }}
                        >
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

function ReadSchool(props) {
    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader
                action={
                    <Button
                        onClick={(event) => {
                            event.preventDefault();
                            props.onChangeMode('CREATE');
                        }}
                    >
                        추가
                    </Button>
                }
                title="학력"
            />
            <CardContent>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">학교</TableCell>
                                <TableCell align="center">전공</TableCell>
                                <TableCell align="center">학위</TableCell>
                                <TableCell align="center">입학</TableCell>
                                <TableCell align="center">졸업</TableCell>
                                <TableCell align="center">학점</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={props.school}>
                                <TableCell align="center">
                                    {props.school}
                                </TableCell>
                                <TableCell align="center">
                                    {props.major}
                                </TableCell>
                                <TableCell align="center">
                                    {props.degree}
                                </TableCell>
                                <TableCell align="center">
                                    {props.admission}
                                </TableCell>
                                <TableCell align="center">
                                    {props.graduation}
                                </TableCell>
                                <TableCell align="center">
                                    {props.credit}/{props.maxCredit}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}

function ViewName() {
    const [mode, setMode] = useState('CREATE');
    const [value, setValue] = useState([{}]);

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <SchoolInput
                onCreate={(
                    _school,
                    _major,
                    _degree,
                    _admission,
                    _graduation,
                    _credit,
                    _maxCredit
                ) => {
                    const newValue = {
                        school: _school,
                        major: _major,
                        degree: _degree,
                        admission: _admission,
                        graduation: _graduation,
                        credit: _credit,
                        maxCredit: _maxCredit,
                    };
                    setValue(newValue);
                    setMode('READ');
                    // newValues.push(newValue);
                    // setValues(newValues)
                }}
            ></SchoolInput>
        );
    } else if (mode === 'READ') {
        console.log({ value });
        content = (
            <ReadSchool
                school={value.school}
                major={value.major}
                degree={value.degree}
                admission={value.admission}
                graduation={value.graduation}
                credit={value.credit}
                maxCredit={value.maxCredit}
            ></ReadSchool>
        );
    }

    return content;
}

export default ViewName;
