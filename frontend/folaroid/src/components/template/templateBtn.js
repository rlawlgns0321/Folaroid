import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const templateBtn = ({template, onSelectTemplate}) => {
    const onChangeClick = () => {
        onSelectTemplate(template.templateNo)
    }
    return (
        <div>
            <Box>
                <Button onClick={onChangeClick}>
                    템플릿
                </Button>
            </Box>
        </div>
    );
};

export default templateBtn;