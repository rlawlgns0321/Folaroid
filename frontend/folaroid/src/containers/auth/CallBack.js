import React, { useEffect } from 'react';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';

const CallBack = () => {
    const authUri = `http://localhost:8080/callback`;
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const getToken = async () => {
            const { code } = qs.parse(location.search, {
                ignoreQueryPrefix: true,
            });
            console.log(code);
            try {
                const response = await fetch(`${authUri}?code=${code}`);
                const data = await response.json();

                localStorage.setItem('token', data.jwt);
                console.log(data);
                navigate('/');
            } catch (error) {}
        };
        getToken();
    }, [location, navigate, authUri]);

    return <div>로딩중</div>;
};

export default CallBack;
