import React, { useEffect, useState } from 'react';
import {
    Button,
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
    createAward,
    getAwards,
    deleteAward,
} from '../../modules/intro/awards';
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
    awardsDate: null,
    awardsDetail: '',
    awardsIssuer: '',
    awardsName: '',
};

export function AwardInput() {
    const [award, setAward] = useState(initialState);
    const [date, setDate] = useState(null);

    const { pathname } = useLocation();
    const store = useStore();
    const dispatch = useDispatch();

    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;

    useEffect(() => {
        dispatch(getAwards(intro_no));
    }, [dispatch, intro_no]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAward({ ...award, [name]: value });
    };

    const onDeleteClick = () => {
        dispatch(introSelector.actions.outBoard('awards'));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = date
            ? dayjs(date).add(1, 'day').toISOString().substring(0, 10)
            : null;
        dispatch(
            createAward({
                introNo: intro_no,
                awardsDate: value,
                awardsDetail: award.awardsDetail,
                awardsIssuer: award.awardsIssuer,
                awardsName: award.awardsName,
            })
        );
        setAward(initialState);
    };

    return (
        <IntroBox>
            <CardHeader>
                <div>수상 경력</div>
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
                            <IntroInputLabel>대회 이름</IntroInputLabel>
                            <IntroTextField
                                type="text"
                                placeholder="입력"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '40%' }}
                                name="awardsName"
                                onChange={handleInputChange}
                                value={award.awardsName}
                            />
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <div style={{ width: '100%' }}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                    sx={{ width: '40%' }}
                                >
                                    <IntroInputLabel>수상일자</IntroInputLabel>
                                    <DatePicker
                                        inputFormat="YYYY년 MM월 DD일"
                                        value={date}
                                        onChange={(newValue) => {
                                            setDate(newValue);
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
                        <div style={{ width: '100%', margin: '20px' }}>
                            <IntroInputLabel>대회 주최 기관</IntroInputLabel>
                            <IntroTextField
                                type="text"
                                placeholder="입력"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '40%' }}
                                name="awardsIssuer"
                                onChange={handleInputChange}
                                value={award.awardsIssuer}
                            />
                        </div>
                        <div
                            style={{
                                width: '100%',
                                margin: '20px',
                            }}
                        >
                            <IntroInputLabel>설명</IntroInputLabel>
                            <IntroTextField
                                multiline
                                placeholder="수상내역에 관한 사항을 적어주세요."
                                style={{ width: '90%' }}
                                onChange={handleInputChange}
                                name="awardsDetail"
                                rows={2}
                                maxRows={4}
                                value={award.awardsDetail}
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

export function ReadAwards() {
    const dispatch = useDispatch();
    const award = useSelector((state) => state.awards);
    const [mode, setMode] = useState('OFF');
    const { pathname } = useLocation();
    const store = useStore();

    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;

    useEffect(() => {
        dispatch(getAwards(intro_no));
    }, [dispatch, intro_no]);

    const onDeleteClick = (introAwardNo) => {
        dispatch(deleteAward(introAwardNo));
    };

    if (award.length !== 0 && mode === 'OFF') {
        setMode('ON');
    } else if (Array.isArray(award) && award.length === 0 && mode === 'ON') {
        setMode('OFF');
    }

    let content = null;
    if (mode === 'ON') {
        content = (
            <IntroBox>
                <CardHeader>수상내역</CardHeader>
                <IntroCardContent>
                    <TableContainer component={Paper}>
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
                                        대회 이름
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        수상일자
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        대회 주최 기관
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        설명
                                    </TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {award.map((item) => (
                                    <TableRow key={item.introAwardsNo}>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.awardsName}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.awardsDate}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.awardsIssuer}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.awardsDetail}
                                        </TableCell>
                                        <TableCell
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                            algin="center"
                                        >
                                            <Button
                                                style={{
                                                    color: 'white',
                                                }}
                                                size="small"
                                                onClick={() =>
                                                    onDeleteClick(
                                                        item.introAwardsNo
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

export default AwardInput;
