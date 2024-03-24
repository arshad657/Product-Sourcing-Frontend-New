import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CreateStaffPopup from './CreateStaffPopup.jsx';
import HorizontalTableMenuStaff from './HorizontalTableMenuStaff.jsx';
import { useAuth } from 'utils/CustomHooks.js';

export default function Staffs() {
  const { auth } = useAuth()
  const [staffs, setStaffs] = useState([])
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const initialState = {
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/admins/');
      const transformedData = response.data.map(item => {
        const { _id, ...rest } = item; 
        return { id: _id, ...rest }; 
      });
      
      console.log(transformedData);
      setStaffs(transformedData); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const columns = [
    // { field: '_id', headerName: '_id', width: 70,headerAlign: 'center', align: 'center', flex: 1},
    { field: 'fullName', headerName: 'Full Name', width: 200, headerAlign: 'center', align: 'center', flex: 1},
    { field: 'userName', headerName: 'User Name', width: 200, headerAlign: 'center', align: 'center', flex: 1},
    { field: 'role', headerName: 'Role', width: 300, headerAlign: 'center',align: 'center' , flex: 1},
    // { field: 'price', headerName: 'Price', type: 'number', width: 120, headerAlign: 'center', align: 'center', flex: 1},
    {
      field: 'actions',
      headerAlign: 'center',
      headerName: 'Actions',
      
      width: 150,
      renderCell: (params) => (
          <Button sx={{mx: 'auto'}}><HorizontalTableMenuStaff fetchData={fetchData} params={params}/></Button>
      ),
      flex: 1
    },
  ];

  
  useEffect(() => {
    if(auth?.userRole === 'staff'){
      navigate('/admin/products')
      alert("You don't have the permission for this route")
    }
    fetchData();
  }, []);
  return (
    <Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '30px'}}>
          <Typography sx={{fontWeight: 'bold'}} variant="h5" >Staff Accounts</Typography>
          <Button variant='contained' sx={{backgroundColor: '#BD792C', '&:hover': {
            backgroundColor: '#BD792C'}}} onClick={handleClickOpen} >Create</Button>
        </Box>
        <DataGrid 
          rows={staffs} 
          columns={columns}
          disableRowSelectionOnClick={true}
          rowHeight={80}
        />
        <CreateStaffPopup fetchData={fetchData} open={open} handleClose={handleClose} initialState={initialState}/>
    </Box>
  );
}
