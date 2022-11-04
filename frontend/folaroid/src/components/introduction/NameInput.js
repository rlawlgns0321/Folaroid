import React, { useState } from 'react';
import {
    Button,
    Box,
    Card,
    CardHeader,
    CardContent,
    TextField,
} from '@mui/material';


function NameInput(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value)
        const content = event.target[0].value;
        console.log(content)
        props.onCreate(content);
    };

    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="이름" />
            <CardContent>
                <Box>
                    <form style={{ margin: '10px' }} onSubmit={handleSubmit}>
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                            }}
                        >
                            <div style={{ width: '100%' }}>
                                <TextField
                                    label="이름"
                                    placeholder="이름"
                                    name="content"
                                    size="medium"
                                    InputLabelProps={{
                                        shrink: true,
                                      }}
                                    style={{ width: '40%' }}
                                />
                            </div>
                            <div>
                                <Button type="submit" variant="contained">
                                    저장
                                </Button>
                            </div>
                        </div>
                    </form>
                </Box>
            </CardContent>
        </Card>
    );
}

function ReadName(props) {
    return (
        <Card style={{ width: '80%', margin: '10px' }}>
            <CardHeader title="이름" />
            <CardContent>
                <Box>{props.name}</Box>
            </CardContent>
        </Card>
    );
}

function ViewName() {
    const [mode, setMode] = useState('CREATE');
    const [name, setName] = useState('');

    let content = null;
    if (mode === 'CREATE') {
        content = 
            <NameInput
                onCreate={(_name) => {
                    const newName = _name;
                    setName(newName);
                    setMode('READ')
                }}
            ></NameInput>
    } else if (mode === 'READ') {
      console.log({name})
      content = <ReadName name={name}></ReadName>
    }

    return content
}

export default ViewName;
