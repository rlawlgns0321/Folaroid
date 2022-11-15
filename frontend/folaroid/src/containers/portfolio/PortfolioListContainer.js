import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PortfolioList from '../../components/mypage/PortfolioList';
import {
    createPortfolioThunk,
    getSimplePortfolioListThunk,
    portfolio,
} from '../../modules/portfolio';

const PortfolioListContainer = () => {
    const dispatch = useDispatch();
    const portfolioList = useSelector((state) => state.portfolio.simple);
    const user = useSelector((state) => state.auth.user);
    const { isLoading, pf } = useSelector((state) => state.portfolio);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getSimplePortfolioListThunk(user.userNo));
    }, [dispatch, user.userNo]);

    useEffect(() => {
        if (isLoading) {
            navigate(`/portfolio/${pf.pfNo}/intro`);
        }
        return () => {
            dispatch(portfolio.actions.clearPf());
        };
    }, [isLoading, navigate, dispatch, pf]);

    const onCreateClick = () => {
        dispatch(createPortfolioThunk(user.userNo));
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
