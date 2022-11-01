import React, { useState } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardContent,
    TextField,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CertificateInputModule = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${title}`);
        event.preventDefault();
    };

    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader action={<Button>추가</Button>} title="자격증" />
            <CardContent>
                <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                    <div style={{ width: '100%', marginBottom: '10px' }}>
                        <TextField
                            label="자격증 이름"
                            type="text"
                            placeholder="입력"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ width: '40%' }}
                            onChange={handleChangeTitle}
                        />
                    </div>
                    <div style={{ width: '100%', marginBottom: '10px' }}>
                        <div style={{ width: '100%' }}>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                sx={{ width: '40%' }}
                            >
                                <DatePicker
                                    label="취득 년월"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
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
                            placeholder="자격증에 관한 사항을 적어주세요."
                            style={{ width: '90%' }}
                            onChange={handleChangeDescription}
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
};

export default CertificateInputModule;
