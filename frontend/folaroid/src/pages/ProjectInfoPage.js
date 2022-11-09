import React from 'react';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import { createStore } from 'polotno/model/store';
import HeaderContainer from '../containers/header/HeaderContainer'

const store = createStore({ key: 'zkx11y_517U965lTjfcT' });

const ProjectInfoPage = () => {

    return (
        <>
        <HeaderContainer/>
        <PolotnoContainer style={{ width: '100vw', height: '93vh' }}>
            <SidePanelWrap>
                <SidePanel store={store} />
            </SidePanelWrap>
            <WorkspaceWrap>
                <Toolbar store={store} downloadButtonEnabled />
                <Workspace store={store} />
                <ZoomButtons store={store} />
            </WorkspaceWrap>
        </PolotnoContainer>
        </>
    );
};

export default ProjectInfoPage;
