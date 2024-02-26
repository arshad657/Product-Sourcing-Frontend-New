// import * as React from 'react';
// import Box from '@mui/material/Box';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function CategoryInput({ options, data, setData }) {
  const handleChange = (event) => {
    setData({ ...data, category: event.target.value });
  };

  return (
    <Box sx={{ minWidth: 120, flex: 1, mr: 2 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.category || ''}  // Set a default value if data.category is undefined
          onChange={handleChange}
        >
          {options.map((item) => (
            <MenuItem value={item.name} key={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
