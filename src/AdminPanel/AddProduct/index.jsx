import { Box, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProductForm from './ProductForm'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner'
import { BiSolidError } from "react-icons/bi";
import { toast } from 'react-toastify';


function AddProduct() {
  const navigate = useNavigate();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [data, setData] = useState({
    title: "",
    subTitle: "",
    description: "",
    brand: "",
    modelName: "",
    color: "",
    category: undefined,
    prices: [],
    images: []
  });



  const handleUpload = async () => {
    try {
      setLoading(true)
      const response = await axios.post('https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/products/upload', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success("Successfully uploaded")
      setData({
        title: "",
        subTitle: "",
        description: "",
        brand: "",
        modelName: "",
        color: "",
        category: "",
        prices: [],
        images: []
      })
      navigate('/admin/products')
    } catch (error) {
      setError(error.response.data.message)
    }finally {
      setLoading(false); 
    }
  };
  console.log(data)
  return (
    <Box>
      {loading ?
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',height: '80vh'}}>
        <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
      </Box>
      :
      <Box sx={{width: '90%', mx: 'auto'}}>
        <Box sx={{mt: 12,mb: 3, display: 'flex', justifyContent: 'space-between'}}>
        <Typography   sx={{textAlign: 'left',  color: '#6b6e73', fontWeight: 600}} variant='h6' >Add Product</Typography>
            <button onClick={handleUpload} className='bg-yellow-600 py-3 w-28 text-gray-200 font-semibold rounded-lg shadow-md'>Publish</button>
        </Box>
        {error && 
        <Box sx={{display: 'flex'}}>
          <BiSolidError style={{color: 'red', fontSize: 20}}/>
          <Typography className='text-red-500 text-left' fontWeight={500} >{error}</Typography>
          </Box>
        }
        <ProductForm error={error} setUploadedFiles={setUploadedFiles} uploadedFiles={uploadedFiles} data={data} setData={setData}/>
        
      </Box>
      }
    </Box>
  )
}

export default AddProduct