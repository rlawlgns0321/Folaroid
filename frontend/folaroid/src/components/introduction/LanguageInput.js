import React, { useEffect, useState } from 'react';
import {
    Button,
    CardContent,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    TableHead,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {
    getLanguage,
    createLanguage,
    deleteLanguage,
} from '../../modules/intro/language';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { introSelector } from '../../modules/intro/introSelector';

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

const IntroSelect = styled(Select)`
    color: white;
    &:before {
        border-color: white;
    }
    &:after {
        border-color: white;
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
    languageName: '',
    languageTestName: '',
    languageDate: null,
    languageGrade: '',
};

export function LanguageInput() {
    const [language, setLanguage] = useState(initialState);
    const [value, setValue] = useState(null);
    const { pathname } = useLocation();
    const store = useStore();
    const dispatch = useDispatch();

    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLanguage({ ...language, [name]: value });
    };

    const onDeleteClick = () => {
        dispatch(introSelector.actions.outBoard('language'));
    };

    useEffect(() => {
        dispatch(getLanguage(intro_no));
    }, [dispatch, intro_no]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const date = value ? dayjs(value).toISOString().substring(0, 10) : null;
        dispatch(
            createLanguage({
                introNo: intro_no,
                languageName: language.languageName,
                languageTestName: language.languageTestName,
                languageDate: date,
                languageGrade: language.languageGrade,
            })
        );
        setLanguage(initialState);
        setValue(null);
    };

    return (
        <IntroBox>
            <CardHeader>
                <div>공인어학성적</div>
                <DeleteBtn onClick={() => onDeleteClick()}></DeleteBtn>
            </CardHeader>
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
                            <IntroInputLabel>외국어</IntroInputLabel>
                            <IntroSelect
                                style={{ width: '90%' }}
                                name="languageName"
                                value={language.languageName}
                                label="Age"
                                onChange={handleInputChange}
                            >
                                <MenuItem value={'영어'}>영어</MenuItem>
                                <MenuItem value={'일본어'}>일본어</MenuItem>
                                <MenuItem value={'중국어'}>중국어</MenuItem>
                                <MenuItem value={'기타'}>기타</MenuItem>
                            </IntroSelect>
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <IntroInputLabel>시험명</IntroInputLabel>
                            <IntroTextField
                                placeholder="Opic"
                                size="medium"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={language.languageTestName}
                                style={{ width: '90%' }}
                                name="languageTestName"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <IntroInputLabel>취득일자</IntroInputLabel>

                                <DatePicker
                                    views={['year', 'month']}
                                    inputFormat="YYYY년 MM월"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <IntroTextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <IntroInputLabel>점수/등급</IntroInputLabel>
                            <IntroTextField
                                placeholder="IH"
                                size="medium"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={language.languageGrade}
                                style={{ width: '90%' }}
                                name="languageGrade"
                                onChange={handleInputChange}
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
                            <Button
                                type="submit"
                                variant="contained"
                                color="neutral"
                                style={{ fontWeight: 'bolder' }}
                            >
                                제출
                            </Button>
                        </div>
                    </div>
                </form>
            </IntroCardContent>
        </IntroBox>
    );
}

export function ReadLanguage() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const store = useStore();
    const language = useSelector((state) => state.language);
    const [mode, setMode] = useState('OFF');
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;

    const onDeleteClick = (introLanguageNo) => {
        dispatch(deleteLanguage(introLanguageNo));
    };

    useEffect(() => {
        dispatch(getLanguage(intro_no));
    }, [dispatch, intro_no]);

    if (language.length !== 0 && mode === 'OFF') {
        setMode('ON');
    } else if (
        Array.isArray(language) &&
        language.length === 0 &&
        mode === 'ON'
    ) {
        setMode('OFF');
    }

    let content = null;
    if (mode === 'ON') {
        content = (
            <IntroBox>
                <CardHeader>공인어학성적</CardHeader>
                <IntroCardContent>
                    <TableContainer>
                        <Table
                            style={{
                                backgroundColor: ' rgba(44, 43, 43, 1)',
                            }}
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        외국어
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        시험명
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        취득일자
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        점수/등급
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    ></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {language.map((item) => (
                                    <TableRow key={item.introLanguageNo}>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.languageName}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.languageTestName}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.languageDate &&
                                                item.languageDate.substring(
                                                    0,
                                                    7
                                                )}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.languageGrade}
                                        </TableCell>
                                        <TableCell
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                color: 'white',
                                            }}
                                            algin="center"
                                        >
                                            <Button
                                                size="small"
                                                style={{
                                                    color: 'white',
                                                }}
                                                onClick={() =>
                                                    onDeleteClick(
                                                        item.introLanguageNo
                                                    )
                                                }
                                            >
                                                삭제
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </IntroCardContent>
            </IntroBox>
        );
    }
    return content;
}

export default LanguageInput;
