import { instance } from './client';

const api = instance();

const readSimplePortfolio = (userNo) => {
    return api.get(`/portfolio/all/${userNo}`);
};

export { readSimplePortfolio };
