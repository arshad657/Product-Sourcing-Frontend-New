import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HorizontalTableMenu from './HorizontalTableMenu';

function ProductList() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const fetchData = async () => {
    try {
      const response = await axios.get('https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/products');
      const transformedData = response.data.map(item => {
        const { _id, ...rest } = item; 
        return { id: _id, ...rest }; 
      });
      
      console.log(transformedData);
      setProducts(transformedData); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const columns = [
    { field: 'photo', headerName: 'Photo', width: 200, headerAlign: 'center', align: 'center', flex: 1, renderCell: (params) => (
      <Box sx={{width: '30%',}}>
        <img src={params.row.images[0]} alt={params.row.name} />
      </Box>
    ),
  },
    { field: 'title', headerName: 'Title', width: 200, headerAlign: 'center', align: 'center', flex: 1},
    { field: 'category', headerName: 'Category', width: 200, headerAlign: 'center', align: 'center', flex: 1},
    { field: 'description', headerName: 'Description', width: 300, headerAlign: 'center',align: 'center' , flex: 1},
    {
      field: 'actions',
      headerAlign: 'center',
      headerName: 'Actions',
      
      width: 150,
      renderCell: (params) => (
          <Button sx={{mx: 'auto'}}><HorizontalTableMenu fetchData={fetchData} params={params}/></Button>
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
          <Typography sx={{fontWeight: 'bold'}} variant="h5" >Product List</Typography>
          <button className='bg-yellow-600 py-3 w-28 text-gray-200 font-semibold rounded-lg shadow-md' onClick={() => navigate('/admin/add-product')}>Create</button>
        </Box>
        <DataGrid 
          rows={products} 
          columns={columns}
          disableRowSelectionOnClick={true}
          rowHeight={80}
        />
    </Box>
  );
}

export default ProductList