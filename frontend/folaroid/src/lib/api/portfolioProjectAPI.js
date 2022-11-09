import { instance } from './client';

const api = instance();

const getProjects = (pfNo) => {
    return api.get(`/project/${pfNo}`);
};

const deleteProject = (pjtNo) => {
    return api.delete(`/project/${pjtNo}`);
};

export { getProjects, deleteProject };
