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
    InputLabel,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
    getActivity,
    createActivity,
    deleteActivity,
} from '../../modules/intro/activity';
import { useDispatch, useSelector, useStore } from 'react-redux';
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

const IntroCardContent = styled.div`
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
    activityName: '',
    activityUrl: '',
    activityDate: null,
    activityDetail: '',
};

export function ActivityInput() {
    const [activity, setActivity] = useState(initialState);
    const [date, setDate] = useState(null);

    const { pathname } = useLocation();
    const store = useStore();
    const dispatch = useDispatch();

    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;

    useEffect(() => {
        dispatch(getActivity(intro_no));
    }, [dispatch, intro_no]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    };

    const onDeleteClick = () => {
        dispatch(introSelector.actions.outBoard('activity'));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = date
            ? dayjs(date).add(1, 'day').toISOString().substring(0, 10)
            : null;
        dispatch(
            createActivity({
                introNo: intro_no,
                activityName: activity.activityName,
                activityUrl: activity.activityUrl,
                activityDate: value,
                activityDetail: activity.activityDetail,
            })
        );
        setActivity(initialState);
        setDate(null);
    };

    return (
        <IntroBox>
            <CardHeader>
                <div>활동</div>
                <DeleteBtn onClick={() => onDeleteClick()}></DeleteBtn>
            </CardHeader>
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
                            <IntroInputLabel>활동명</IntroInputLabel>
                            <IntroTextField
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
                            <IntroInputLabel>관련 링크</IntroInputLabel>
                            <IntroTextField
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
                                <IntroInputLabel>활동시기</IntroInputLabel>
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

                        <div style={{ width: '100%', margin: '20px' }}>
                            <IntroInputLabel>설명</IntroInputLabel>
                            <IntroTextField
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
                                저장
                            </Button>
                        </div>
                    </div>
                </form>
            </IntroCardContent>
        </IntroBox>
    );
}

export function ReadActivity() {
    const dispatch = useDispatch();
    const activity = useSelector((state) => state.activity);
    const [mode, setMode] = useState('OFF');

    const onDeleteClick = (introActivityNo) => {
        dispatch(deleteActivity(introActivityNo));
    };

    if (activity.length !== 0 && mode === 'OFF') {
        setMode('ON');
    } else if (
        Array.isArray(activity) &&
        activity.length === 0 &&
        mode === 'ON'
    ) {
        setMode('OFF');
    }

    let content = null;
    if (mode === 'ON') {
        content = (
            <IntroBox>
                <CardHeader>활동</CardHeader>

                <IntroCardContent className="card-content">
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
                                        활동명
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        관련 링크
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        참여기간
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        설명
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    ></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {activity.map((item) => (
                                    <TableRow key={item.introActivityNo}>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.activityName}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.activityUrl}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.activityDate &&
                                                item.activityDate.substring(
                                                    0,
                                                    7
                                                )}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.activityDetail}
                                        </TableCell>
                                        <TableCell
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                            algin="center"
                                        >
                                            <Button
                                                size="small"
                                                style={{
                                                    color: 'white',
                                                }}
                                                onClick={() =>
                                                    onDeleteClick(
                                                        item.introActivityNo
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

export default ActivityInput;
