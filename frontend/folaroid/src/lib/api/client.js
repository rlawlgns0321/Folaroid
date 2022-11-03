import axios from 'axios';

const instance = () => {
    return axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
};

const server = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export { server, instance };
