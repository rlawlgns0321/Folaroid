import { instance } from "./client";


const api = instance();

const getProjects = () => {
    return api.get(`/projects`);
}

export {getProjects}