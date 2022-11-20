import { instance } from './client';

const api = instance();

const getTemplate = (userNo, pfNo) => {
    return api.get(`/${userNo}/${pfNo}`);
};

export { getTemplate };
