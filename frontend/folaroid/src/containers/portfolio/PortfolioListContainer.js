import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PortfolioList from '../../components/portfolio/PortfolioList';
import { getSimplePortfolioListThunk } from '../../modules/portfolio';

const PortfolioListContainer = () => {
    const dispatch = useDispatch();
    const portfolioList = useSelector((state) => state.portfolio.simple);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        dispatch(getSimplePortfolioListThunk(user.userNo));
    }, [dispatch, user.userNo]);

    return (
        <div>
            <PortfolioList portfolioList={portfolioList} />
        </div>
    );
};

export default PortfolioListContainer;
