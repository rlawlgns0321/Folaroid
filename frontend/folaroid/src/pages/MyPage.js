import { Grid } from '@mui/material';
import WrapLayout from '../components/mypage/WrapLayout';
import HeaderContainer from '../containers/header/HeaderContainer';
import TestPage from './TestPage';

const MyPage = () => {
    return (
        <TestPage>
            <HeaderContainer />
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{ width: '100vw', height: '93vh', maxHeight: '93vh' }}
            >
                <WrapLayout />
            </Grid>
        </TestPage>
    );
};

export default MyPage;
