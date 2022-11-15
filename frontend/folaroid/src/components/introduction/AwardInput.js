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
    createAward,
    getAwards,
    deleteAward,
} from '../../modules/intro/awards';
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
    awardsDate: null,
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
        <IntroCardContent>
            <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                <div style={{ width: '100%', marginBottom: '10px' }}>
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
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <div style={{ width: '100%' }}>
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}
                            sx={{ width: '40%' }}
                        >
                            <IntroInputLabel>수상일자</IntroInputLabel>
                            <DatePicker
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
                        marginBottom: '10px',
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
                <div>
                    <Button type="submit" variant="contained">
                        제출
                    </Button>
                </div>
            </form>
        </IntroCardContent>
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
        <IntroCardContent>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">대회 이름</TableCell>
                            <TableCell align="center">수상일자</TableCell>
                            <TableCell align="center">대회 주최 기관</TableCell>
                            <TableCell align="center">설명</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rowItems}</TableBody>
                </Table>
            </TableContainer>
        </IntroCardContent>
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
            <IntroBox>
                <CardHeader>수상내역</CardHeader>

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
            </IntroBox>
        );
    } else if (mode === 'READ') {
        console.log({ award });
        content = (
            <IntroBox>
                <CardHeader>수상내역</CardHeader>

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
                <ReadAwards award={award}></ReadAwards>
            </IntroBox>
        );
    }

    return content;
}
export default ViewAwards;
