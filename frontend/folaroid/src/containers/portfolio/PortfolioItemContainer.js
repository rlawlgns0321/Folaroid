import React from 'react';
import { useDispatch } from 'react-redux';
import PortfolioItem from '../../components/mypage/PortfolioItem';
import { deletePortFolioThunk } from '../../modules/portfolio';

const PortfolioItemContainer = ({pf}) => {

    const dispatch = useDispatch();

    const onDeleteClick = () => {
        dispatch(deletePortFolioThunk(pf.pfNo));
    }

    return (
        <>
            <PortfolioItem pf={pf} onDeleteClick={onDeleteClick}/>
        </>
    );
};

export default PortfolioItemContainer;