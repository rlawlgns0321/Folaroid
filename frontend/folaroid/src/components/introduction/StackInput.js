import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Autocomplete, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import styled from '@emotion/styled';

const CardHeader = styled.div`
    border-radius: 0 10px 10px 0;
    backdrop-filter: blur(10px);
    padding: 20px;
    font-size: 2rem;
    font-weight: bolder;
    color: white;
`;

const IntroCardContent = styled(CardContent)`
    background-color: rgba(186, 183, 183, 1);
`;

const IntroBox = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const StackInputModule = () => {
    const [stackData, setStackData] = useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
        { key: 5, label: 'Angular' },
        { key: 6, label: 'jQuery' },
        { key: 7, label: 'Polymer' },
        { key: 8, label: 'React' },
        { key: 9, label: 'Vue.js' },
    ]);

    // const [stack, setStack] = useState['']

    const handleDelete = (stackToDelete) => () => {
        console.info('You clicked');
        setStackData((stacks) =>
            stacks.filter((stack) => stack.key !== stackToDelete.key)
        );
    };

    // const handleChangeStack = useCallback((event) => {
    //   setStack(event.target.value);
    // }, []);

    const handleSubmit = (event) => {
        alert(`이름: ${stackData}`);
        event.preventDefault();
    };

    return (
        <IntroBox>
            <CardHeader>기술스택</CardHeader>
            <Card>
                {/* <CardHeader suppressHydrationWarning title="기술스택" /> */}
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <Autocomplete
                        multiple
                        style={{ width: '50%', borderInlineColor: 'white' }}
                        options={stackData}
                        getOptionLabel={(option) => option.label}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                variant="filled"
                                {...params}
                                placeholder="stacks"
                            />
                        )}
                    />
                </div>

                <IntroCardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            p: 0.5,
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            width: '80%',
                            border: 'solid 1px gray',
                            borderRadius: '30px',
                        }}
                        component="ul"
                    >
                        {stackData.map((data) => {
                            return (
                                <Stack spacing={2} alignItems="center">
                                    <ListItem key={data.key}>
                                        <Chip
                                            style={{ margin: '5px' }}
                                            label={data.label}
                                            onDelete={handleDelete(data)}
                                            color="primary"
                                            variant="outlined"
                                        ></Chip>
                                    </ListItem>
                                </Stack>
                            );
                        })}
                    </Box>
                </IntroCardContent>
            </Card>
        </IntroBox>
    );
};

export default StackInputModule;
