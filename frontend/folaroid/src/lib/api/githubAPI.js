import { getToken, instance } from './client';

const api = instance();

const getRepo = (pjt_id) => {
    return api.get(`/repo?pjt_id=${pjt_id}`, {
        headers: {
            Authorization: getToken(),
        },
    });
};

const getRepos = () => {
    return api.get(`/repos`, {
        headers: {
            Authorization: getToken(),
        },
    });
};

export { getRepos, getRepo };
