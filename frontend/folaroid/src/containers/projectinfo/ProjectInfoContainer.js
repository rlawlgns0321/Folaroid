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
        url: '/public_assets/fonts/BlackAndWhitePicture-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'BlackHanSans-Regular',
        url: '/public_assets/fonts/BlackHanSans-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'CuteFont-Regular',
        url: '/public_assets/fonts/CuteFont-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'Dokdo-Regular',
        url: '/public_assets/fonts/Dokdo-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'Dongle-Bold',
        url: '/public_assets/fonts/Dongle-Bold.ttf',
    });

    store.addFont({
        fontFamily: 'Dongle-Light',
        url: '/public_assets/fonts/Dongle-Bold.ttf',
    });

    store.addFont({
        fontFamily: 'Gaegu-Bold',
        url: '/public_assets/fonts/Gaegu-Bold.ttf',
    });

    store.addFont({
        fontFamily: 'GamjaFlower-Regular',
        url: '/public_assets/fonts/GamjaFlower-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'GothicA1-Black',
        url: '/public_assets/fonts/GothicA1-Black.ttf',
    });

    store.addFont({
        fontFamily: 'GowunBatang-Regular',
        url: '/public_assets/fonts/GowunBatang-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'Gugi-Regular',
        url: '/public_assets/fonts/Gugi-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'HiMelody-Regular',
        url: '/public_assets/fonts/HiMelody-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'Jua-Regular',
        url: '/public_assets/fonts/Jua-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'KirangHaerang-Regular',
        url: '/public_assets/fonts/KirangHaerang-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'NanumBarunpenB',
        url: '/public_assets/fonts/NanumBarunpenB.ttf',
    });

    store.addFont({
        fontFamily: 'NanumBarunpenR',
        url: '/public_assets/fonts/NanumBarunpenR.ttf',
    });

    store.addFont({
        fontFamily: 'NanumBrush',
        url: '/public_assets/fonts/NanumBrush.ttf',
    });

    store.addFont({
        fontFamily: 'NanumMyeongjo',
        url: '/public_assets/fonts/NanumMyeongjo.ttf',
    });

    store.addFont({
        fontFamily: 'NanumPen',
        url: '/public_assets/fonts/NanumPen.ttf',
    });

    store.addFont({
        fontFamily: 'NanumSquareRoundB',
        url: '/public_assets/fonts/NanumSquareRoundB.ttf',
    });

    store.addFont({
        fontFamily: 'PoorStory-Regular',
        url: '/public_assets/fonts/PoorStory-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'SingleDay-Regular',
        url: '/public_assets/fonts/SingleDay-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'Stylish-Regular',
        url: '/public_assets/fonts/Stylish-Regular.ttf',
    });

    store.addFont({
        fontFamily: 'YeonSung-Regular',
        url: '/public_assets/fonts/YeonSung-Regular.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 갈맷글',
        url: '/public_assets/fonts/나눔손글씨 갈맷글.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 금은보화',
        url: '/public_assets/fonts/나눔손글씨 금은보화.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 가람연꽃',
        url: '/public_assets/fonts/나눔손글씨 가람연꽃.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 기쁨밝음',
        url: '/public_assets/fonts/나눔손글씨 기쁨밝음.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 끄트머리체',
        url: '/public_assets/fonts/나눔손글씨 끄트머리체.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 다시 시작해',
        url: '/public_assets/fonts/나눔손글씨 다시 시작해.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 달의궤도',
        url: '/public_assets/fonts/나눔손글씨 달의궤도.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 둥근인연',
        url: '/public_assets/fonts/나눔손글씨 둥근인연.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 맛있는체',
        url: '/public_assets/fonts/나눔손글씨 맛있는체.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 바른히피',
        url: '/public_assets/fonts/나눔손글씨 바른히피.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 버드나무',
        url: '/public_assets/fonts/나눔손글씨 버드나무.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 부장님 눈치체',
        url: '/public_assets/fonts/나눔손글씨 부장님 눈치체.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 비상체',
        url: '/public_assets/fonts/나눔손글씨 비상체.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 상해찬미체',
        url: '/public_assets/fonts/나눔손글씨 상해찬미체.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 소미체',
        url: '/public_assets/fonts/나눔손글씨 소미체.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 수줍은 대학생',
        url: '/public_assets/fonts/나눔손글씨 수줍은 대학생.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 아줌마 자유',
        url: '/public_assets/fonts/나눔손글씨 아줌마 자유.ttf',
    });
    
    store.addFont({
        fontFamily: '나눔손글씨 예쁜 민경체',
        url: '/public_assets/fonts/나눔손글씨 예쁜 민경체.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 자부심지우',
        url: '/public_assets/fonts/나눔손글씨 자부심지우.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 장미체',
        url: '/public_assets/fonts/나눔손글씨 장미체.ttf',
    });

    store.addFont({
        fontFamily: '나눔손글씨 흰꼬리수리',
        url: '/public_assets/fonts/나눔손글씨 흰꼬리수리.ttf',
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
