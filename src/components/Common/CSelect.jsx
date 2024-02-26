import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { useEffect } from 'react';

export default function CSelect({setFinalItem, setInitialState, options, title, prices, setSelectedCountry, selectedCountry}) {
  const [value, setValue] = useState('');
  const uniqueArray = [...new Set(options)];

  useEffect(() => {
    setSelectedCountry((prevSelectedCountry) => {
      const updatedCountry = title === 'from'
      ? { ...prevSelectedCountry, from: value }
      : { ...prevSelectedCountry, to: value };
      
      const updatedFinalItem = prices?.filter(price => price.from === updatedCountry.from && price.to === updatedCountry.to);
      setFinalItem(updatedFinalItem);
      return updatedCountry;
    });
  }, [value, title]);
  
  const handleChange = (event) => {
    setValue(event.target.value);
    setInitialState(false)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country"
          value={value}
          onChange={handleChange}
          sx={{height: {md: '50%'}}}
        >
          { uniqueArray ?.map(item => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}