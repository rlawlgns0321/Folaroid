import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardHeader,
    CardContent,
    TextField,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import {
    createAward,
    getAwards,
    deleteAward,
} from '../../modules/intro/awards';

function AwardInput(props) {
    const [box, setBox] = useState({
        awardsDate: dayjs('2000-01-01'),
        awardsDetail: '',
        awardsIssuer: '',
        awardsName: '',
        introAwardsNo: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBox({ ...box, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onCreate(box);
    };

    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="수상내역" />
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
                                    value={box.awardsDate}
                                    onChange={(newValue) => {
                                        setBox({
                                            ...box,
                                            awardsDate: newValue,
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
                        />
                        <div>
                            <Button type="submit" variant="contained">
                                제출
                            </Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

function ReadAwards(props) {
    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="기본정보" />
            <CardContent>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: '20px'
                    }}
                >
                    <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                        대회 이름
                    </div>
                    <Box style={{ margin: '20px' }}>{props.name}</Box>
                </div>
                {/* <Box style={{ margin: '20px' }}>{props.date}</Box> */}
                <Box style={{ margin: '20px' }}>{props.detail}</Box>
                <Box style={{ margin: '20px' }}>{props.issuer}</Box>
            </CardContent>
        </Card>
    );
}

function ViewAwards() {
    const introNo = useSelector((state) => state.auth.user.intro_no);
    const awards = useSelector((state) => state);
    const [mode, setMode] = useState('CREATE');
    const [value, setValue] = useState({
        awardsDate: '',
        awardsDetail: '',
        awardsIssuer: '',
        awardsName: '',
        introAwardsNo: null,
    });
    const dispatch = useDispatch();

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <AwardInput
                onCreate={(box) => {
                    dispatch(
                        createAward({
                            introNo: introNo,
                            awardsDate: box.awardsDate,
                            awardsDetail: box.awardsDetail,
                            awardsIssuer: box.awardsIssuer,
                            awardsName: box.awardsName,
                            introAwardsNo: box.introAwardsNo,
                        })
                    );
                    setValue({
                        awardsDate: box.awardsDate,
                        awardsDetail: box.awardsDetail,
                        awardsIssuer: box.awardsIssuer,
                        awardsName: box.awardsName,
                        introAwardsNo: box.introAwardsNo,
                    });
                    setMode('READ');
                }}
            ></AwardInput>
        );
    } else if (mode === 'READ') {
        console.log({ value });
        content = (
            <ReadAwards
                name={value.awardsName}
                date={value.awardsDate}
                detail={value.awardsDetail}
                issuer={value.awardsIssuer}
            ></ReadAwards>
        );
    }

    return content;
}
export default ViewAwards;
