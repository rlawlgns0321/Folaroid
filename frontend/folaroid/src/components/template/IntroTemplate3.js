import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import {
    Avatar,
    Dialog,
    DialogContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ViewIntro() {
    const activity = useSelector((state) => state.activity);
    const archiving = useSelector((state) => state.archiving);
    const awards = useSelector((state) => state.awards);
    const career = useSelector((state) => state.career);
    const certification = useSelector((state) => state.certification);
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
            <Box>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: '90%',
                    }}
                >
                    <div
                        style={{
                            width: '30%',
                            display: 'flex',
                        }}
                    >
                        <Avatar
                            src={image.imageLocation}
                            sx={{ width: 250, height: 250 }}
                        />
                    </div>
                    <div style={{ width: '60%', margin: '10px' }}>
                        {personal.userName && <h1>{personal.userName}</h1>}
                        {personal.userBirth && (
                            <h3 style={{ margin: '10px' }}>
                                생년월일 : {birth[0]}년 {birth[1]}월 {birth[2]}
                                일
                            </h3>
                        )}
                        {personal.userEmail && (
                            <h3 style={{ margin: '10px' }}>
                                이메일 : {personal.userEmail}
                            </h3>
                        )}
                        {personal.userPhone && (
                            <h3 style={{ margin: '10px' }}>
                                전화번호 : {personal.userPhone}
                            </h3>
                        )}
                        <div>
                            {archiving &&
                                archiving.map((item) => (
                                    <h3 style={{ margin: '10px' }}>
                                        {item.archivingName} :{' '}
                                        {item.archivingLink}
                                    </h3>
                                ))}
                        </div>
                        {slogan.sloganContent && (
                            <h1 style={{ color: 'gray' }}>
                                "{slogan.sloganContent}"
                            </h1>
                        )}
                    </div>
                </div>
            </Box>
            <Box>
                {school.length !== 0 && (
                    <div style={{ margin: '10px' }}>
                        <h1 style={{ margin: '10px' }}>학교</h1>
                        {school.map((item) => (
                            <div>
                                <h3 style={{ margin: '10px' }}>
                                    {item.schoolName} | {item.schoolDegree}
                                </h3>
                                <div style={{ margin: '10px' }}>
                                    {item.schoolAdmissionDate} ~{' '}
                                    {item.schoolGraduationDate}
                                </div>
                                <div style={{ margin: '10px' }}>
                                    전공 : {item.schoolMajor} | 학점 :{' '}
                                    {item.schoolCredit} / {item.schoolMaxCredit}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Box>
            <Box>
                {activity.length !== 0 && (
                    <div style={{ margin: '10px' }}>
                        <h1 style={{ margin: '10px' }}>활동</h1>
                        {activity.map((item) => (
                            <div>
                                <h3 style={{ margin: '10px' }}>
                                    {item.activityName} | {item.activityDate}
                                </h3>
                                <div style={{ margin: '10px' }}>
                                    {item.activityDetail}
                                </div>
                                <div style={{ margin: '10px' }}>
                                    {item.activityUrl}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Box>
            <Box>
                {career.length !== 0 && (
                    <div style={{ margin: '10px' }}>
                        <h1 style={{ margin: '10px' }}>경력사항</h1>
                        {career.map((item) => (
                            <div>
                                <h3 style={{ margin: '10px' }}>
                                    근무 회사 : {item.careerComName}
                                </h3>
                                <div style={{ margin: '10px' }}>
                                    근무 일시 : {item.careerDate} | 담당 직무 :
                                    {item.careerJob}
                                </div>
                                {item.careerResult && (
                                    <div style={{ margin: '10px' }}>
                                        상세업무 및 성과 : {item.careerResult}
                                    </div>
                                )}
                                <div style={{ margin: '10px' }}>
                                    추가 사항 : {item.careerDetail}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Box>

            <Box>
                {awards.length !== 0 && (
                    <div style={{ margin: '10px' }}>
                        <h1 style={{ margin: '10px' }}>수상 경력</h1>
                        {awards.map((item) => (
                            <div>
                                <h3 style={{ margin: '10px' }}>
                                    {item.awardsDate} | {item.awardsName}
                                </h3>
                                <div style={{ margin: '10px' }}>
                                    {item.awardsIssuer}
                                </div>
                                <div style={{ margin: '10px' }}>
                                    {item.awardsDetail}
                                </div>
                            </div>
                        ))}
                    </div>
                )}{' '}
            </Box>
            <Box>
                {certification.length !== 0 && (
                    <div style={{ margin: '10px' }}>
                        <h1 style={{ margin: '10px' }}>자격증</h1>
                        {certification.map((item) => (
                            <div>
                                <h3 style={{ margin: '10px' }}>
                                    {item.certificationName}
                                </h3>
                                <div style={{ margin: '10px' }}>
                                    {item.certificationDate} |{' '}
                                    {item.certificationIssuer}
                                </div>
                                <div style={{ margin: '10px' }}>
                                    {item.certificationDetail}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Box>
            <Box>
                {language.length !== 0 && (
                    <div style={{ margin: '10px' }}>
                        <h1 style={{ margin: '10px' }}>외국어</h1>
                        {language.map((item) => (
                            <div>
                                <h3 style={{ margin: '10px' }}>{item.languageName}</h3>
                                <div style={{ margin: '10px' }}>
                                    {item.languageTestName} |{' '}
                                    {item.languageGrade}
                                </div>
                                <div style={{ margin: '10px' }}>{item.languageDate}</div>
                            </div>
                        ))}
                    </div>
                )}
            </Box>
        </div>
    );
}

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
