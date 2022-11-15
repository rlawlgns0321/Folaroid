import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyInfo from '../../components/mypage/MyInfo';
import { getPersonal } from '../../modules/intro/personal';

const BaseIntroContainer = () => {
    const baseIntro = useSelector((state) => state.personal);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPersonal(user.intro_no));
    }, [dispatch, user.intro_no]);

    return (
        <>
            <MyInfo baseIntro={baseIntro} />
        </>
    );
};

export default BaseIntroContainer;
