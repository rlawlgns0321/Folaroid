import React, { useState } from 'react';
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
    MenuItem
} from '@mui/material';

function createData(language,title, degree) {
    return { language, title, degree };
}

const rows = [
    createData('영어', 'Opic', 'IH'),
];

const LanguageInputModule = () => {
    const [language, setLanguage] = useState('');
    const [title, setTitle] = useState('');
    const [degree, setDegree] = useState('');
    
    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };

    const handleChangeDegree = (event) => {
        setDegree(event.target.value);
    };


    
    const handleSubmit = (event) => {
        alert(`이름: ${language}`);
        event.preventDefault();
    };

    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader action={<Button>추가</Button>} title="공인어학성적" />
            <CardContent>
                <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}
                    >
                        <div style={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-label">
                                언어
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={language}
                                label="Age"
                                onChange={handleChangeLanguage}
                            >
                                <MenuItem value={'english'}>영어</MenuItem>
                                <MenuItem value={'japanese'}>일본어</MenuItem>
                                <MenuItem value={'chinese'}>중국어</MenuItem>
                                <MenuItem value={'etc'}>기타</MenuItem>
                            </Select>
                        </div>
                        <div>
                            <Button type="submit" variant="contained">
                                제출
                            </Button>
                        </div>
                    </div>
                </form>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">외국어</TableCell>
                                <TableCell align="center">시험명</TableCell>
                                <TableCell align="center">점수/등급</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.school}
                                    sx={{
                                        '&:last-child  td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell align="center">
                                        {row.language}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.degree}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default LanguageInputModule;
