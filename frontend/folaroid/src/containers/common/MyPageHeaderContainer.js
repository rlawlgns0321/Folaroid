import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyPageHeader from '../../components/common/MyPageHeader';
import { createPortfolioThunk, portfolio } from '../../modules/portfolio';

const MyPageHeaderContainer = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const onCreateClick = () => {
        dispatch(createPortfolioThunk(user.userNo));
        navigate('/portfolio/intro');
    };

    return (
        <div>
            <MyPageHeader onCreateClick={onCreateClick} />
        </div>
    );
};

export default MyPageHeaderContainer;
