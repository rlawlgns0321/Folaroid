import React, { useCallback, useState } from 'react';
import {
  Button,
  Box,
  Card,
  CardHeader,
  CardContent,
  TextField,
} from '@mui/material';


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
