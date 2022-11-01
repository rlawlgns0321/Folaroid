import React, { useState } from 'react';
import {
  Button,
  Box,
  Card,
  CardHeader,
  CardContent,
  TextField,
} from '@mui/material';


function EmailInput(props) {

  const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value)
        const content = event.target[0].value;
        console.log(content)
        props.onCreate(content);
  };

  return (
    <Card style={{ width: '80%', margin: '10px' }}>
      <CardHeader title="이메일" />
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

function ReadEmail(props) {
  return (
      <Card style={{ width: '80%', margin: '10px' }}>
          <CardHeader title="이메일" />
          <CardContent>
              <Box>{props.email}</Box>
          </CardContent>
      </Card>
  );
}

function ViewEmail() {
  const [mode, setMode] = useState('CREATE');
  const [email, setEmail] = useState('');

  let content = null;
  if (mode === 'CREATE') {
      content = 
          <EmailInput
              onCreate={(_email) => {
                  const newEmail = _email;
                  setEmail(newEmail);
                  setMode('READ')
              }}
          ></EmailInput>
  } else if (mode === 'READ') {
    console.log({email})
    content = <ReadEmail email={email}></ReadEmail>
  }

  return content
}

export default ViewEmail;
