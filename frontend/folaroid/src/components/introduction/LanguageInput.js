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
`


const IntroCardContent = styled(CardContent)`
    background-color: rgba(186, 183, 183, 1);
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
    languageDate: '',
    languageGrade: '',
};

function LanguageInput(props) {
    const [language, setLanguage] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLanguage({ ...language, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onCreate(language);
        setLanguage(initialState);
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
                        <InputLabel id="demo-simple-select-label">
                            외국어
                        </InputLabel>
                        <Select
                            style={{ width: '90%' }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="languageName"
                            value={language.languageName}
                            label="Age"
                            onChange={handleInputChange}
                        >
                            <MenuItem value={'영어'}>영어</MenuItem>
                            <MenuItem value={'일본어'}>일본어</MenuItem>
                            <MenuItem value={'중국어'}>중국어</MenuItem>
                            <MenuItem value={'기타'}>기타</MenuItem>
                        </Select>
                    </div>
                    <div style={{ width: '100%', margin: '20px' }}>
                        <TextField
                            label="시험명"
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
                            <DatePicker
                                label="취득년월"
                                inputFormat="YYYY년 MM월"
                                value={language.languageDate}
                                onChange={(newValue) => {
                                    setLanguage({
                                        ...language,
                                        languageDate: dayjs(newValue)
                                            .toISOString()
                                            .substring(0, 10),
                                    });
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </LocalizationProvider>
                    </div>
                    <div style={{ width: '100%', margin: '20px' }}>
                        <TextField
                            label="점수/등급"
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
            <TableCell align="center">{item.languageDate}</TableCell>
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
                            <TableCell align="center">취득년월</TableCell>
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
                <Card>
                    <LanguageInput
                        onCreate={(_language) => {
                            console.log('_language', _language);
                            dispatch(
                                createLanguage({
                                    introNo: intro_no,
                                    languageName: _language.languageName,
                                    languageTestName:
                                        _language.languageTestName,
                                    languageDate: _language.languageDate,
                                    languageGrade: _language.languageGrade,
                                })
                            );
                            setMode('READ');
                        }}
                    ></LanguageInput>
                </Card>
            </IntroBox>
        );
    } else if (mode === 'READ') {
        console.log('language', { language });
        content = (
            <IntroBox>
                <CardHeader>공인어학성적</CardHeader>
                <Card>
                    <LanguageInput
                        onCreate={(_language) => {
                            console.log('_language', _language);
                            dispatch(
                                createLanguage({
                                    introNo: intro_no,
                                    languageName: _language.languageName,
                                    languageTestName:
                                        _language.languageTestName,
                                    languageDate: _language.languageDate,
                                    languageGrade: _language.languageGrade,
                                })
                            );
                            setMode('READ');
                        }}
                    ></LanguageInput>
                    <ReadLanguage language={language}></ReadLanguage>
                </Card>
            </IntroBox>
        );
    }

    return content;
}

export default ViewLanguage;
