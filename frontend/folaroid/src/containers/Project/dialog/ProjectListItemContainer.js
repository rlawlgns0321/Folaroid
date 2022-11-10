import React from 'react';
import { useDispatch } from 'react-redux';
import ProjectListItem from '../../../components/project/dialog/ProjectListItem';
import { github } from '../../../modules/github';

const ProjectListItemContainer = ({num, repo}) => {

    const dispatch = useDispatch();

    const onSelect = () => {
        dispatch(github.actions.changeSelect(num));
    }

    return (
        <>
            <ProjectListItem repo={repo} onSelect={onSelect}/>
        </>
    );
};

export default ProjectListItemContainer;