import React from 'react';
import { useDispatch } from 'react-redux';
import PortfolioItem from '../../components/portfolio/PortFolioItem';
import { deletePortFolioThunk } from '../../modules/portfolio';

const PortfolioItemContainer = ({pf}) => {

    const dispatch = useDispatch();

    const onDeleteClick = () => {
        dispatch(deletePortFolioThunk(pf.pfNo));
    }

    return (
        <div>
            <PortfolioItem pf={pf} onDeleteClick={onDeleteClick}/>
        </div>
    );
};

export default PortfolioItemContainer;