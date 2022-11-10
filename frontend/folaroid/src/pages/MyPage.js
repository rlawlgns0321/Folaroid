import MyPageHeaderContainer from '../containers/common/MyPageHeaderContainer';
import HeaderContainer from '../containers/header/HeaderContainer';
import BaseIntroContainer from '../containers/personal/BaseIntroContainer';
import PortfolioListContainer from '../containers/portfolio/PortfolioListContainer';

const MyPage = () => {
    return (
        <div>
            <HeaderContainer />
            <MyPageHeaderContainer />
            <BaseIntroContainer />
            <PortfolioListContainer />
        </div>
    );
};

export default MyPage;
