import Header from '../components/common/Header';
import MyPageHeader from '../components/common/MyPageHeader';
import PortFolioItem from '../components/common/PortFolioItem';
import Intro from '../components/common/Intro';
import List from '@mui/material/List';
import { Grid } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const MyPage = () => {
    const onClick = () => {
        alert('User Data 없으면 alert바를 통해 가게 해버릴까?');
    };
    const portfolios = [0, 1, 2];
    const icons = [
        { icon: <PersonIcon fontSize="large" />, value: '이름' },
        {
            icon: <PhoneAndroidIcon fontSize="large" />,
            value: '연락처',
        },
        { icon: <EventIcon fontSize="large" />, value: '생년월일' },
        { icon: <EmailIcon fontSize="large" />, value: '이메일' },
        {
            icon: <GitHubIcon fontSize="large" />,
            value: 'Github 저장소',
        },
    ];
    return (
        <div>
            <Header />
            <MyPageHeader />
            <div
                className="box"
                style={{
                    marginLeft: '10%',
                    marginRight: '10%',
                }}
            >
                <Grid container spacing={2} style={{ margin: '1px' }}>
                    <Grid item xs={12} md={12}>
                        <CreateIcon
                            onClick={onClick}
                            edge="end"
                            style={{ marginLeft: '90%' }}
                        ></CreateIcon>
                    </Grid>
                    {icons.map((value, key) => {
                        return (
                            <Grid key={key} item xs={6} md={6}>
                                <Intro>{value}</Intro>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
            <div
                className="box"
                style={{
                    marginLeft: '10%',
                    marginRight: '10%',
                }}
            >
                <Grid container spacing={2} style={{}}>
                    <Grid item xs={12} md={12}>
                        <List>
                            {portfolios.map((key, value) => {
                                return <PortFolioItem key={key} num={value} />;
                            })}
                        </List>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default MyPage;
