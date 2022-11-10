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
import { useDispatch, useSelector } from 'react-redux';

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
        <CardContent>
            <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column'
                    }}
                >
                    <div style={{ width: '100%', margin:'20px' }}>
                        <InputLabel id="demo-simple-select-label">
                            외국어
                        </InputLabel>
                        <Select
                        style={{width: '90%'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="languageName"
                            value={language.languageName}
                            label="Age"
                            onChange={handleInputChange}
                        >
                            <MenuItem value={'english'}>영어</MenuItem>
                            <MenuItem value={'japanese'}>일본어</MenuItem>
                            <MenuItem value={'chinese'}>중국어</MenuItem>
                            <MenuItem value={'etc'}>기타</MenuItem>
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
                                        languageDate:
                                            dayjs(newValue).toISOString(),
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
        </CardContent>
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
        <CardContent>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell align="center">외국어</TableCell>
                            <TableCell align="center">시험명</TableCell>
                            <TableCell align="center">취득년월</TableCell>
                            <TableCell align="center">점수/등급</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rowItems}</TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    );
}

function ViewLanguage() {
    const language = useSelector((state) => state.language);
    const intro_no = useSelector((state) => state.auth.user.intro_no);
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('액티비티', intro_no);
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
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="공인어학성적" />
                <LanguageInput
                    onCreate={(_language) => {
                        dispatch(
                            createLanguage({
                                introNo: intro_no,
                                languageName: _language.languageName,
                                languageTestName: _language.languageTestName,
                                languageDate: _language.languageDate,
                                languageGrade: _language.languageGrade,
                            })
                        );
                        setMode('READ');
                    }}
                ></LanguageInput>
            </Card>
        );
    } else if (mode === 'READ') {
        console.log({ language });
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="활동" />
                <LanguageInput
                    onCreate={(_language) => {
                        dispatch(
                            createLanguage({
                                introNo: intro_no,
                                languageName: _language.languageName,
                                languageTestName: _language.languageTestName,
                                languageDate: _language.languageDate,
                                languageGrade: _language.languageGrade,
                            })
                        );
                    }}
                ></LanguageInput>
                <ReadLanguage language={language}></ReadLanguage>
            </Card>
        );
    }

    return content;
}

export default ViewLanguage;
