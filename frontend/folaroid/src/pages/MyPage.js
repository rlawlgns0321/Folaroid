import MyPageHeader from '../components/common/MyPageHeader';
import PortFolioItem from '../components/common/PortFolioItem';
import List from '@mui/material/List';
import { Grid } from '@mui/material';
import HeaderContainer from '../containers/header/HeaderContainer';
import BaseIntroContainer from '../containers/personal/BaseIntroContainer';

const MyPage = () => {
    

    const portfolios = [0, 1, 2];

    

    return (
        <div>
            <HeaderContainer />
            <MyPageHeader />
            <BaseIntroContainer/>
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
                            {portfolios.map((value, key) => {
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
