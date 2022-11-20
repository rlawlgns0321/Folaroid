import React, { useEffect } from 'react';
import { createStore } from 'polotno/model/store';
import ProjectInfo from '../../components/projectinfo/ProjectInfo';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import {
    getProjectThunk,
    portfolioProject,
} from '../../modules/portfolioProject';
import { getRepoThunk, github } from '../../modules/github';

const ProjectInfoContainer = () => {
    const store = createStore({ key: 'zkx11y_517U965lTjfcT' });

    store.addFont({
        fontFamily: 'BlackAndWhitePicture-Regular',
        url: 'url("/public_assets/fonts/BlackAndWhitePicture-Regular.ttf")',
    });

    store.addFont({
        fontFamily: 'Dongle-Bold',
        url: 'url("/public_assets/fonts/Dongle-Bold.ttf")',
    });

    store.addFont({
        fontFamily: 'Dongle-Light',
        url: 'url("/public_assets/fonts/Dongle-Bold.ttf")',
    });

    store.addFont({
        fontFamily: 'Gaegu-Bold',
        url: 'url("/public_assets/fonts/Gaegu-Bold.ttf")',
    });
    
    store.addFont({
        fontFamily: 'GothicA1-Black',
        url: 'url("/public_assets/fonts/GothicA1-Black.ttf")',
    });

    store.addFont({
        fontFamily: 'GowunBatang-Regular',
        url: 'url("/public_assets/fonts/GowunBatang-Regular.ttf")',
    });

    store.addFont({
        fontFamily: 'Gugi-Regular',
        url: 'url("/public_assets/fonts/Gugi-Regular.ttf")',
    });

    store.addFont({
        fontFamily: 'HiMelody-Regular',
        url: 'url("/public_assets/fonts/HiMelody-Regular.ttf")',
    });

    store.addFont({
        fontFamily: 'Jua-Regular',
        url: 'url("/public_assets/fonts/Jua-Regular.ttf")',
    });

    store.addFont({
        fontFamily: 'KirangHaerang-Regular',
        url: 'url("/public_assets/fonts/KirangHaerang-Regular.ttf")',
    });

    store.addFont({
        fontFamily: '나눔손글씨 가람연꽃',
        url: 'url("/public_assets/fonts/나눔손글씨 가람연꽃.ttf")',
    });

    const dispatch = useDispatch();
    const { pfNo, pjtNo } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const isProject = useSelector((state) => state.portfolioProject.isProject);
    const pjtJson = useSelector(
        (state) => state.portfolioProject.project.pjtJson
    );

    useEffect(() => {
        dispatch(getProjectThunk(pjtNo));
        dispatch(getRepoThunk(searchParams.get('pjtId')));
        return () => {
            dispatch(portfolioProject.actions.clearProject());
            dispatch(github.actions.clearRepo());
        };
    }, []);

    useEffect(() => {
        if (isProject && pjtJson) {
            const json = JSON.parse(pjtJson);
            store.loadJSON(json);
        }
    }, [isProject]);

    return (
        <>
            <ProjectInfo store={store} />
        </>
    );
};

export default React.memo(ProjectInfoContainer);
