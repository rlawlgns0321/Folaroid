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
    createAward,
    getAwards,
    deleteAward,
} from '../../modules/intro/awards';
import { useLocation } from 'react-router-dom';

const initialState = {
    awardsDate: '',
    awardsDetail: '',
    awardsIssuer: '',
    awardsName: '',
};
function AwardInput(props) {
    const [award, setAward] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAward({ ...award, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(award);
        props.onCreate(award);
        setAward(initialState);
    };

    return (
        <CardContent>
            <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <TextField
                        label="대회 이름"
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
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <div style={{ width: '100%' }}>
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            sx={{ width: '40%' }}
                        >
                            <DatePicker
                                label="수상년월"
                                name="awardsDate"
                                value={award.awardsDate}
                                onChange={(newValue) => {
                                    setAward({
                                        ...award,
                                        awardsDate: dayjs(newValue)
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
                        label="대회 주최 기관"
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
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                    }}
                >
                    <TextField
                        label="설명"
                        multiline
                        placeholder="수상내역에 관한 사항을 적어주세요."
                        style={{ width: '90%' }}
                        onChange={handleInputChange}
                        name="awardsDetail"
                        rows={2}
                        maxRows={4}
                        value={award.awardsDetail}
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

function ReadAwards(props) {
    const dispatch = useDispatch();

    const onDeleteClick = (introAwardNo) => {
        dispatch(deleteAward(introAwardNo));
    };

    const rowItems = props.award.map((item) => (
        <TableRow key={item.introAwardsNo}>
            <TableCell align="center">{item.awardsName}</TableCell>
            <TableCell align="center">{item.awardsDate}</TableCell>
            <TableCell align="center">{item.awardsIssuer}</TableCell>
            <TableCell align="center">{item.awardsDetail}</TableCell>
            <TableCell
                style={{ display: 'flex', justifyContent: 'center' }}
                algin="center"
            >
                <Button onClick={() => onDeleteClick(item.introAwardsNo)}>
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
                            <TableCell align="center">대회 이름</TableCell>
                            <TableCell align="center">수상년월</TableCell>
                            <TableCell align="center">대회 주최 기관</TableCell>
                            <TableCell align="center">설명</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rowItems}</TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    );
}

function ViewAwards() {
    const award = useSelector((state) => state.awards);
    const { pathname } = useLocation();
    const store = useStore();
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('어워드', intro_no);
        dispatch(getAwards(intro_no));
    }, [dispatch, intro_no]);

    if (award.length !== 0 && mode === 'CREATE') {
        setMode('READ');
    } else if (Array.isArray(award) && award.length === 0 && mode === 'READ') {
        setMode('CREATE');
    }

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="수상내역" />
                <AwardInput
                    onCreate={(box) => {
                        dispatch(
                            createAward({
                                introNo: intro_no,
                                awardsDate: box.awardsDate,
                                awardsDetail: box.awardsDetail,
                                awardsIssuer: box.awardsIssuer,
                                awardsName: box.awardsName,
                            })
                        );
                        console.log(award);
                        setMode('READ');
                    }}
                ></AwardInput>
            </Card>
        );
    } else if (mode === 'READ') {
        console.log({ award });
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="수상내역" />
                <AwardInput
                    onCreate={(box) => {
                        dispatch(
                            createAward({
                                introNo: intro_no,
                                awardsDate: box.awardsDate,
                                awardsDetail: box.awardsDetail,
                                awardsIssuer: box.awardsIssuer,
                                awardsName: box.awardsName,
                            })
                        );
                        setMode('READ');
                    }}
                ></AwardInput>
                <ReadAwards award={award}></ReadAwards>
            </Card>
        );
    }

    return content;
}
export default ViewAwards;
