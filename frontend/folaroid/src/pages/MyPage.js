import { Grid } from '@mui/material';
import WrapLayout from '../components/mypage/WrapLayout';
import HeaderContainer from '../containers/header/HeaderContainer';

const MyPage = () => {
    return (
        <div>
            <HeaderContainer />
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{ width: '100vw', height: '93vh', maxHeight: '93vh' }}
            >
                <WrapLayout />
            </Grid>
        </div>
    );
};

export default MyPage;
