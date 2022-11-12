import React, { useEffect, useState } from 'react';
import {
    Button,
    Box,
    Card,
    CardHeader,
    CardContent,
    TextField,
} from '@mui/material';
import { useDispatch, useSelector, useStore } from 'react-redux';

import { getImage, updateImage } from '../../modules/intro/image';
import { useLocation } from 'react-router-dom';

function ImageInput(props) {
    const imageForm = new FormData();
    const [imageSrc, setImageSrc] = useState({
        imageLocation: imageForm,
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.files)
        props.onCreate(imageSrc);
    };

    return (
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
                            <input
                                type="file"
                                accept="image/*"
                                name="imageLocation"
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
    );
}

function ReadImage(props) {
    return (
        <CardContent>
            <Box>{props.image}</Box>
        </CardContent>
    );
}

function ViewImage() {
    const image = useSelector((state) => state.image);
    const { pathname } = useLocation();
    const store = useStore();
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    const [mode, setMode] = useState('READ');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getImage(intro_no));
    }, [dispatch, intro_no]);
    let content = null;
    if (mode === 'CREATE') {
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="사진" />
                <ImageInput
                    onCreate={(_image) => {
                        dispatch(
                            updateImage(intro_no, {
                                file: _image.imageLocation,
                            })
                        );
                        setMode('READ');
                    }}
                ></ImageInput>
            </Card>
        );
    } else if (mode === 'READ') {
        content = (
            <Card style={{ width: '80%', margin: '10px' }}>
                <CardHeader title="사진" />
                <ReadImage image={image.imageLocation}></ReadImage>
                <div>
                    <Button onClick={() => setMode('CREATE')}>수정</Button>
                </div>
            </Card>
        );
    }

    return content;
}

export default ViewImage;
