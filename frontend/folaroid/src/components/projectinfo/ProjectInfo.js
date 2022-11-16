import React, { useEffect } from 'react';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { SectionTab, SidePanel } from 'polotno/side-panel';
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
import { PhotosPanel } from '../../components/projectinfo/PhotosPanel';
import { CopyPanel } from '../../components/projectinfo/CopyPanel';
import HomePanel from '../../components/projectinfo/HomePanel';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { Workspace } from 'polotno/canvas/workspace';
import { DownloadButton } from 'polotno/toolbar/download-button';
import { Button } from '@blueprintjs/core';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import {
    portfolioProject,
    saveImagesThunk,
    saveProjectThunk,
} from '../../modules/portfolioProject';
import { useNavigate, useParams } from 'react-router-dom';

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
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

const ActionControls = ({ store }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pfNo, pjtNo } = useParams();
    const { isSave, project, isJson } = useSelector(
        (state) => state.portfolioProject
    );

    const handleClick = async (e) => {
        let images = [];

        for (let i = 0; i < store.pages.length; i++)
            images.push(await store.toDataURL({ pageId: store.pages[i].id }));

        const storeJson = await store.toJSON();

        dispatch(portfolioProject.actions.setProjectJson(storeJson));
        dispatch(saveImagesThunk({ pjtNo, images }));
    };

    useEffect(() => {
        if (isJson) {
            dispatch(saveProjectThunk(project));
        }
    }, [isJson, dispatch, project]);

    useEffect(() => {
        if (isSave) {
            navigate(`/portfolio/${pfNo}/project`);
        }
    }, [isSave, navigate, pfNo]);

    return (
        <div>
            <DownloadButton store={store} />
            <Button minimal onClick={handleClick}>
                Save&Exit
            </Button>
        </div>
    );
};
const ProjectInfo = ({ store }) => {
    return (
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
                    <Toolbar
                        store={store}
                        downloadButtonEnabled
                        components={{ ActionControls }}
                    />
                    <Workspace store={store} />
                    <ZoomButtons store={store} />
                </WorkspaceWrap>
            </PolotnoContainer>
        </Wrap>
    );
};

export default ProjectInfo;
