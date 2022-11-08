import { instance } from './client';

const api = instance();

const readSimplePortfolio = (userNo) => {
    return api.get(`/portfolio/all/${userNo}`);
};

const createPortfolio = (param) => {
    return api.post(`/portfolio`, param);
}

export { readSimplePortfolio, createPortfolio };
