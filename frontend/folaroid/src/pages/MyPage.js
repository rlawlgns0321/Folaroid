import MyPageHeader from '../components/common/MyPageHeader';
import HeaderContainer from '../containers/header/HeaderContainer';
import BaseIntroContainer from '../containers/personal/BaseIntroContainer';
import PortfolioListContainer from '../containers/portfolio/PortfolioListContainer';

const MyPage = () => {
    return (
        <div>
            <HeaderContainer />
            <MyPageHeader />
            <BaseIntroContainer />
            <PortfolioListContainer />
        </div>
    );
};

export default MyPage;
