import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';

const SloganInputModule = () => {
  const [slogan, setSlogan] = useState('');

  const handleChangeSlogan = (event) => {
    setSlogan(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름: ${slogan}`);
    event.preventDefault();
  };

  return (
    <Card style={{ width: '80%', margin: '10px' }}>
      <CardHeader action={<Button>추가</Button>} title="슬로건" />
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
              multiline
              placeholder='취준생 화이팅!'
              style={{ width: '90%' }}
              onChange={handleChangeSlogan}
              rows={2}
              maxRows={4}/>
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

export default SloganInputModule;
