import { createAction, createReducer } from '@reduxjs/toolkit';

const getPortfolioProjects = createAction(
    'portfolioProject/GET_PORTFOLIO_PROJECTS'
);

const initialState = {
    projects: [
        { id: 1, name: '프로젝트1', lastUpdate: '7일전' },
        { id: 2, name: '프로젝트2', lastUpdate: '5일전' },
        { id: 3, name: '프로젝트5', lastUpdate: '27일전' },
    ],
};

const portfolioProject = createReducer(initialState, (builder) => {
    builder.addCase(getPortfolioProjects, (state, action) => {

    });
});

export default portfolioProject;
