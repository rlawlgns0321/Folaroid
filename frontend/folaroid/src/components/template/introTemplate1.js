import {
    AppBar,
    Avatar,
    Box,
    Button,
    CssBaseline,
    Dialog,
    DialogContent,
    Grid,
    IconButton,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RefreshIcon from '@mui/icons-material/Refresh';
import HelpIcon from '@mui/icons-material/Help';
import { Copyright } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const IntroTemplate1 = () => {
    const activity = useSelector((state) => state.activity);
    const awards = useSelector((state) => state.awards);
    const career = useSelector((state) => state.career);
    const certification = useSelector((state) => state.certification);
    const language = useSelector((state) => state.language);
    const archiving = useSelector((state) => state.archiving);
    const stack = useSelector((state) => state.stack.stack);
    const image = useSelector((state) => state.image);
    const personal = useSelector((state) => state.personal);
    const school = useSelector((state) => state.school);
    const slogan = useSelector((state) => state.slogan);

    const lightColor = 'rgba(255, 255, 255, 0.7)';

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <CssBaseline />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <AppBar
                    component="div"
                    position="static"
                    elevation={0}
                    style={{
                        backgroundColor: '#d1c4e9',
                        borderRadius: '10px 10px 0 0',
                    }}
                    sx={{ zIndex: 0 }}
                >
                    <Toolbar>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid
                                item
                                xs
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <div style={{ width: '5%' }}>
                                    <Avatar src={image.imageLocation} />
                                </div>
                                <Typography
                                    color="inherit"
                                    variant="h5"
                                    component="h1"
                                >
                                    자기소개서
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Box
                    component="main"
                    sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}
                >
                    <Paper
                        sx={{
                            maxWidth: 936,
                            margin: 'auto',
                            overflow: 'hidden',
                        }}
                    >
                        <AppBar
                            position="static"
                            color="default"
                            elevation={0}
                            sx={{
                                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                            }}
                        >
                            <Toolbar>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Avatar src={image.imageLocation} />
                                    </Grid>
                                    <Grid item xs>
                                        <div
                                            style={{
                                                fontWeight: 'bolder',
                                            }}
                                        >
                                            {personal.userName}
                                        </div>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                        {personal.userEmail && (
                            <Typography sx={{ my: 3, mx: 2 }}>
                                Email : {personal.userEmail}
                            </Typography>
                        )}
                        {personal.userBirth && (
                            <Typography sx={{ my: 3, mx: 2 }}>
                                Birth : {personal.userBirth}
                            </Typography>
                        )}
                        {personal.userPhone && (
                            <Typography sx={{ my: 3, mx: 2 }}>
                                PhoneNumber : {personal.userPhone}
                            </Typography>
                        )}
                        {archiving.length !== 0 &&
                            archiving.map((item) => (
                                <Typography sx={{ my: 3, mx: 2 }}>
                                    {item.archivingName} : {item.archivingLink}
                                </Typography>
                            ))}
                        {slogan && (
                            <Typography
                                sx={{
                                    my: 3,
                                    mx: 2,
                                    color: '#d1c4e9',
                                }}
                            >
                                "{slogan.sloganContent}"
                            </Typography>
                        )}
                    </Paper>
                    {stack.length !== 0 && (
                        <Paper
                            sx={{
                                maxWidth: 936,
                                margin: 'auto',
                                my: 5,
                                overflow: 'hidden',
                            }}
                        >
                            <AppBar
                                position="static"
                                color="default"
                                elevation={0}
                                sx={{
                                    borderBottom:
                                        '1px solid rgba(0, 0, 0, 0.12)',
                                }}
                            >
                                <Toolbar>
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Grid item></Grid>
                                        <Grid item xs>
                                            <div
                                                style={{
                                                    fontWeight: 'bolder',
                                                }}
                                            >
                                                기술 스택
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Toolbar>
                            </AppBar>
                            <Grid style={{ margin: '20px' }} container>
                                {stack &&
                                    stack.map((item) => (
                                        <Grid
                                            xs={3}
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
                        </Paper>
                    )}
                    {school.length !== 0 && (
                        <Paper
                            sx={{
                                maxWidth: 936,
                                margin: 'auto',
                                my: 5,
                                overflow: 'hidden',
                            }}
                        >
                            <AppBar
                                position="static"
                                color="default"
                                elevation={0}
                                sx={{
                                    borderBottom:
                                        '1px solid rgba(0, 0, 0, 0.12)',
                                }}
                            >
                                <Toolbar>
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Grid item></Grid>
                                        <Grid item xs>
                                            <div
                                                style={{
                                                    fontWeight: 'bolder',
                                                }}
                                            >
                                                학력
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Toolbar>
                            </AppBar>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">
                                                학교
                                            </TableCell>
                                            <TableCell align="center">
                                                전공
                                            </TableCell>
                                            <TableCell align="center">
                                                학위
                                            </TableCell>
                                            <TableCell align="center">
                                                입학
                                            </TableCell>
                                            <TableCell align="center">
                                                졸업
                                            </TableCell>
                                            <TableCell align="center">
                                                학점
                                            </TableCell>
                                            <TableCell align="center"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {school.map((item) => (
                                            <TableRow key={item.introSchoolNo}>
                                                <TableCell align="center">
                                                    {item.schoolName}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.schoolMajor}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.schoolDegree}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.schoolAdmissionDate &&
                                                        item.schoolAdmissionDate.substring(
                                                            0,
                                                            7
                                                        )}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.schoolGraduationDate &&
                                                        item.schoolGraduationDate.substring(
                                                            0,
                                                            7
                                                        )}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.schoolCredit}/
                                                    {item.schoolMaxCredit}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    )}
                    {language.length !== 0 && (
                        <Paper
                            sx={{
                                maxWidth: 936,
                                margin: 'auto',
                                my: 5,
                                overflow: 'hidden',
                            }}
                        >
                            <AppBar
                                position="static"
                                color="default"
                                elevation={0}
                                sx={{
                                    borderBottom:
                                        '1px solid rgba(0, 0, 0, 0.12)',
                                }}
                            >
                                <Toolbar>
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Grid item></Grid>
                                        <Grid item xs>
                                            <div
                                                style={{
                                                    fontWeight: 'bolder',
                                                }}
                                            >
                                                공인어학성적
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Toolbar>
                            </AppBar>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">
                                                외국어
                                            </TableCell>
                                            <TableCell align="center">
                                                시험명
                                            </TableCell>
                                            <TableCell align="center">
                                                취득일자
                                            </TableCell>
                                            <TableCell align="center">
                                                점수/등급
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {language.map((item) => (
                                            <TableRow
                                                key={item.introLanguageNo}
                                            >
                                                <TableCell align="center">
                                                    {item.languageName}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.languageTestName}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.languageDate &&
                                                        item.languageDate.substring(
                                                            0,
                                                            7
                                                        )}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.languageGrade}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    )}
                    {certification.length !== 0 && (
                        <Paper
                            sx={{
                                maxWidth: 936,
                                margin: 'auto',
                                my: 5,
                                overflow: 'hidden',
                            }}
                        >
                            <AppBar
                                position="static"
                                color="default"
                                elevation={0}
                                sx={{
                                    borderBottom:
                                        '1px solid rgba(0, 0, 0, 0.12)',
                                }}
                            >
                                <Toolbar>
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Grid item></Grid>
                                        <Grid item xs>
                                            <div
                                                style={{
                                                    fontWeight: 'bolder',
                                                }}
                                            >
                                                자격증
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Toolbar>
                            </AppBar>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">
                                                자격증명
                                            </TableCell>
                                            <TableCell align="center">
                                                취득일자
                                            </TableCell>
                                            <TableCell align="center">
                                                자격증 발급 기관
                                            </TableCell>
                                            <TableCell align="center">
                                                자격증 고유번호
                                            </TableCell>
                                            <TableCell align="center">
                                                취득내용
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {certification.map((item) => (
                                            <TableRow
                                                key={item.introCertificationNo}
                                            >
                                                <TableCell align="center">
                                                    {item.certificationName}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.certificationDate}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.certificationIssuer}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.certificationId}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.certificationDetail}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    )}
                    {awards.length !== 0 && (
                        <Paper
                            sx={{
                                maxWidth: 936,
                                margin: 'auto',
                                my: 5,
                                overflow: 'hidden',
                            }}
                        >
                            <AppBar
                                position="static"
                                color="default"
                                elevation={0}
                                sx={{
                                    borderBottom:
                                        '1px solid rgba(0, 0, 0, 0.12)',
                                }}
                            >
                                <Toolbar>
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Grid item></Grid>
                                        <Grid item xs>
                                            <div
                                                style={{
                                                    fontWeight: 'bolder',
                                                }}
                                            >
                                                수상내역
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Toolbar>
                            </AppBar>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">
                                                대회 이름
                                            </TableCell>
                                            <TableCell align="center">
                                                수상일자
                                            </TableCell>
                                            <TableCell align="center">
                                                주최 기관
                                            </TableCell>
                                            <TableCell align="center">
                                                설명
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {awards.map((item) => (
                                            <TableRow key={item.introAwardsNo}>
                                                <TableCell align="center">
                                                    {item.awardsName}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.awardsDate}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.awardsIssuer}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.awardsDetail}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    )}
                    {activity.length !== 0 && (
                        <Paper
                            sx={{
                                maxWidth: 936,
                                margin: 'auto',
                                my: 5,
                                overflow: 'hidden',
                            }}
                        >
                            <AppBar
                                position="static"
                                color="default"
                                elevation={0}
                                sx={{
                                    borderBottom:
                                        '1px solid rgba(0, 0, 0, 0.12)',
                                }}
                            >
                                <Toolbar>
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Grid item></Grid>
                                        <Grid item xs>
                                            <div
                                                style={{
                                                    fontWeight: 'bolder',
                                                }}
                                            >
                                                활동내역
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Toolbar>
                            </AppBar>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">
                                                활동명
                                            </TableCell>
                                            <TableCell align="center">
                                                관련 링크
                                            </TableCell>
                                            <TableCell align="center">
                                                참여기간
                                            </TableCell>
                                            <TableCell align="center">
                                                설명
                                            </TableCell>
                                            <TableCell align="center"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {activity.map((item) => (
                                            <TableRow
                                                key={item.introActivityNo}
                                            >
                                                <TableCell align="center">
                                                    {item.activityName}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.activityUrl}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.activityDate &&
                                                        item.activityDate.substring(
                                                            0,
                                                            7
                                                        )}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.activityDetail}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    )}
                    {career.length !== 0 && (
                        <Paper
                            sx={{
                                maxWidth: 936,
                                margin: 'auto',
                                my: 5,
                                overflow: 'hidden',
                            }}
                        >
                            <AppBar
                                position="static"
                                color="default"
                                elevation={0}
                                sx={{
                                    borderBottom:
                                        '1px solid rgba(0, 0, 0, 0.12)',
                                }}
                            >
                                <Toolbar>
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Grid item></Grid>
                                        <Grid item xs>
                                            <div
                                                style={{
                                                    fontWeight: 'bolder',
                                                }}
                                            >
                                                경력사항
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Toolbar>
                            </AppBar>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">
                                                회사명
                                            </TableCell>
                                            <TableCell align="center">
                                                근무날짜
                                            </TableCell>
                                            <TableCell align="center">
                                                직무
                                            </TableCell>
                                            <TableCell align="center">
                                                상세업무 및 성과
                                            </TableCell>
                                            <TableCell align="center">
                                                기타 설명
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {career.map((item) => (
                                            <TableRow key={item.introCareerNo}>
                                                <TableCell align="center">
                                                    {item.careerComName}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.careerDate}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.careerJob}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.careerResult}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.careerDetail}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    )}
                </Box>
            </Box>
        </Box>
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
                    <IntroTemplate1 id="modal-modal-description"></IntroTemplate1>
                </DialogContent>
            </Dialog>
        </div>
    );
}
