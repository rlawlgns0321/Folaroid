import { getToken, instance } from './client';

const api = instance();

const repo = (pjt_id) => {
    return api.get(`/repo?pjt_id=${pjt_id}`, {
        headers: {
            Authorization: getToken(),
        },
    });
};

const repos = () => {
    return api.get(`/repos`, {
        headers: {
            Authorization: getToken(),
        },
    });
};

export { repos, repo };
