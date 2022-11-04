import { instance } from "./client";


const api = instance();

const findByGithub = github_id => {
    return api.get(`/intro?github_id=${github_id}`)
}

const getPersonal = (id) => {
    return api.get(`/intro/personal/${id}`);
}

const updatePersonal = (id, data) => {
    return api.put(`/intro/personal/${id}`, data);
}

const deletePersonal = (id, data) => {
    return api.delete(`/intro/personal/${id}`, data);
}


const getSlogan = () => {
    return api.get(`/intro/image`);
}

export {findByGithub, getPersonal, updatePersonal, deletePersonal, getSlogan}