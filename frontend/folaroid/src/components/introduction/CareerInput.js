import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardContent,
    TextField,
    TableRow,
    TableCell,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    Paper,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import {
    createCareer,
    getCareer,
    deleteCareer,
} from '../../modules/intro/career';

const initialState = {
    careerComName: '',
    careerDate: '',
    careerDetail: '',
    careerJob: '',
    careerResult: '',
};
function Input(props) {
    const [box, setBox] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBox({ ...box, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(box);
        props.onCreate(box);
        setBox(initialState);
    };

    return (
        <CardContent>
            <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <TextField
                        label="회사명"
                        type="text"
                        placeholder="입력"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ width: '40%' }}
                        name="careerComeName"
                        onChange={handleInputChange}
                        value={box.careerComName}
                    />
                </div>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <div style={{ width: '100%' }}>
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            sx={{ width: '40%' }}
                        >
                            <DatePicker
                                label="근무날짜"
                                name="careerDate"
                                value={box.careerDate}
                                onChange={(newValue) => {
                                    setBox({
                                        ...box,
                                        careerDate:
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
                </div>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <TextField
                        label="직무"
                        type="text"
                        placeholder="입력"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ width: '40%' }}
                        name="careerJob"
                        onChange={handleInputChange}
                        value={box.careerJob}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                    }}
                >
                    <TextField
                        label="상세업무 및 성과"
                        multiline
                        placeholder="근무내용에 관한 사항을 적어주세요."
                        style={{ width: '90%' }}
                        onChange={handleInputChange}
                        name="careerResult"
                        rows={2}
                        maxRows={4}
                        value={box.careerResult}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                    }}
                >
                    <TextField
                        label="기타 설명"
                        multiline
                        placeholder="추가 사항에 관한 사항을 적어주세요."
                        style={{ width: '90%' }}
                        onChange={handleInputChange}
                        name="careerDetail"
                        rows={2}
                        maxRows={4}
                        value={box.careerDetail}
                    />
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

function Read(props) {
    const dispatch = useDispatch();

    const onDeleteClick = (introCareerNo) => {
        dispatch(deleteCareer(introCareerNo));
    };

    const rowItems = props.career.map((item) => (
        <TableRow key={item.introCareerNo}>
            <TableCell align="center">{item.careerComName}</TableCell>
            <TableCell align="center">{item.careerDate}</TableCell>
            <TableCell align="center">{item.careerJob}</TableCell>
            <TableCell align="center">{item.careerResult}</TableCell>
            <TableCell align="center">{item.careerDetail}</TableCell>
            <TableCell
                style={{ display: 'flex', justifyContent: 'center' }}
                algin="center"
            >
                <Button onClick={() => onDeleteClick(item.introCareerNo)}>
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
                            <TableCell align="center">회사명</TableCell>
                            <TableCell align="center">근무날짜</TableCell>
                            <TableCell align="center">직무</TableCell>
                            <TableCell align="center">
                                상세업무 및 성과
                            </TableCell>
                            <TableCell align="center">기타 설명</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rowItems}</TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    );
}

function View() {
    const career = useSelector((state) => state.career);
    const introNo = useSelector((state) => state.auth.user.intro_no);
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('career', introNo);
        dispatch(getCareer(introNo));
    }, [dispatch, introNo]);

    if (career.length !== 0 && mode === 'CREATE') {
        setMode('READ');
    } else if (
        Array.isArray(career) &&
        career.length === 0 &&
        mode === 'READ'
    ) {
        setMode('CREATE');
    }

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="경력사항" />
                <Input
                    onCreate={(box) => {
                        dispatch(
                            createCareer({
                                introNo: introNo,
                                careerComName: box.careerComName,
                                careerDate: box.careerDate,
                                careerJob: box.careerJob,
                                careerResult: box.careerResult,
                                careerDetail: box.careerDetail,
                            })
                        );
                        setMode('READ');
                    }}
                ></Input>
            </Card>
        );
    } else if (mode === 'READ') {
        console.log({ career });
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="경력사항" />
                <Input
                    onCreate={(box) => {
                        dispatch(
                            createCareer({
                                introNo: introNo,
                                careerComName: box.careerComName,
                                careerDate: box.careerDate,
                                careerJob: box.careerJob,
                                careerResult: box.careerResult,
                                careerDetail: box.careerDetail,
                            })
                        );
                        setMode('READ');
                    }}
                ></Input>
                <Read career={career}></Read>
            </Card>
        );
    }

    return content;
}
export default View;
