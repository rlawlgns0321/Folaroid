import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectListDialog from '../../../components/project/dialog/ProjectListDialog';
import { getReposThunk, getRepoThunk, github } from '../../../modules/github';
import { createProjectThunk } from '../../../modules/portfolioProject';

const ProjectlistDialogConatiner = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.github.repos);
    const { isRepo, repo } = useSelector((state) => state.github);
    const { isProject, project } = useSelector(
        (state) => state.portfolioProject
    );
    const { pfNo } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (open) dispatch(getReposThunk());
        else {
            dispatch(github.actions.clearRepos());
            dispatch(github.actions.clearRepo());
        }
        return () => {
            dispatch(github.actions.clearRepos());
            dispatch(github.actions.clearRepo());
        };
    }, [dispatch, open]);

    useEffect(() => {
        if (open && isRepo) {
            dispatch(
                createProjectThunk({
                    pfNo,
                    repo,
                })
            );
        }
    }, [repo, pfNo, open, dispatch, isRepo]);

    useEffect(() => {
        if (open && isProject && isRepo) {
            navigate(`/portfolio/${pfNo}/project/${project.pjtNo}?pjtId=${project.pjtId}`);
        }
    }, [isProject, navigate, pfNo, project, isRepo, open]);

    const handleSubmit = () => {
        let pjtId = null;
        for (let i = 0; i < repos.length; i++) {
            if (repos[i].checked) pjtId = repos[i].id;
        }
        if (pjtId !== null) dispatch(getRepoThunk(pjtId));
    };

    return (
        <div>
            <ProjectListDialog
                repos={repos}
                open={open}
                onClose={handleClose}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default ProjectlistDialogConatiner;
