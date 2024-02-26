import React, { useState } from 'react'
import CategoryInput from './CategoryInput'
import AddCategory from './AddCategory'
import { Box } from '@mui/material'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { fetchProductCategories } from 'utils/CommonApis'

function Category({ data, setData }) {
  const [category, setCategory] = useState([])

    const fetchCategories = async() => {
      const response = await fetchProductCategories()
      setCategory(response)
    }
  useEffect(() => {
    fetchCategories()
  }, [])
  
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
        <CategoryInput options={category} data={data} setData={setData}/>
        <AddCategory setCategory={setCategory}/>
    </Box>
  )
}

export default Category