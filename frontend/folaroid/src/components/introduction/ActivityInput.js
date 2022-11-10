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
import { useDispatch, useSelector } from 'react-redux';

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
        <CardContent>
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

                    <div style={{ width: '100%', margin: '20px' }}>
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
                    </div>

                    <Button type="submit" variant="contained">
                        제출
                    </Button>
                </div>
            </form>
        </CardContent>
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
        <CardContent>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">활동명</TableCell>
                            <TableCell align="center">관련 링크</TableCell>
                            <TableCell align="center">참여기간</TableCell>
                            <TableCell align="center">설명</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rowItems}</TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    );
}

function ViewName() {
    const activity = useSelector((state) => state.activity);
    const intro_no = useSelector((state) => state.auth.user.intro_no);
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
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="활동" />
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
        );
    } else if (mode === 'READ') {
        console.log({ activity });
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="활동" />
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
        );
    }

    return content;
}

export default ViewName;
