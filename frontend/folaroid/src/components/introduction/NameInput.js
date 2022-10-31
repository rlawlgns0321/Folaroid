import React, { useState, useEffect } from 'react';
import { nameLoad } from '../../module/name';
import { useSelector, useDispatch } from 'react-redux';
// import { insert } from '../../module/name'
import { Button, Box, Card, CardHeader, CardContent, TextField } from '@mui/material';
// import axios from 'axios';

const NameInputModule = () => {
  const [name, setName] = useState('')

  const dispatch = useDispatch();
  // const onInsert = (id, content) => dispatch(insert(id, content));

  const handleChangeName = (event) => {
    console.log(event.target.value)
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  };


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
                <           TextField
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
