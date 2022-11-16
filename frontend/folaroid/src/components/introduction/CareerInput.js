import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    TextField,
    TableRow,
    TableCell,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    Paper,
    InputLabel,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
    createCareer,
    getCareer,
    deleteCareer,
} from '../../modules/intro/career';
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
    careerComName: '',
    careerDate: null,
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
        <IntroCardContent>
            <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <IntroInputLabel>회사명</IntroInputLabel>
                    <IntroTextField
                        type="text"
                        placeholder="입력"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ width: '40%' }}
                        name="careerComName"
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
                            <IntroInputLabel>근무날짜</IntroInputLabel>
                            <DatePicker
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
                                    <IntroTextField {...params} />
                                )}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <IntroInputLabel>직무</IntroInputLabel>
                    <IntroTextField
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
                        width: '100%',
                        marginBottom: '10px',
                    }}
                >
                    <IntroInputLabel>상세업무 및 성과</IntroInputLabel>
                    <IntroTextField
                        multiline
                        placeholder="근무내용에 관한 사항을 적어주세요."
                        style={{ width: '90%' }}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="careerResult"
                        rows={2}
                        maxRows={4}
                        value={box.careerResult}
                    />
                </div>
                <div
                    style={{
                        width: '100%',
                        marginBottom: '10px',
                    }}
                >
                    <IntroInputLabel>기타 설명</IntroInputLabel>
                    <IntroTextField
                        multiline
                        placeholder="추가 사항에 관한 사항을 적어주세요."
                        style={{ width: '90%' }}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="careerDetail"
                        rows={2}
                        maxRows={4}
                        value={box.careerDetail}
                    />
                </div>
                <div>
                    <Button type="submit" variant="contained">
                        제출
                    </Button>
                </div>
            </form>
        </IntroCardContent>
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
        <IntroCardContent>
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
        </IntroCardContent>
    );
}

function View() {
    const career = useSelector((state) => state.career);
    const { pathname } = useLocation();
    const store = useStore();
    const introNo =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
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
            <IntroBox>
                <CardHeader>경력사항</CardHeader>
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
            </IntroBox>
        );
    } else if (mode === 'READ') {
        console.log({ career });
        content = (
            <IntroBox>
                <CardHeader>경력사항</CardHeader>
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
            </IntroBox>
        );
    }

    return content;
}
export default View;
