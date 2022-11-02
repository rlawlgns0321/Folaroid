import React from 'react';
import { Chip, Autocomplete, TextField } from '@mui/material';

const SearchInput = () => {
    return (
        <div style={{ display:'flex', width: '100%', justifyContent: 'center'}}>
            <Autocomplete
                multiple
                style={{ width: '50%'}}
                id="tags-outlined"
                options={stacks}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="stacks"
                    />
                )}
            />
        </div>
    );
};

const stacks = [
    { title: 'React'},
    { title: 'Vuejs'},
    { title: 'Spring'},
    { title: 'Python'},
    { title: 'Django'},
    { title: 'HTML'},
    { title: 'CSS'},
];

export default SearchInput;
