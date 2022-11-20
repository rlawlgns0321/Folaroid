import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../../components/dialog/AlertDialog';
import PortfolioItem from '../../components/mypage/PortfolioItem';
import {
    deletePortFolioThunk,
    getPortFolioThunk,
} from '../../modules/portfolio';

const PortfolioItemContainer = ({ pf }) => {
    const [open, setOpen] = useState();
    const userNo = useSelector((state) => state.auth.user.userNo);
    const navigate = useNavigate();

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

    const onGetClick = () => {
        dispatch(getPortFolioThunk(pf.pfNo));
    };

    const onViewClick = () => {
        window.open(`https://folaroid.com/${userNo}/${pf.pfNo}`, '_blank');
    };

    return (
        <>
            <PortfolioItem
                pf={pf}
                onGetClick={onGetClick}
                onDeleteClick={onDeleteClick}
                onViewClick={onViewClick}
            />
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
