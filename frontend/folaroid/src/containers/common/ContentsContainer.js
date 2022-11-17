import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Contents from '../../components/common/Contents';
import { patchPortFolioThunk, portfolio } from '../../modules/portfolio';

const ContentsContainer = ({children}) => {
    const dispatch = useDispatch();
    const {pfNo} = useParams();
    const pfName = useSelector((state) => state.portfolio.pf.pfName);
    const {pf, isPatch} = useSelector((state) => state.portfolio);
    const navigate = useNavigate();

    const onChange = (e) => {
        dispatch(portfolio.actions.changePfName(e.target.value));
    }

    const onSave = () => {
        dispatch(patchPortFolioThunk(pf));
    }

    useEffect(() => {
        if(isPatch){
            navigate('/mypage');
        }
        return () => {
            dispatch(portfolio.actions.clearPatch());
        }
    },[isPatch, navigate, dispatch])

    return (
        <>
            <Contents pfName={pfName} onChange={onChange} onSave={onSave}>
                {children}
            </Contents>
        </>
    );
};

export default ContentsContainer;