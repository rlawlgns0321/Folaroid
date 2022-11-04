import React, { useCallback, useState } from 'react';
import {
    Button,
    Box,
    Card,
    CardHeader,
    CardContent,
    TextField,
} from '@mui/material';

function ImageInput(props) {
    const [imageSrc, setImageSrc] = useState('');

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const content = event.target[0].value;
        console.log(content);
        props.onCreate(content);
    };

    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader suppressHydrationWarning title="사진" />
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
                            <div style={{ width: '100%' }}>
                                <TextField
                                    type="file"
                                    accept="image/jpg,impge/png,image/jpeg,image/gif"
                                    size="medium"
                                    name="content"
                                    onChange={(e) => {
                                        encodeFileToBase64(e.target.files[0]);
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
                </Box>
            </CardContent>
        </Card>
    );
}

function ReadImage(props) {
    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="사진" />
            <CardContent>
                <img src='props.image'></img>
                <Box>{props.image}</Box>
            </CardContent>
        </Card>
    );
}

function ViewImage() {
    const [mode, setMode] = useState('CREATE');
    const [image, setImage] = useState('');

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <ImageInput
                onCreate={(_image) => {
                    const newImage = _image;
                    setImage(newImage);
                    setMode('READ');
                }}
            ></ImageInput>
        );
    } else if (mode === 'READ') {
        console.log({ image });
        content = <ReadImage image={image}></ReadImage>;
    }

    return content;
}

export default ViewImage;
