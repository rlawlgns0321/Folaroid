import { instance } from "./client";


const api = instance();

const getPersonal = () => {
    return api.get(`/intro/personal`);
}

const postPersonal = () => {
    return api.post(`/intro/personal`)
}

const getImage = () => {
    return api.get(`/intro/image`);
}

export {getPersonal, postPersonal, getImage}