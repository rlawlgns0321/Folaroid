import { instance } from './client';

const api = instance();

const authCode = (code) => {
    return api.get(`/callback?code=${code}`);
};

export { authCode };
