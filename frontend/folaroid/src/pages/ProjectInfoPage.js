import React from 'react';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import HeaderContainer from '../containers/header/HeaderContainer';
import TestPage from './TestPage';
import ProjectInfoContainer from '../containers/projectinfo/ProjectInfoContainer';

const ProjectInfoPage = () => {
    return (
        <TestPage>
            <HeaderContainer />
            <div class="bp4-dark">
                <ProjectInfoContainer />
            </div>
        </TestPage>
    );
};

export default ProjectInfoPage;
