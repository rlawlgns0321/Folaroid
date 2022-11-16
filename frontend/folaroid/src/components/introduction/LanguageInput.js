import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    TableHead,
    Paper,
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

function LanguageInput(props) {
    const [language, setLanguage] = useState(initialState);
    const [value, setValue] = useState(null)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLanguage({ ...language, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const date = dayjs(value).toISOString().substring(0,10)
        props.onCreate(language, date);
        setLanguage(initialState);
        setValue(null)
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
                                    setValue(newValue)
                                }}
                                renderInput={(params) => (
                                    <IntroTextField {...params} readonly="true" />
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
                    <div>
                        <Button type="submit" variant="contained">
                            제출
                        </Button>
                    </div>
                </div>
            </form>
        </IntroCardContent>
    );
}
function ReadLanguage(props) {
    const dispatch = useDispatch();

    const onDeleteClick = (introLanguageNo) => {
        dispatch(deleteLanguage(introLanguageNo));
    };

    const rowItems = props.language.map((item) => (
        <TableRow key={item.introLanguageNo}>
            <TableCell align="center">{item.languageName}</TableCell>
            <TableCell align="center">{item.languageTestName}</TableCell>
            <TableCell align="center">{item.languageDate && item.languageDate.substring(0,7)}</TableCell>
            <TableCell align="center">{item.languageGrade}</TableCell>
            <TableCell
                style={{ display: 'flex', justifyContent: 'center' }}
                algin="center"
            >
                <Button onClick={() => onDeleteClick(item.introLanguageNo)}>
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
                            <TableCell align="center">외국어</TableCell>
                            <TableCell align="center">시험명</TableCell>
                            <TableCell align="center">취득일자</TableCell>
                            <TableCell align="center">점수/등급</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rowItems}</TableBody>
                </Table>
            </TableContainer>
        </IntroCardContent>
    );
}

function ViewLanguage() {
    const language = useSelector((state) => state.language);
    const { pathname } = useLocation();
    const store = useStore();
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    console.log('language no', intro_no);
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLanguage(intro_no));
    }, [dispatch, intro_no]);

    if (language.length !== 0 && mode === 'CREATE') {
        setMode('READ');
    } else if (
        Array.isArray(language) &&
        language.length === 0 &&
        mode === 'READ'
    ) {
        setMode('CREATE');
    }

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <IntroBox>
                <CardHeader>공인어학성적</CardHeader>
                <LanguageInput
                    onCreate={(language, date) => {
                        console.log('_language', language);
                        dispatch(
                            createLanguage({
                                introNo: intro_no,
                                languageName: language.languageName,
                                languageTestName: language.languageTestName,
                                languageDate: date,
                                languageGrade: language.languageGrade,
                            })
                        );
                        setMode('READ');
                    }}
                ></LanguageInput>
            </IntroBox>
        );
    } else if (mode === 'READ') {
        console.log('language', { language });
        content = (
            <IntroBox>
                <CardHeader>공인어학성적</CardHeader>
                <LanguageInput
                    onCreate={(language, date) => {
                        dispatch(
                            createLanguage({
                                introNo: intro_no,
                                languageName: language.languageName,
                                languageTestName: language.languageTestName,
                                languageDate: date,
                                languageGrade: language.languageGrade,
                            })
                        );
                        setMode('READ');
                    }}
                ></LanguageInput>
                <ReadLanguage language={language}></ReadLanguage>
            </IntroBox>
        );
    }

    return content;
}

export default ViewLanguage;
