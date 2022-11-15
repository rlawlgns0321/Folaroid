import { instance } from './client';

const api = instance();

const getProjects = (pfNo) => {
    return api.get(`/project/${pfNo}`);
};

const getProject = (pjtNo) => {
    return api.get(`/project/detail/${pjtNo}`);
}

const deleteProject = (pjtNo) => {
    return api.delete(`/project/${pjtNo}`);
};

const createProject = (pjt) => {
    return api.post(`/project`, pjt);
}

export { getProjects, deleteProject, createProject, getProject };
