import React, {useState} from "react";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

const InputModule = () => {
    const [name, setName] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}`);
        event.preventDefault();
    };

    return (
        <Box>
            <form onSubmit={handleSubmit} style={{margin: "10px 0 20px"}}>
            <InputLabel>
                이름:
            </InputLabel>
                <Input type="text" value={name} onChange={handleChangeName} />
            <Button type="submit" variant="contained">제출</Button>
        </form>
        </Box>
    )
}

export default InputModule;