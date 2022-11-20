import React, { useEffect, useState } from 'react';
import {
    Button,
    CardContent,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    InputLabel,
} from '@mui/material';
import {
    getArchiving,
    createArchiving,
    deleteArchiving,
} from '../../modules/intro/archiving';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { introSelector } from '../../modules/intro/introSelector';

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

const initialState = {
    archivingLink: '',
    archivingName: '',
};

export function ArchivingInput() {
    const [archiving, setArchiving] = useState(initialState);
    const { pathname } = useLocation();
    const store = useStore();
    const dispatch = useDispatch();

    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;

    useEffect(() => {
        dispatch(getArchiving(intro_no));
    }, [dispatch, intro_no]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setArchiving({ ...archiving, [name]: value });
    };

    const onDeleteClick = () => {
        dispatch(introSelector.actions.outBoard('archiving'));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            createArchiving({
                introNo: intro_no,
                archivingName: archiving.archivingName,
                archivingLink: archiving.archivingLink,
            })
        );
        setArchiving(initialState);
    };

    return (
        <IntroBox>
            <CardHeader>
                <div>링크</div>
                <DeleteBtn onClick={() => onDeleteClick()}></DeleteBtn>
            </CardHeader>
            <IntroCardContent>
                <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                        }}
                    >
                        <div style={{ width: '100%', margin: '20px' }}>
                            <IntroInputLabel>링크명</IntroInputLabel>
                            <IntroTextField
                                placeholder="블로그"
                                size="medium"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={archiving.archivingName}
                                style={{ width: '90%' }}
                                name="archivingName"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div style={{ width: '100%', margin: '20px' }}>
                            <IntroInputLabel>링크주소</IntroInputLabel>
                            <IntroTextField
                                placeholder="https://"
                                size="medium"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '90%' }}
                                name="archivingLink"
                                onChange={handleInputChange}
                                value={archiving.archivingLink}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '20px',
                                justifyContent: 'end',
                            }}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                color="neutral"
                                style={{ fontWeight: 'bolder' }}
                            >
                                제출
                            </Button>
                        </div>
                    </div>
                </form>
            </IntroCardContent>
        </IntroBox>
    );
}

export function ReadArchiving() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const store = useStore();
    const archiving = useSelector((state) => state.archiving);
    const [mode, setMode] = useState('OFF');
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;

    const onDeleteClick = (introArchivingNo) => {
        dispatch(deleteArchiving(introArchivingNo));
    };

    if (archiving.length !== 0 && mode === 'OFF') {
        setMode('ON');
    } else if (
        Array.isArray(archiving) &&
        archiving.length === 0 &&
        mode === 'ON'
    ) {
        setMode('OFF');
    }
    console.log(mode);

    let content = null;
    if (mode === 'ON') {
        content = (
            <IntroBox>
                <CardHeader>링크</CardHeader>
                <IntroCardContent>
                    <TableContainer>
                        <Table
                            style={{
                                backgroundColor: ' rgba(44, 43, 43, 1)',
                            }}
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        링크명
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ color: 'white' }}
                                    >
                                        링크 주소
                                    </TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {archiving.map((item) => (
                                    <TableRow key={item.introArchivingNo}>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.archivingName}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ color: 'white' }}
                                        >
                                            {item.archivingLink}
                                        </TableCell>
                                        <TableCell
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                            algin="center"
                                        >
                                            <Button
                                                size="small"
                                                style={{
                                                    color: 'white',
                                                }}
                                                onClick={() =>
                                                    onDeleteClick(
                                                        item.introArchivingNo
                                                    )
                                                }
                                            >
                                                삭제
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </IntroCardContent>
                ;
            </IntroBox>
        );
    }
    return content;
}

export default ArchivingInput;
