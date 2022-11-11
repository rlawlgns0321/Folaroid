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
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
    createCertification,
    getCertification,
    deleteCertification,
} from '../../modules/intro/certification';
import { useLocation } from 'react-router-dom';

const initialState = {
    certificationDate: '',
    certificationDetail: '',
    certificationId: '',
    certificationIssuer: '',
    certificationName: '',
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
                        label="자격증명"
                        type="text"
                        placeholder="자격증명"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ width: '40%' }}
                        name="certificationName"
                        onChange={handleInputChange}
                        value={box.certificationName}
                    />
                </div>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <div style={{ width: '100%' }}>
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            sx={{ width: '40%' }}
                        >
                            <DatePicker
                                label="취득날짜"
                                name="certificationDate"
                                value={box.certificationDate}
                                onChange={(newValue) => {
                                    setBox({
                                        ...box,
                                        certificationDate: dayjs(newValue)
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
                </div>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <TextField
                        label="자격증 발급 기관"
                        type="text"
                        placeholder="입력"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ width: '40%' }}
                        name="certificationIssuer"
                        onChange={handleInputChange}
                        value={box.certificationIssuer}
                    />
                </div>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <TextField
                        label="자격증 고유번호"
                        type="text"
                        placeholder="입력"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ width: '40%' }}
                        name="certificationId"
                        onChange={handleInputChange}
                        value={box.certificationId}
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
                        label="취득 내용"
                        multiline
                        placeholder="취득내용에 관한 사항을 적어주세요."
                        style={{ width: '90%' }}
                        onChange={handleInputChange}
                        name="certificationDetail"
                        rows={2}
                        maxRows={4}
                        value={box.certificationDetail}
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

    const onDeleteClick = (introCertificationNo) => {
        dispatch(deleteCertification(introCertificationNo));
    };

    const rowItems = props.certification.map((item) => (
        <TableRow key={item.introCertificationNo}>
            <TableCell align="center">{item.certificationName}</TableCell>
            <TableCell align="center">{item.certificationDate}</TableCell>
            <TableCell align="center">{item.certificationIssuer}</TableCell>
            <TableCell align="center">{item.certificationId}</TableCell>
            <TableCell align="center">{item.certificationDetail}</TableCell>
            <TableCell
                style={{ display: 'flex', justifyContent: 'center' }}
                algin="center"
            >
                <Button
                    onClick={() => onDeleteClick(item.introCertificationNo)}
                >
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
                            <TableCell align="center">자격증명</TableCell>
                            <TableCell align="center">취득날짜</TableCell>
                            <TableCell align="center">
                                자격증 발급 기관
                            </TableCell>
                            <TableCell align="center">
                                자격증 고유번호
                            </TableCell>
                            <TableCell align="center">취득내용</TableCell>
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
    const certification = useSelector((state) => state.certification);
    const { pathname } = useLocation();
    const store = useStore();
    const introNo =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('certification', introNo);
        dispatch(getCertification(introNo));
    }, [dispatch, introNo]);

    if (certification.length !== 0 && mode === 'CREATE') {
        setMode('READ');
    } else if (
        Array.isArray(certification) &&
        certification.length === 0 &&
        mode === 'READ'
    ) {
        setMode('CREATE');
    }

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="자격증" />
                <Input
                    onCreate={(box) => {
                        dispatch(
                            createCertification({
                                introNo: introNo,
                                certificationDate: box.certificationDate,
                                certificationDetail: box.certificationDetail,
                                certificationIssuer: box.certificationIssuer,
                                certificationId: box.certificationId,
                                certificationName: box.certificationName,
                            })
                        );
                        setMode('READ');
                    }}
                ></Input>
            </Card>
        );
    } else if (mode === 'READ') {
        console.log({ certification });
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="자격증" />
                <Input
                    onCreate={(box) => {
                        dispatch(
                            createCertification({
                                introNo: introNo,
                                certificationDate: box.certificationDate,
                                certificationDetail: box.certificationDetail,
                                certificationIssuer: box.certificationIssuer,
                                certificationId: box.certificationId,
                                certificationName: box.certificationName,
                            })
                        );
                        setMode('READ');
                    }}
                ></Input>
                <Read certification={certification}></Read>
            </Card>
        );
    }

    return content;
}
export default View;
