import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
    getActivity,
    createActivity,
    deleteActivity,
} from '../../modules/intro/activity';
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
    background-color: white;
`;

const IntroBox = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const initialState = {
    activityName: '',
    activityUrl: '',
    activityDate: dayjs('2000-01-01').toISOString(),
    activityDetail: '',
};

function ActivityInput(props) {
    const [activity, setActivity] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onCreate(activity);
        setActivity(initialState);
    };

    return (
        <IntroCardContent className="card-content">
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
                        <TextField
                            label="활동명"
                            placeholder="삼성청년소프트웨어아카데미"
                            size="medium"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={activity.activityName}
                            style={{ width: '90%' }}
                            name="activityName"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div style={{ width: '100%', margin: '20px' }}>
                        <TextField
                            label="관련 링크"
                            placeholder="https://"
                            size="medium"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ width: '90%' }}
                            name="activityUrl"
                            onChange={handleInputChange}
                            value={activity.activityUrl}
                        />
                    </div>
                    <div style={{ width: '100%', margin: '20px' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="활동시기"
                                inputFormat="YYYY년 MM월"
                                value={activity.activityDate}
                                onChange={(newValue) => {
                                    setActivity({
                                        ...activity,
                                        activityDate:
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

                    <div
                        style={{
                            diplay: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            margin: '20px',
                            justifyContent: 'space-between'
                        }}
                    >
                        <TextField
                            label="설명"
                            multiline
                            placeholder="활동사항에 관한 설명을 적어주세요."
                            style={{ width: '90%' }}
                            rows={2}
                            maxRows={4}
                            size="medium"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="activityDetail"
                            onChange={handleInputChange}
                            value={activity.activityDetail}
                        />
                        <Button style={{margin:'40px', marginBottom: '10px'}} type="submit" variant="contained">
                            저장
                        </Button>
                    </div>
                </div>
            </form>
        </IntroCardContent>
    );
}

function ReadSchool(props) {
    const dispatch = useDispatch();

    const onDeleteClick = (introActivityNo) => {
        dispatch(deleteActivity(introActivityNo));
    };

    const rowItems = props.activity.map((item) => (
        <TableRow key={item.introActivityNo}>
            <TableCell align="center">{item.activityName}</TableCell>
            <TableCell align="center">{item.activityUrl}</TableCell>
            <TableCell align="center">{item.activityDate}</TableCell>
            <TableCell align="center">{item.activityDetail}</TableCell>
            <TableCell
                style={{ display: 'flex', justifyContent: 'center' }}
                algin="center"
            >
                <Button onClick={() => onDeleteClick(item.introActivityNo)}>
                    삭제
                </Button>
            </TableCell>
        </TableRow>
    ));

    return (
        <IntroCardContent className="card-content">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">활동명</TableCell>
                            <TableCell align="center">관련 링크</TableCell>
                            <TableCell align="center">참여기간</TableCell>
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

function ViewName() {
    const activity = useSelector((state) => state.activity);
    const { pathname } = useLocation();
    const store = useStore();
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    console.log('인트로넘버', intro_no);
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('액티비티', intro_no);
        dispatch(getActivity(intro_no));
    }, [dispatch, intro_no]);

    if (activity.length !== 0 && mode === 'CREATE') {
        setMode('READ');
    } else if (
        Array.isArray(activity) &&
        activity.length === 0 &&
        mode === 'READ'
    ) {
        setMode('CREATE');
    }

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <IntroBox>
                <CardHeader>활동</CardHeader>
                <Card>
                    <ActivityInput
                        onCreate={(_activity) => {
                            dispatch(
                                createActivity({
                                    introNo: intro_no,
                                    activityName: _activity.activityName,
                                    activityUrl: _activity.activityUrl,
                                    activityDate: _activity.activityDate,
                                    activityDetail: _activity.activityDetail,
                                })
                            );
                            setMode('READ');
                        }}
                    ></ActivityInput>
                </Card>
            </IntroBox>
        );
    } else if (mode === 'READ') {
        console.log({ activity });
        content = (
            <IntroBox>
                <CardHeader>활동</CardHeader>
                <Card>
                    <ActivityInput
                        onCreate={(_activity) => {
                            dispatch(
                                createActivity({
                                    introNo: intro_no,
                                    activityName: _activity.activityName,
                                    activityUrl: _activity.activityUrl,
                                    activityDate: _activity.activityDate,
                                    activityDetail: _activity.activityDetail,
                                })
                            );
                        }}
                    ></ActivityInput>
                    <ReadSchool activity={activity}></ReadSchool>
                </Card>
            </IntroBox>
        );
    }

    return content;
}

export default ViewName;
