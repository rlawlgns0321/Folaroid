import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import {
    getArchiving,
    createArchiving,
    deleteArchiving,
} from '../../modules/intro/archiving';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

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
`

const IntroCardContent = styled(CardContent)`
    background-color: antiquewhite;
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

function ArchivingInput(props) {
    const [archiving, setArchiving] = useState(initialState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setArchiving({ ...archiving, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onCreate(archiving);
        setArchiving(initialState);
    };

    return (
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
                        <TextField
                            label="링크명"
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
                        <TextField
                            label="링크 주소"
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
                    <Button type="submit" variant="contained">
                        제출
                    </Button>
                </div>
            </form>
        </IntroCardContent>
    );
}

function ReadSchool(props) {
    const dispatch = useDispatch();

    const onDeleteClick = (introArchivingNo) => {
        dispatch(deleteArchiving(introArchivingNo));
    };

    const rowItems = props.archiving.map((item) => (
        <TableRow key={item.introArchivingNo}>
            <TableCell align="center">{item.archivingName}</TableCell>
            <TableCell align="center">{item.archivingLink}</TableCell>
            <TableCell
                style={{ display: 'flex', justifyContent: 'center' }}
                algin="center"
            >
                <Button onClick={() => onDeleteClick(item.introArchivingNo)}>
                    삭제
                </Button>
            </TableCell>
        </TableRow>
    ));

    return (
        <IntroCardContent>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">링크명</TableCell>
                            <TableCell align="center">링크 주소</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rowItems}</TableBody>
                </Table>
            </TableContainer>
        </IntroCardContent>
    );
}

function ViewName() {
    const archiving = useSelector((state) => state.archiving);
    const { pathname } = useLocation();
    const store = useStore();
    const intro_no =
        pathname === '/intro'
            ? store.getState().auth.user.intro_no
            : store.getState().portfolio.pf.introNo;
    const [mode, setMode] = useState('CREATE');
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('링크', intro_no);
        dispatch(getArchiving(intro_no));
    }, [dispatch, intro_no]);

    if (archiving.length !== 0 && mode === 'CREATE') {
        setMode('READ');
    } else if (
        Array.isArray(archiving) &&
        archiving.length === 0 &&
        mode === 'READ'
    ) {
        setMode('CREATE');
    }

    let content = null;
    if (mode === 'CREATE') {
        content = (
            <IntroBox>
                <CardHeader>링크</CardHeader>
                <Card>
                    <ArchivingInput
                        onCreate={(_archiving) => {
                            dispatch(
                                createArchiving({
                                    introNo: intro_no,
                                    archivingName: _archiving.archivingName,
                                    archivingLink: _archiving.archivingLink,
                                })
                            );
                            setMode('READ');
                        }}
                    ></ArchivingInput>
                </Card>
            </IntroBox>
        );
    } else if (mode === 'READ') {
        console.log({ archiving });
        content = (
            <IntroBox>
                <CardHeader>링크</CardHeader>
                <Card>
                    <ArchivingInput
                        onCreate={(_archiving) => {
                            dispatch(
                                createArchiving({
                                    introNo: intro_no,
                                    archivingName: _archiving.archivingName,
                                    archivingLink: _archiving.archivingLink,
                                })
                            );
                            setMode('READ');
                        }}
                    ></ArchivingInput>
                    <ReadSchool archiving={archiving}></ReadSchool>
                </Card>
            </IntroBox>
        );
    }

    return content;
}

export default ViewName;
