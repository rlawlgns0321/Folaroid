import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';

const ImageInputModule = ({ onInsert }) => {
  const [image, setImage] = useState('');

  const handleChangeImage = useCallback((event) => {
    setImage(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      onInsert(image);
      event.preventDefault();
    },
    [onInsert, image]
  );

  return (
    <Card style={{ width: '80%', margin: '10px' }}>
      <CardHeader
        action={<Button>추가</Button>}
        suppressHydrationWarning
        title="사진"
      />
      <CardContent>
        <Box>
          <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
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
                  required
                  type="file"
                  value={image}
                  onChange={handleChangeImage}
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
      </CardContent>
    </Card>
  );
};

export default ImageInputModule;
