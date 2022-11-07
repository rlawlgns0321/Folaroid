import { instance } from './client';

const api = instance();

const authCode = (code) => {
    return api.get(`/callback?code=${code}`);
};

const introNo = (userGithubId) => {
    return api.get(`/user-info/mypage?userGithubId=${userGithubId}`);
};

export { authCode, introNo };
