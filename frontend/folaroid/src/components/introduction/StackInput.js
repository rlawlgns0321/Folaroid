import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const StackInputModule = () => {
  const [stackData, setStackData] = useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
    { key: 5, label: 'Angular' },
    { key: 6, label: 'jQuery' },
    { key: 7, label: 'Polymer' },
    { key: 8, label: 'React' },
    { key: 9, label: 'Vue.js' },
  ]);

  // const [stack, setStack] = useState['']

  const handleDelete = (stackToDelete) => () => {
    console.info('You clicked');
    setStackData((stacks) =>
      stacks.filter((stack) => stack.key !== stackToDelete.key)
    );
  };

  // const handleChangeStack = useCallback((event) => {
  //   setStack(event.target.value);
  // }, []);

  const handleSubmit = (event) => {
    alert(`이름: ${stackData}`);
    event.preventDefault();
  };

  return (
    <Card style={{ width: '80%', margin: '10px' }}>
      <CardHeader
        action={
          <form onSubmit={handleSubmit}>
            <TextField
              type="search"
              size="small"
              style={{ marginRight: '1rem' }}
            ></TextField>
            <Button type="submit" variant="contained">
              추가
            </Button>
          </form>
        }
        suppressHydrationWarning
        title="기술스택"
      />

      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 0.5,
            marginRight: 'auto',
            marginLeft: 'auto',
            width:'80%',
            border: 'solid 1px gray',
            borderRadius: '30px'
          }}
          component="ul"
        >
          {stackData.map((data) => {
            return (
              <Stack spacing={2} alignItems="center">
                <ListItem key={data.key}>
                  <Chip style={{margin: '5px'}} label={data.label} onDelete={handleDelete(data)} color="primary" variant='outlined'></Chip>
                </ListItem>
              </Stack>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StackInputModule;
