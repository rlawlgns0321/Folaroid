import React from 'react';
import Button from '@mui/material/Button';
const MyPageHeader = () => {
    const onClick = () => {
        alert('새 포트폴리오 작성 페이지로 이동');
    };
    return (
        <div className="react">
            마이페이지
            <Button variant="outlined" size="large" onClick={onClick}>
                새 포트폴리오 작성
            </Button>
        </div>
    );
};

export default MyPageHeader;
