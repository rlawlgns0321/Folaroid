import React, { useEffect } from 'react';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';

const CallBack = () => {
    const authUri = `BE와협의한 주소`;
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        const getToken = async () => {
            const { code } = qs.parse(location.search, {
                ignoreQueryPrefix: true,
            });
            console.log(code);
            // try {
            //     const response = await fetch(`${authUri}?code=${code}`);
            //     const data = await response.json();

            //     localStorage.setItem('token', data.jwt);
            //     localStorage.setItem('ProfileURL', data.avatar_url);

            //     history.push('/');
            // } catch (error) {}
            navigate('/');
        };
        getToken();
    }, [location, navigate, authUri]);

    return <div>로딩중</div>;
};

export default  CallBack;
