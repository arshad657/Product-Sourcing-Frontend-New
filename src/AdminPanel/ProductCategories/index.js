import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HorizontalTableMenuCategory from './HozirontalTableMenuCategory';
import { BiSolidError } from 'react-icons/bi';

function ProductCategories() {
  const [productCategories, setProductCategories] = useState([])
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      const response = await axios.get('https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/product-categories');
      const transformedData = response.data.map(item => {
        const { _id, ...rest } = item; 
        return { id: _id, ...rest }; 
      });
      setProductCategories(transformedData); 
    } catch (error) {
        console.log(error.response)
    }
  };
  const columns = [
    { field: 'name', headerName: 'Category Name', width: 200, headerAlign: 'center', align: 'center', flex: 1},
    { field: 'totalCount', headerName: 'Total Count', width: 200, headerAlign: 'center', align: 'center', flex: 1},
    {
      field: 'actions',
      headerAlign: 'center',
      headerName: 'Actions',
      
      width: 150,
      renderCell: (params) => (
          <Button sx={{mx: 'auto'}}><HorizontalTableMenuCategory setError={setError} fetchData={fetchData} params={params}/></Button>
      ),
      flex: 1
    },
  ];

  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <Box >
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '30px'}}>
          <Typography sx={{fontWeight: 'bold'}} variant="h5" >Product Categories</Typography>
        </Box>
        {error && 
        <Box sx={{display: 'flex', mb: 4}}>
          <BiSolidError style={{color: 'red', fontSize: 20}}/>
          <Typography className='text-red-500 text-left' fontWeight={500} >{error}</Typography>
          </Box>
        }
        <DataGrid 
          rows={productCategories} 
          columns={columns}
          disableRowSelectionOnClick={true}
          rowHeight={80}
        />
    </Box>
  );
}

export default ProductCategories