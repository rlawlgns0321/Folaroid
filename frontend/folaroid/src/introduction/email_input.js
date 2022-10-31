import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';

const EmailInputModule = () => {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름: ${email}`);
    event.preventDefault();
  };

  return (
    <Card style={{ width: '80%', margin: '10px' }}>
      <CardHeader action={<Button>추가</Button>} title="생년월일" />
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
                label="이메일"
                type="email"
                placeholder="example@ssafy.com"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: '40%' }}
                onChange={handleChangeEmail}
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

export default EmailInputModule;
