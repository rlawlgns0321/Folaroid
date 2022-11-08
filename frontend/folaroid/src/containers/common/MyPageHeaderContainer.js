import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyPageHeader from '../../components/common/MyPageHeader';
import { createPortfolioThunk } from '../../modules/portfolio';

const MyPageHeaderContainer = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const onCreateClick = () => {
        dispatch(createPortfolioThunk(user.userNo));
    }

    return (
        <div>
            <MyPageHeader onCreateClick={onCreateClick}/>
        </div>
    );
};

export default MyPageHeaderContainer;