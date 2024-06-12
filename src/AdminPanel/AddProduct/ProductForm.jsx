import { Box,Button, Grid, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageUploader from './ImageUploader'
// import Category from './Category'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Category from './Category';

function ProductForm({uploadedFiles, setUploadedFiles, data, setData}) {
  const [numberOfPriceObjects, setNumberOfPriceObjects] = useState(1);

  
  const handleChange = (value, item_name, index) => {
    if (item_name === 'from' || item_name === 'to' || item_name === 'amount') {
      setData(prevData => {
        const updatedPrices = (prevData.prices || []).map(item =>
          item.id === index ? { ...item, [item_name]: value } : item
        );
  
        const existingItem = updatedPrices.find(item => item.id === index);
  
        if (!existingItem) {
          return {
            ...prevData,
            prices: [
              ...updatedPrices,
              {
                id: index,
                from: item_name === 'from' ? value : '',
                to: item_name === 'to' ? value : '',
                amount: item_name === 'amount' ? value : '',
              },
            ],
          };
        }
  
        return { ...prevData, prices: updatedPrices };
      });
    } else {
      setData(prevData => ({
        ...prevData,
        [item_name]: value,
      }));
    }
  };
  
  
  // console.log()
  return (
    <Grid container my={5}>
        <Grid item xs={4} sx={{border: '1px solid #D9D9D9',py: 3, borderRadius: '10px'}}>
          <ImageUploader uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles} data={data} setData={setData}/>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{border: '1px solid #D9D9D9', width: '90%', mx: 'auto', borderRadius: '10px', py: 3, height: '60vh', overflowX: 'auto'}}>
            <Box sx={{mx: 5,textAlign: 'left', mb: 3}}>
              <Typography fontSize='16px' mb={0.5}>Title
                <span className='text-red-500'>*</span>
              </Typography>
              <TextField
                id="outlined-basic"
                sx={{height: '50px'}} 
                variant="outlined"
                value={data?.title} 
                fullWidth 
                inputProps={{ style: { height: "10px" } }} 
                onChange={(e) => handleChange(e.target.value, 'title')} 
              />
            </Box>
            <Box sx={{mx: 5,textAlign: 'left', mb: 3}}>
              <Typography fontSize='16px' mb={0.5}>Sub Title</Typography>
              <TextField 
              id="outlined-basic" 
              variant="outlined" 
              sx={{height: '50px'}}
              fullWidth
              value={data?.subTitle} 
              inputProps={{ style: { height: "10px" } }}
              onChange={(e) => handleChange(e.target.value, 'subTitle')} 
              />
            </Box>
            <Box sx={{mx: 5,textAlign: 'left', mb: 3}}>
              <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography fontSize='16px' mb={0.5}>Prices
                <span className='text-red-500'>*</span>
                </Typography>
                <IconButton onClick={() => setNumberOfPriceObjects(numberOfPriceObjects + 1)}>
                  <CiCirclePlus />
                </IconButton>
              </Box>
              
              {Array.from({ length: numberOfPriceObjects }, (_, index) => (
                <Box key={index} sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>
                <TextField sx={{height: '50px'}} id="outlined-basic" label="From" variant="outlined" onChange={(e) => handleChange(e.target.value, 'from', index)} value={data?.prices[index]?.from}/>
                <TextField sx={{height: '50px'}} id="outlined-basic" label="To" variant="outlined" onChange={(e) => handleChange(e.target.value, 'to', index)}/>
                <TextField sx={{height: '50px'}} id="outlined-basic" label="Amount" variant="outlined" type='number' onChange={(e) => handleChange(e.target.value, 'amount', index)}/>
                <IconButton onClick={() => setNumberOfPriceObjects(numberOfPriceObjects - 1)}>
                  <CiCircleMinus />
                </IconButton>
              </Box>
              ))}
              
            </Box>
            <Box sx={{mx: 5,textAlign: 'left', mb: 3}}>
              <Typography fontSize='16px' mb={0.5}>Description
                <span className='text-red-500'>*</span>
              </Typography>
              <TextField 
              id="outlined-basic" 
              variant="outlined"
              sx={{height: '80px'}} 
              fullWidth
              value={data?.description} 
              multiline
              onChange={(e) => handleChange(e.target.value, 'description')}
              />
            </Box>
            <Box sx={{mx: 5,textAlign: 'left', mb: 3}}>
              <Typography fontSize='16px' mb={0.5}>Brand</Typography>
              <TextField 
              id="outlined-basic" 
              variant="outlined"
              sx={{height: '50px'}} 
              fullWidth
              value={data?.brand} 
              inputProps={{ style: { height: "10px" } }}
              onChange={(e) => handleChange(e.target.value, 'brand')} 
              />
            </Box>
            <Box sx={{mx: 5,textAlign: 'left', mb: 3}}>
              <Typography fontSize='16px' mb={0.5}>Model Name</Typography>
              <TextField 
              id="outlined-basic" 
              variant="outlined"
              sx={{height: '50px'}} 
              fullWidth
              value={data?.modelName} 
              inputProps={{ style: { height: "10px" } }}
              onChange={(e) => handleChange(e.target.value, 'modelName')} 
              />
            </Box>
            <Box sx={{mx: 5,textAlign: 'left', mb: 3}}>
              <Typography fontSize='16px' mb={0.5}>Color</Typography>
              <TextField 
              id="outlined-basic" 
              variant="outlined"
              sx={{height: '50px'}} 
              fullWidth
              value={data?.color} 
              inputProps={{ style: { height: "10px" } }}
              onChange={(e) => handleChange(e.target.value, 'color')} 
              />
            </Box>
            <Box sx={{mx: 5,textAlign: 'left', mb: 3}}>
              <Typography fontSize='16px' mb={0.5}>Category
                <span className='text-red-500'>*</span>
              </Typography>
              <Category data={data} setData={setData}/>
            </Box>
          </Box>
        </Grid>
      </Grid>
  )
}

export default ProductForm