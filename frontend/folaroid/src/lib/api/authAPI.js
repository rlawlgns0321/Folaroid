import { instance } from './client';

const api = instance();

const authCode = (code) => {
    return api.get(`/collback?code=${code}`);
};

export { authCode };
