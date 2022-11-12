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
    const [imageSrc, setImageSrc] = useState(null);

    const handleChange = (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        setImageSrc(formData)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        for (var key of imageSrc.keys()) {
            console.log(key)
        }
        for (var value of imageSrc.values()){
            console.log(value);
        }
        props.onCreate(imageSrc);
    };

    return (
        <CardContent>
            <Box>
                <form
                    onSubmit={handleSubmit}
                    style={{ margin: '10px' }}
                    entype="multipart/formdata"
                >
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
                                // accept="image/*"
                                style={{ width: '40%' }}
                                onChange={handleChange}
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
            <img
                style={{ width: '200px', height: '200px' }}
                src={props.image}
                alt="사용자 이미지"
            />
            {/* <Box>{props.image}</Box> */}
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
                    onCreate={(formData) => {
                        dispatch(updateImage(intro_no, formData));
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
