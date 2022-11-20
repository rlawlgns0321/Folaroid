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
    createCertification,
    getCertification,
    deleteCertification,
} from '../../modules/intro/certification';
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
    certificationDate: null,
    certificationDetail: '',
    certificationId: '',
    certificationIssuer: '',
    certificationName: '',
};
export function CertificateInput() {
    const [certification, setCertification] = useState(initialState);
    const [date, setDate] = useState(null);

    const { pathname } = useLocation();
    const store = useStore();
    const dispatch = useDispatch();

    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;

    useEffect(() => {
        dispatch(getCertification(intro_no));
    }, [dispatch, intro_no]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCertification({ ...certification, [name]: value });
    };

    const onDeleteClick = () => {
        dispatch(introSelector.actions.outBoard('certification'));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = date ? dayjs(date).toISOString().substring(0, 10) : null;
        dispatch(
            createCertification({
                introNo: intro_no,
                certificationDate: value,
                certificationDetail: certification.certificationDetail,
                certificationIssuer: certification.certificationIssuer,
                certificationId: certification.certificationId,
                certificationName: certification.certificationName,
            })
        );
        setCertification(initialState);
    };

    return (
        <IntroBox>
            <CardHeader>
                <div>자격증</div>
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
                    ></div>
                    <div style={{ width: '100%', margin: '20px' }}>
                        <IntroInputLabel>자격증명</IntroInputLabel>
                        <IntroTextField
                            type="text"
                            placeholder="자격증명"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ width: '40%' }}
                            name="certificationName"
                            onChange={handleInputChange}
                            value={certification.certificationName}
                        />
                    </div>
                    <div style={{ width: '100%', margin: '20px' }}>
                        <div style={{ width: '100%' }}>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                sx={{ width: '40%' }}
                            >
                                <IntroInputLabel>취득일자</IntroInputLabel>
                                <DatePicker
                                    views={['year', 'month']}
                                    inputFormat="YYYY년 MM월"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <IntroTextField {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div style={{ width: '100%', margin: '20px' }}>
                        <IntroInputLabel>자격증 발급 기관</IntroInputLabel>
                        <IntroTextField
                            type="text"
                            placeholder="입력"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ width: '40%' }}
                            name="certificationIssuer"
                            onChange={handleInputChange}
                            value={certification.certificationIssuer}
                        />
                    </div>
                    <div style={{ width: '100%', margin: '20px' }}>
                        <IntroInputLabel>자격증 고유번호</IntroInputLabel>
                        <IntroTextField
                            type="text"
                            placeholder="입력"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ width: '40%' }}
                            name="certificationId"
                            onChange={handleInputChange}
                            value={certification.certificationId}
                        />
                    </div>
                    <div
                        style={{
                            width: '100%',
                            margin: '20px',
                        }}
                    >
                        <IntroInputLabel>취득 내용</IntroInputLabel>
                        <IntroTextField
                            multiline
                            placeholder="취득내용에 관한 사항을 적어주세요."
                            style={{ width: '90%' }}
                            onChange={handleInputChange}
                            name="certificationDetail"
                            rows={2}
                            maxRows={4}
                            value={certification.certificationDetail}
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
                </form>
            </IntroCardContent>
        </IntroBox>
    );
}

export function ReadCertificate() {
    const dispatch = useDispatch();
    const certification = useSelector((state) => state.certification);
    const [mode, setMode] = useState('OFF');

    const onDeleteClick = (introCertificationNo) => {
        dispatch(deleteCertification(introCertificationNo));
    };

    if (certification.length !== 0 && mode === 'OFF') {
        setMode('ON');
    } else if (
        Array.isArray(certification) &&
        certification.length === 0 &&
        mode === 'ON'
    ) {
        setMode('OFF');
    }

    let content = null;
    if (mode === 'ON') {
        content = (
            <IntroBox>
                <CardHeader>자격증</CardHeader>
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
                                        자격증명
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
                                        자격증 발급 기관
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        자격증 고유번호
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        취득내용
                                    </TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {certification.map((item) => (
                                    <TableRow key={item.introCertificationNo}>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.certificationName}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.certificationDate}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.certificationIssuer}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.certificationId}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.certificationDetail}
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
                                                        item.introCertificationNo
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

export default CertificateInput;
