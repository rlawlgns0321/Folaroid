import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    InputLabel,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {
    createSchool,
    getSchool,
    deleteSchool,
} from '../../modules/intro/school';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const IntroTextField = styled(TextField)`
    .MuiOutlinedInput-root {
        color: white;
        fieldset {
            border-color: white;
        }
        &:hover fieldset {
            border-color: white;
        }
        .Mui-focused fieldset {
            border-color: white;
        }
    }
`;

const IntroInputLabel = styled(InputLabel)`
    color: white;
    margin-bottom: 5px;
`;

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
                        <IntroInputLabel>학교명</IntroInputLabel>
                        <IntroTextField
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
                            <IntroInputLabel>학위</IntroInputLabel>
                            <IntroTextField
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
                            <IntroInputLabel>전공</IntroInputLabel>
                            <IntroTextField
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
                            <IntroInputLabel>학점</IntroInputLabel>
                            <IntroTextField
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
                            <IntroInputLabel>최대학점</IntroInputLabel>
                            <IntroTextField
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
                                <IntroInputLabel>입학시기</IntroInputLabel>
                                <DatePicker
                                    views={['year', 'month']}
                                    inputFormat="YYYY년 MM월"
                                    value={school.schoolAdmissionDate}
                                    name="schoolAdmissionDate"
                                    onChange={(newValue) => {
                                        setSchool({
                                            ...school,
                                            schoolAdmissionDate: dayjs(newValue)
                                                .toISOString()
                                                .substring(0, 10),
                                        });
                                    }}
                                    renderInput={(params) => (
                                        <IntroTextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                sx={{ width: '40%' }}
                            >
                                <IntroInputLabel>졸업시기</IntroInputLabel>
                                <DatePicker
                                    views={['year', 'month']}
                                    inputFormat="YYYY년 MM월"
                                    value={school.schoolGraduationDate}
                                    name="schoolGraduationDate"
                                    onChange={(newValue) => {
                                        setSchool({
                                            ...school,
                                            schoolGraduationDate: dayjs(
                                                newValue
                                            )
                                                .toISOString()
                                                .substring(0, 10),
                                        });
                                    }}
                                    renderInput={(params) => (
                                        <IntroTextField {...params} />
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
        </IntroCardContent>
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
        <IntroCardContent>
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
        </IntroCardContent>
    );
}

function ViewName() {
    const school = useSelector((state) => state.school);
    const { pathname } = useLocation();
    const store = useStore();
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
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
            <IntroBox>
                <CardHeader>학력</CardHeader>
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
            </IntroBox>
        );
    } else if (mode === 'READ') {
        console.log({ school });
        content = (
            <IntroBox>
                <CardHeader>학력</CardHeader>
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
                <ReadSchool school={school}></ReadSchool>
            </IntroBox>
        );
    }

    return content;
}

export default ViewName;
