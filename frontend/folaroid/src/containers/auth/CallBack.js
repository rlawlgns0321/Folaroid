import React, { useEffect } from 'react';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import { authCode } from '../../lib/api/authAPI';
import { useDispatch, useSelector } from 'react-redux';

const CallBack = () => {
    const authUri = `http://localhost:8080/callback`;
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, jwt } = useSelector((state) => state.auth);

    useEffect(() => {
        const { code } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(authCode(code));
    }, [location, authUri, dispatch]);

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
