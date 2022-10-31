import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';

const NameInputModule = ({ }) => {
  // const name = useSelector((state) => state)
  const [ name, setName ] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
    console.log(event.target.value)
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // const saveBtnClick = (e) => {
  //   onSaveBtnClick(inputData);
  //   resetForm();
  //   console.log(e)
  // }

  return (
    <Card style={{ width: '80%', margin: '10px' }}>
      <CardHeader
        title="이름"
      />
      <CardContent>
        <Box>
          <form style={{ margin: '10px' }} onSubmit={handleSubmit}>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <div style={{width: '100%'}}>
                <TextField
                  label="이름"
                  placeholder="이름"
                  value={name}
                  onChange={handleChangeName}
                  size="medium"
                  style={{width: '40%'}}
                />
              </div>
              <div>
                <Button type="submit" variant="contained">
                  제출
                </Button>
              </div>
            </div>
          </form>
        </Box>
        <Box>
          {name}
        </Box>
      </CardContent>
    </Card>
  );
};

export default NameInputModule;
