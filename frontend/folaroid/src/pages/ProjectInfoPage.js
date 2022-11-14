import React from 'react';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SectionTab, SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import { createStore } from 'polotno/model/store';
import HeaderContainer from '../containers/header/HeaderContainer';
import MdPhotoLibrary from '@meronex/icons/md/MdPhotoLibrary';
import MdDescription from '@meronex/icons/md/MdDescription';
import MdHome from '@meronex/icons/md/MdHome';
import {
    TextSection,
    ElementsSection,
    UploadSection,
    BackgroundSection,
    SizeSection,
} from 'polotno/side-panel';
import { PhotosPanel } from '../components/projectinfo/PhotosPanel';
import { CopyPanel } from '../components/projectinfo/CopyPanel';
import styled from '@emotion/styled';
import HomePanel from '../components/projectinfo/HomePanel';
import TestPage from './TestPage';
import { DownloadButton } from 'polotno/toolbar/download-button';
import { Button } from '@blueprintjs/core';

const store = createStore({ key: 'zkx11y_517U965lTjfcT' });

const CustomPhotos = {
    name: 'photos',
    Tab: (props) => (
        <SectionTab name="Photos" {...props}>
            <MdPhotoLibrary />
        </SectionTab>
    ),
    // we need observer to update component automatically on any store changes
    Panel: PhotosPanel,
};

const CopyText = {
    name: 'copy',
    Tab: (props) => (
        <SectionTab name="CopyText" {...props}>
            <MdDescription />
        </SectionTab>
    ),
    Panel: CopyPanel,
};

const Home = {
    name: 'home',
    Tab: (props) => (
        <SectionTab name="home" {...props}>
            <MdHome />
        </SectionTab>
    ),
    Panel: HomePanel,
};

const ActionControls = ({ store }) => {
    return (
        <div>
            <DownloadButton store={store} />
            <Button
                minimal
                onClick={ async () => {
                    console.log(store.toJSON());
                    console.log(await store.toDataURL({ mimeType: 'image/jpg' }));
                }}
            >
                Save&Exit
            </Button>
        </div>
    );
};

const sections = [
    Home,
    TextSection,
    CopyText,
    CustomPhotos,
    ElementsSection,
    UploadSection,
    BackgroundSection,
    // we will replace default resize with our own
    SizeSection,
];

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProjectInfoPage = () => {
    return (
        <TestPage>
            <HeaderContainer />
            <div class="bp4-dark">
                <Wrap>
                    <PolotnoContainer
                        style={{
                            width: '90vw',
                            height: '90vh',
                            borderRadius: '10px',
                        }}
                        className="polotno-app-container"
                    >
                        <SidePanelWrap>
                            <SidePanel
                                store={store}
                                sections={sections}
                                defaultSection="home"
                            />
                        </SidePanelWrap>
                        <WorkspaceWrap>
                            <Toolbar store={store} downloadButtonEnabled components={{ActionControls}} />
                            <Workspace store={store} />
                            <ZoomButtons store={store} />
                        </WorkspaceWrap>
                    </PolotnoContainer>
                </Wrap>
            </div>
        </TestPage>
    );
};

export default ProjectInfoPage;
