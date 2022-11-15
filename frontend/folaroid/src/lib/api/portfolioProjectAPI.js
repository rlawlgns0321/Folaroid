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

const saveProject = (pjt) => {
    return api.patch(`/project/detail/${pjt.pjtNo}`, pjt);
}

const saveImages = ({pjtNo, images}) => {
    console.log({images});
    return api.post(`/project-image/${pjtNo}`, {images});
}


export { getProjects, deleteProject, createProject, getProject, saveProject, saveImages };
