import React, { useState } from 'react';
import {
  Button,
  Box,
  Card,
  CardHeader,
  CardContent,
  TextField,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function BirthInput(props) {
  const [birth, setBirth] = useState(dayjs('2022-01-01'));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    const content = event.target[0].value;
    console.log(content)
    props.onCreate(content);
  };

  return (
    <Card style={{ width: '80%', margin: '10px' }}>
      <CardHeader title="생년월일" />
      <CardContent>
        <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <div style={{ width: '100%' }}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                sx={{width:'40%'}}
                >
                <DatePicker
                  label="생년월일"
                  inputFormat='YYYY년 MM월 DD일'
                  value={birth}
                  onChange={(newValue) => {
                    setBirth(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  />
              </LocalizationProvider>
            </div>
            <div>
              <Button type="submit" variant="contained">
                저장
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

function ReadBirth(props) {
  return (
    <Card style={{ width: '80%', margin: '10px' }}>
    <CardHeader title="생년월일" />
    <CardContent>
      <Box>{props.birth}</Box>
    </CardContent>
  </Card>
  )
}

function ViewBirth() {
  const [mode, setMode] = useState('CREATE')
  const [birth, setBirth] = useState('');

    let content = null;
    if (mode === 'CREATE') {
        content = 
            <BirthInput
                onCreate={(_birth) => {
                    const newBirth = _birth;
                    setBirth(newBirth);
                    setMode('READ')
                }}
            ></BirthInput>
    } else if (mode === 'READ') {
      content = <ReadBirth birth={birth}></ReadBirth>
    }

    return content
}

export default ViewBirth;