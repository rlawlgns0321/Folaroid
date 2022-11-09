import axios from 'axios';

const instance = () => {
    return axios.create({ baseURL: process.env.REACT_APP_BASE_URL, withCredentials:true });
};

const getToken = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    return user.jwt;
}

const server = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export { server, instance, getToken };
