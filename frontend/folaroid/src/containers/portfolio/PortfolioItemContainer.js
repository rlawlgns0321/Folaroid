import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AlertDialog from '../../components/dialog/AlertDialog';
import PortfolioItem from '../../components/mypage/PortfolioItem';
import { deletePortFolioThunk } from '../../modules/portfolio';

const PortfolioItemContainer = ({ pf }) => {
    const [open, setOpen] = useState();
    
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const onDeleteClick = () => {
        setOpen(true);
    };

    const handleOn = () => {
        dispatch(deletePortFolioThunk(pf.pfNo));
    };
    return (
        <>
            <PortfolioItem pf={pf} onDeleteClick={onDeleteClick} />
            <AlertDialog
                open={open}
                handleClose={handleClose}
                handleOn={handleOn}
                title="포트폴리오 삭제"
                content={`${pf.pfName}포트폴리오를 삭제합니다.`}
            />
        </>
    );
};

export default PortfolioItemContainer;
