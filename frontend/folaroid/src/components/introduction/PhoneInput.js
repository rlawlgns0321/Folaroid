import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';

const PhoneInputModule = () => {
  const [phone, setPhone] = useState('');

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`연락처: ${phone}`);
    event.preventDefault();
  };

  return (
    <Card style={{ width: '80%', margin: '10px' }}>
      <CardHeader action={<Button>추가</Button>} title="연락처" />
      <CardContent>
        <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <div style={{ width: '100%' }}>
              <TextField
                label="연락처"
                type="tel"
                placeholder="010-0000-0000"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: '40%' }}
                onChange={handleChangePhone}
              />
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

export default PhoneInputModule;
