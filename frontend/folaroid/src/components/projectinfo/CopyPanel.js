import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Alert, Card, CardContent, Snackbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const WordCard = ({ text, handleClick }) => {
    const handleCopyClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(text);
            handleClick();
        } catch (error) {}
    };

    return (
        <Card
            sx={{
                width: '90%',
                cursor: 'pointer',
                backgroundColor: '#f5f5f5',
                margin: '20px auto',
            }}
            onClick={() => handleCopyClipBoard()}
        >
            <CardContent>
                <Typography sx={{ wordBreak: 'break-all' }}>{text}</Typography>
            </CardContent>
        </Card>
    );
};

export const CopyPanel = observer(({ store }) => {
    const contents = useSelector((state) => state.github.repo.readmeContent);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div
            style={{
                height: '100%',
                overflow: 'scroll',
            }}
        >
            {contents &&
                contents.map((content, key) => (
                    <WordCard
                        key={key}
                        text={content}
                        handleClick={handleClick}
                    />
                ))}
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    클립보드 복사 완료!
                </Alert>
            </Snackbar>
        </div>
    );
});
