import styled from '@emotion/styled';
import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogContent,
    Grid,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const LeftContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RightContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ViewIntro = () => {
    const activity = useSelector((state) => state.activity);
    const archiving = useSelector((state) => state.archiving);
    const awards = useSelector((state) => state.awards);
    const career = useSelector((state) => state.career);
    const certification = useSelector((state) => state.certification);
    const stack = useSelector((state) => state.stack.stack);
    const image = useSelector((state) => state.image);
    const language = useSelector((state) => state.language);
    const personal = useSelector((state) => state.personal);
    let birth = null;
    if (personal.userBirth) {
        birth = personal.userBirth.split('-');
    }
    const school = useSelector((state) => state.school);
    const slogan = useSelector((state) => state.slogan);

    return (
        <div>
            <Box
                sx={{ flexGrow: 1 }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <LeftContent>
                    <div
                        style={{
                            color: 'blue',
                            fontSize: '5rem',
                            fontWeight: 'bolder',
                            margin: '20px',
                            diplay: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {slogan.sloganContent}
                    </div>
                </LeftContent>
                <RightContent>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                        }}
                    >
                        <img
                            src={image.imageLocation}
                            alt="프로필 이미지"
                            style={{ width: '70%' }}
                        />
                        <div
                            style={{
                                margin: '20px',
                                color: 'blue',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                            }}
                        >
                            {personal.userName}
                        </div>
                        <div style={{ margin: '10px', color: 'black' }}>
                            {personal.userEmail}
                        </div>
                        <div style={{ margin: '10px', color: 'black' }}>
                            {personal.userBirth}
                        </div>
                        <div style={{ margin: '10px', color: 'black' }}>
                            {personal.userPhone}
                        </div>
                        {archiving &&
                            archiving.map((item) => (
                                <div style={{ margin: '10px', color: 'black' }}>
                                    {item.archivingName} : {item.archivingLink}
                                </div>
                            ))}
                    </div>
                </RightContent>
            </Box>
            <Box
                sx={{ flexGrow: 1 }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >  
                <LeftContent>
                    <h1> 기술 스택 </h1>
                    <Grid container>
                        {stack &&
                            stack.map((item) => (
                                <Grid
                                    xs={4}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        marginTop: '10px',
                                    }}
                                >
                                    <Avatar
                                        src={item.hashImageLocation}
                                        sx={{ width: 100, height: 100 }}
                                    />
                                    <div>{item.hashName}</div>
                                </Grid>
                            ))}
                    </Grid>
                </LeftContent>
                <RightContent>
                    <h1> 학력 </h1>
                    <div style={{ marginTop: '10px', width: '70%' }}>
                        {school &&
                            school.map((item) => (
                                <div>
                                    <div
                                        style={{
                                            fontSize: '1rem',
                                            fontWeight: 'bold',
                                            margin: '10px',
                                        }}
                                    >
                                        {item.schoolName && item.schoolName}
                                    </div>
                                    {item.schoolMajor && (
                                        <div style={{ margin: '10px' }}>
                                            {item.schoolMajor} |{' '}
                                            {item.schoolDegree}
                                        </div>
                                    )}
                                    <div style={{ margin: '10px' }}>
                                        {item.schoolAdmissionDate.substring(
                                            0,
                                            7
                                        )}{' '}
                                        ~
                                        {item.schoolGraduationDate.substring(
                                            0,
                                            7
                                        )}
                                    </div>
                                    {item.schoolCredit && (
                                        <div style={{ margin: '10px' }}>
                                            학점 : {item.schoolCredit} /{' '}
                                            {item.schoolMaxCredit}
                                        </div>
                                    )}
                                </div>
                            ))}
                    </div>
                </RightContent>
            </Box>
            <Box
                sx={{ flexGrow: 1 }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >

            </Box>
        </div>
    );
};

export default function BasicModal() {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('');
    const handleOpen = () => {
        setOpen(true);
        setScroll();
    };
    const handleClose = () => setOpen(false);
    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-describedby="scroll-dialog-description"
                maxWidth="lg"
                fullWidth
            >
                <DialogContent style={{ margin: '50px' }}>
                    <ViewIntro id="modal-modal-description"></ViewIntro>
                </DialogContent>
            </Dialog>
        </div>
    );
}
