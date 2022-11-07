import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import { auth } from '../../modules/auth';

const HeaderContainer = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(auth.actions.clearUser());
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div>
            <Header user={user} onLogout={onLogout}/>
        </div>
    );
};

export default HeaderContainer;
