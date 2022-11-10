import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardContent,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {
    createSchool,
    getSchool,
    deleteSchool,
} from '../../modules/intro/school';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
    schoolName: '',
    schoolDegree: '',
    schoolMajor: '',
    schoolAdmissionDate: '',
    schoolGraduationDate: '',
    schoolCredit: '',
    schoolMaxCredit: '',
};

function SchoolInput(props) {
    const [school, setSchool] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSchool({ ...school, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('create', school);
        props.onCreate(school);
        setSchool(initialState);
    };

    return (
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
                            name="schoolName"
                            onChange={handleInputChange}
                            value={school.schoolName}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <TextField
                                label="학위"
                                placeholder="학위"
                                size="medium"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '90%' }}
                                name="schoolDegree"
                                onChange={handleInputChange}
                                value={school.schoolDegree}
                            />
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <TextField
                                label="전공"
                                placeholder="전공"
                                size="medium"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '90%' }}
                                name="schoolMajor"
                                onChange={handleInputChange}
                                value={school.schoolMajor}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                                style={{ width: '90%' }}
                                name="schoolCredit"
                                onChange={handleInputChange}
                                value={school.schoolCredit}
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
                                style={{ width: '90%' }}
                                name="schoolMaxCredit"
                                onChange={handleInputChange}
                                value={school.schoolMaxCredit}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    views={['year', 'month']}
                                    label="입학시기"
                                    inputFormat="YYYY년 MM월"
                                    value={school.schoolAdmissionDate}
                                    name="schoolAdmissionDate"
                                    onChange={(newValue) => {
                                        setSchool({
                                            ...school,
                                            schoolAdmissionDate:
                                                dayjs(newValue).toISOString(),
                                        });
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
                                    views={['year', 'month']}
                                    label="졸업일"
                                    inputFormat="YYYY년 MM월"
                                    value={school.schoolGraduationDate}
                                    name="schoolGraduationDate"
                                    onChange={(newValue) => {
                                        setSchool({
                                            ...school,
                                            schoolGraduationDate:
                                                dayjs(newValue).toISOString(),
                                        });
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
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
    );
}

function ReadSchool(props) {
    const dispatch = useDispatch();

    const onDeleteClick = (introSchoolNo) => {
        dispatch(deleteSchool(introSchoolNo));
    };

    const rowItems = props.school.map((item) => (
        <TableRow key={item.introSchoolNo}>
            <TableCell align="center">{item.schoolName}</TableCell>
            <TableCell align="center">{item.schoolMajor}</TableCell>
            <TableCell align="center">{item.schoolDegree}</TableCell>
            <TableCell align="center">{item.schoolAdmissionDate}</TableCell>
            <TableCell align="center">{item.schoolGraduationDate}</TableCell>
            <TableCell align="center">
                {item.schoolCredit}/{item.schoolMaxCredit}
            </TableCell>
            <TableCell
                style={{ display: 'flex', justifyContent: 'center' }}
                algin="center"
            >
                <Button onClick={() => onDeleteClick(item.introSchoolNo)}>
                    삭제
                </Button>
            </TableCell>
        </TableRow>
    ));

    return (
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
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rowItems}</TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    );
}

function ViewName() {
    const school = useSelector((state) => state.school);
    const intro_no = useSelector((state) => state.auth.user.intro_no);
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('스쿨', intro_no);
        dispatch(getSchool(intro_no));
    }, [dispatch, intro_no]);

    if (school.length !== 0 && mode === 'CREATE') {
        setMode('READ');
    } else if (
        Array.isArray(school) &&
        school.length === 0 &&
        mode === 'READ'
    ) {
        setMode('CREATE');
    }

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="학력" />
                <SchoolInput
                    onCreate={(_school) => {
                        dispatch(
                            createSchool({
                                introNo: intro_no,
                                schoolName: _school.schoolName,
                                schoolDegree: _school.schoolDegree,
                                schoolMajor: _school.schoolMajor,
                                schoolAdmissionDate:
                                    _school.schoolAdmissionDate,
                                schoolGraduationDate:
                                    _school.schoolGraduationDate,
                                schoolCredit: _school.schoolCredit,
                                schoolMaxCredit: _school.schoolMaxCredit,
                            })
                        );
                        setMode('READ');
                    }}
                ></SchoolInput>
            </Card>
        );
    } else if (mode === 'READ') {
        console.log({ school });
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="학력" />
                <SchoolInput
                    onCreate={(_school) => {
                        dispatch(
                            createSchool({
                                introNo: intro_no,
                                schoolName: _school.schoolName,
                                schoolDegree: _school.schoolDegree,
                                schoolMajor: _school.schoolMajor,
                                schoolAdmissionDate:
                                    _school.schoolAdmissionDate,
                                schoolGraduationDate:
                                    _school.schoolGraduationDate,
                                schoolCredit: _school.schoolCredit,
                                schoolMaxCredit: _school.schoolMaxCredit,
                            })
                        );
                    }}
                ></SchoolInput>
                <ReadSchool school={school}></ReadSchool>
            </Card>
        );
    }

    return content;
}

export default ViewName;
