import React, { useState } from 'react';
import {
  Button,
  Box,
  Card,
  CardHeader,
  CardContent,
  TextField,
} from '@mui/material';

function PhoneInput(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    const content = event.target[0].value;
    console.log(content)
    props.onCreate(content);
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
              />
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

function ReadPhone(props) {
  return (
      <Card style={{ width: '80%', margin: '10px' }}>
          <CardHeader title="연락처" />
          <CardContent>
              <Box>{props.phone}</Box>
          </CardContent>
      </Card>
  );
}

function ViewPhone() {
  const [mode, setMode] = useState('CREATE');
  const [phone, setPhone] = useState('');

  let content = null;
  if (mode === 'CREATE') {
      content = 
          <PhoneInput
              onCreate={(_phone) => {
                  const newPhone = _phone;
                  setPhone(newPhone);
                  setMode('READ')
              }}
          ></PhoneInput>
  } else if (mode === 'READ') {
    console.log({phone})
    content = <ReadPhone phone={phone}></ReadPhone>
  }

  return content
}

export default ViewPhone;

