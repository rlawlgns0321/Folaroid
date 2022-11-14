import axios from 'axios';
import { instance } from './client';

const api = instance();

const getPersonal = (intro_no) => {
    return api.get(`/user-info/${intro_no}`);
};

const updatePersonal = (data) => {
    return api.put(`/user-info`, data);
};

const findByGithub = (user_github_id) => {
    return api.get(`/user-info/mypage`, user_github_id);
};

const getSlogan = (intro_no) => {
    return api.get(`/intro-slogan/${intro_no}`);
};

const createSlogan = (data) => {
    return api.post(`/intro-slogan`, data);
};

const deleteSlogan = (intro_slogan_no) => {
    return api.delete(`/intro-slogan/${intro_slogan_no}`);
};

const getActivity = (intro_no) => {
    return api.get(`/intro-activity/${intro_no}`);
};

const createActivity = (data) => {
    return api.post(`/intro-activity`, data);
};

const deleteActivity = (intro_activity_no) => {
    return api.delete(`/intro-activity/${intro_activity_no}`);
};

const getArchiving = (intro_no) => {
    return api.get(`/mypage/intro-archiving/${intro_no}`);
};

const createArchiving = (data) => {
    return api.post(`/mypage/intro-archiving`, data);
};

const deleteArchiving = (intro_archiving_no) => {
    return api.delete(`/mypage/intro-archiving/${intro_archiving_no}`);
};

const getAwards = (intro_no) => {
    return api.get(`/intro-awards/${intro_no}`);
};

const createAward = (data) => {
    return api.post(`/intro-awards`, data);
};

const deleteAward = (intro_awards_no) => {
    return api.delete(`/intro-awards/${intro_awards_no}`);
};

const getCareer = (intro_no) => {
    return api.get(`/intro-career/${intro_no}`);
};

const createCareer = (data) => {
    return api.post(`/intro-career`, data);
};

const deleteCareer = (intro_career_no) => {
    return api.delete(`/intro-career/${intro_career_no}`);
};

const getCertification = (intro_no) => {
    return api.get(`/intro-certification/${intro_no}`);
};

const createCertification = (data) => {
    return api.post(`/intro-certification`, data);
};

const deleteCertification = (intro_certification_no) => {
    return api.delete(`/intro-certification/${intro_certification_no}`);
};

const getLanguage = (intro_no) => {
    return api.get(`/intro-language/${intro_no}`);
};

const createLanguage = (data) => {
    console.log(data)
    return api.post(`/intro-language`, data);
};

const deleteLanguage = (intro_language_no) => {
    return api.delete(`/intro-language/${intro_language_no}`);
};

const getSchool = (intro_no) => {
    return api.get(`/intro-school/${intro_no}`);
};

const createSchool = (data) => {
    return api.post(`/intro-school`, data);
};

const deleteSchool = (intro_school_no) => {
    return api.delete(`/intro-school/${intro_school_no}`);
};

const getStack = (intro_no) => {
    return api.get(`/intro-stack/${intro_no}`);
};

const createStack = (data) => {
    return api.post(`/intro-stack`, data);
};

const deleteStack = (intro_school_no) => {
    return api.delete(`/intro-stack/${intro_school_no}`);
};

const getHash = () => {
    return api.get(`/hash-tag`);
};

const getImage = (intro_no) => {
    return api.get(`intro-image/${intro_no}`);
};

const box = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        withCredentials: true,
        headers: {
            'content-type': 'multipart/form-data',
        },
    });
};

const apii = box()

const updateImage = (intro_no, data) => {
    console.log("data",data);
    return apii.put(`/intro-image/${intro_no}`, {file:data});
};

export {
    findByGithub,
    getPersonal,
    updatePersonal,
    getSlogan,
    createSlogan,
    deleteSlogan,
    getActivity,
    createActivity,
    deleteActivity,
    getArchiving,
    createArchiving,
    deleteArchiving,
    getAwards,
    createAward,
    deleteAward,
    getCareer,
    createCareer,
    deleteCareer,
    getCertification,
    createCertification,
    deleteCertification,
    getLanguage,
    createLanguage,
    deleteLanguage,
    getSchool,
    createSchool,
    deleteSchool,
    getStack,
    createStack,
    deleteStack,
    getHash,
    getImage,
    updateImage,
};
