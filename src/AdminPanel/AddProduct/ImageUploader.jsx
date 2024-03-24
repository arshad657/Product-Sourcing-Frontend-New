import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import ImageIcon from '../../../Images/image-gallery.png'
import { Box, Card,IconButton, CardContent, TextField, Typography, Button } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from 'axios';


const ImageUploader = ({uploadedFiles, setUploadedFiles, data, setData}) => {

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        const formattedFile = await convertToBase64(acceptedFiles[0]);
        setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
        setData((prevData) => ({
          ...prevData,
          images: [...(prevData.images || []), formattedFile],
        }));
      } catch (error) {
        console.error('Error converting to base64:', error);
      }
    },
  });
  

  const handleRemoveFile = (fileName) => {
    const updatedFiles = uploadedFiles?.filter((file) => file.name !== fileName);
    setUploadedFiles(updatedFiles);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
  
      fileReader.onload = () => {
        resolve({
          // name: file.name,
          dataURL: fileReader.result, // Use the Data URL directly
        });
      };
  
      fileReader.onerror = (error) => reject(error);
      fileReader.readAsDataURL(file);
    });
  };

  
  console.log(uploadedFiles)

  return (
    <Box sx={{px: {lg: 5, md: 2, sm: 2} }}>
      <Typography textAlign='left' sx={{fontWeight: 600, color: '#6b6e73', mb: 3}}>Add Images</Typography>
    {
      !uploadedFiles?.length > 0 &&
      <Box {...getRootProps()} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 250, backgroundColor: '#f5f6fa', border: '3px dashed #6589D1 ', cursor: 'pointer', borderRadius: '10px'}}>
        <input {...getInputProps()}/>
        <Box sx={{mt: 2,display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
        <UploadIcon />
        <Typography >Drop files here or Browse.</Typography>
        </Box>
      </Box>
    }
      <Box mt={2}>
        {uploadedFiles.map((file) => {
        return (
          <Box
            key={file.name}
            border={1}
            borderColor="#C2C2C2"
            p={2}
            borderRadius={4}
            mt={1}
            sx={{ display: 'flex', alignItems: 'center', mx: 'auto', justifyContent: 'space-between'}}
          >
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <img src={URL.createObjectURL(file)} width={50} height={50} />
              <Box sx={{textAlign: 'left', ml: 2}}>
              <Typography variant="body1" color="textPrimary">
                {file.name}
              </Typography>
              <Typography variant="body1" color="textPrimary" fontSize='14px'>
                {Math.round(file.size / 1024)} KB
              </Typography>
              </Box>
            </Box>
            <IconButton onClick={() => handleRemoveFile(file.name)}><DeleteOutlineOutlinedIcon /></IconButton>
          </Box>
)})}
      </Box>
    </Box>
  );
};
export default ImageUploader;