import React, { useEffect } from 'react';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserThunk } from '../../modules/auth';

const CallBack = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, jwt } = useSelector((state) => state.auth);

    useEffect(() => {
        const { code } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(getUserThunk(code));
    }, [location, dispatch]);

    useEffect(() => {
        if (user && jwt) {
            localStorage.setItem('user', user);
            localStorage.setItem('jwt', jwt);
            navigate('/');
        }
    }, [user, jwt, navigate]);

    return <div>로딩중</div>;
};

export default CallBack;
