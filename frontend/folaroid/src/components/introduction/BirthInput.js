import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BirthInputModule = () => {
  const [birth, setBirth] = useState('');

  const handleSubmit = (event) => {
    alert(`이름: ${birth}`);
    event.preventDefault();
  };

  return (
    <Card style={{ width: '80%', margin: '10px' }}>
      <CardHeader action={<Button>추가</Button>} title="생년월일" />
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
                  value={birth}
                  onChange={(newValue) => {
                    setBirth(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
              </LocalizationProvider>
            </div>
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

export default BirthInputModule;
