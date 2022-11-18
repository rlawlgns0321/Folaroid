import React, { useEffect, useState } from 'react';
import { Button, Box, CardContent, TextField, InputLabel } from '@mui/material';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
    createSlogan,
    getSlogan,
    deleteSlogan,
} from '../../modules/intro/slogan';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const IntroTextField = styled(TextField)`
    .MuiOutlinedInput-root {
        color: white;
        fieldset {
            border-color: white;
        }
        &:hover fieldset {
            border-color: white;
        }
        .Mui-focused fieldset {
            border-color: white;
        }
    }
`;

const IntroInputLabel = styled(InputLabel)`
    color: white;
    margin-bottom: 5px;
`;

const CardHeader = styled.div`
    border-radius: 10px 10px 0 0;
    background-color: rgba(140, 140, 140, 0.35);
    padding: 15px;
    font-size: 1.5rem;
    font-weight: bolder;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const DeleteBtn = styled.button`
    border-radius: 50%;
    background-color: red;
    width: 18px;
    height: 18px;
    border: red;
`;

const IntroCardContent = styled(CardContent)`
    border-radius: 10px;
    background-color: rgba(44, 43, 43, 1);
    color: white;
    font-size: 1.1rem;
    padding: 20px 50px 20px 50px;
    border-radius: 0 0 10px 10px;
`;

const IntroBox = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
`;

function SloganInput(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const content = event.target[0].value;
        props.onCreate(content);
    };

    return (
        <IntroBox>
            <CardHeader>슬로건</CardHeader>
            <IntroCardContent>
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
                            <IntroInputLabel>슬로건</IntroInputLabel>
                            <IntroTextField
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                multiline
                                placeholder="취준생 화이팅!"
                                style={{ width: '90%' }}
                                rows={2}
                                maxRows={4}
                            />
                        </div>
                        <div>
                            <Button type="submit" variant="contained">
                                제출
                            </Button>
                        </div>
                    </div>
                </form>
            </IntroCardContent>
        </IntroBox>
    );
}

function ReadSlogan(props) {
    const dispatch = useDispatch();

    const onDeleteClick = (introSloganNo) => {
        dispatch(deleteSlogan(introSloganNo));
    };

    return (
        <IntroBox>
            <CardHeader>
                <div>슬로건</div>
                <DeleteBtn
                    onClick={() => onDeleteClick(props.introSloganNo)}
                ></DeleteBtn>
            </CardHeader>
            <IntroCardContent
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Box>{props.sloganContent}</Box>
            </IntroCardContent>
        </IntroBox>
    );
}

function ViewSlogan(props) {
    const slogan = useSelector((state) => state.slogan);
    const { pathname } = useLocation();
    const store = useStore();
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSlogan(intro_no));
    }, [dispatch, intro_no]);

    let content = null;

    if (slogan.introSloganNo && mode === 'CREATE') {
        setMode('READ');
    } else if (!slogan.introSloganNo && mode === 'READ') {
        setMode('CREATE');
    }

    if (mode === 'CREATE') {
        content = (
            <SloganInput
                onCreate={(_slogan) => {
                    dispatch(
                        createSlogan({
                            introNo: intro_no,
                            sloganContent: _slogan,
                        })
                    );
                    setMode('READ');
                }}
            ></SloganInput>
        );
    } else if (mode === 'READ') {
        content = (
            <ReadSlogan
                sloganContent={slogan.sloganContent}
                introSloganNo={slogan.introSloganNo}
            ></ReadSlogan>
        );
    }

    return content;
}

export default ViewSlogan;
