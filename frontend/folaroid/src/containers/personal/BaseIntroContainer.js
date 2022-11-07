import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseIntro from '../../components/personal/BaseIntro';
import { getPersonal } from '../../modules/intro/personal';

const BaseIntroContainer = () => {
    const baseIntro = useSelector((state) => state.personal);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPersonal(user.intro_no));
    }, [dispatch, user.intro_no]);

    return (
        <div>
            <BaseIntro baseIntro={baseIntro} />
        </div>
    );
};

export default BaseIntroContainer;
