import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PortfolioList from '../../components/mypage/PortfolioList';
import {
    createPortfolioThunk,
    getSimplePortfolioListThunk,
} from '../../modules/portfolio';

const PortfolioListContainer = () => {
    const dispatch = useDispatch();
    const portfolioList = useSelector((state) => state.portfolio.simple);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        dispatch(getSimplePortfolioListThunk(user.userNo));
    }, [dispatch, user.userNo]);
    const navigate = useNavigate();

    const onCreateClick = () => {
        dispatch(createPortfolioThunk(user.userNo));
        navigate('/portfolio/intro');
    };
    return (
        <>
            <PortfolioList
                portfolioList={portfolioList}
                onCreateClick={onCreateClick}
            />
        </>
    );
};

export default PortfolioListContainer;
