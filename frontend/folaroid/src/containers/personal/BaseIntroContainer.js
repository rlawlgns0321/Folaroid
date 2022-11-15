import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyInfo from '../../components/mypage/MyInfo';
import { getImage } from '../../modules/intro/image';
import { getPersonal } from '../../modules/intro/personal';

const BaseIntroContainer = () => {
    const baseIntro = useSelector((state) => state.personal);
    const user = useSelector((state) => state.auth.user);
    const image = useSelector((state) => state.image);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPersonal(user.intro_no));
        dispatch(getImage(user.intro_no));
    }, [dispatch, user.intro_no]);

    return (
        <>
            <MyInfo baseIntro={baseIntro} image={image} />
        </>
    );
};

export default BaseIntroContainer;
