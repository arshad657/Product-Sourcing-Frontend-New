// // import React from 'react';
// // import { makeStyles } from '@mui/styles';
// // import { Container, Typography } from '@mui/material';

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     height: '100vh', // Adjust the height according to your needs
// //     backgroundImage: 'url("https://friendscargoservice.com/images/services/door-to-door-delivery-qatar.jpg?")', // Replace with your image path
// //     backgroundSize: 'cover',
// //     backgroundPosition: 'center',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     color: 'white', // Text color
// //   },
// // }));

// // const Service = () => {
// //   const classes = useStyles();

// //   return (
// //     <Container className={classes.root}>
// //       <Typography variant="h2" align="center">
// //         Your Title
// //       </Typography>
// //       <Typography variant="subtitle1" align="center">
// //         Your subtitle or description
// //       </Typography>
// //       {/* Add more text components as needed */}
// //     </Container>
// //   );
// // };

// // export default Service;







// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import { Grid } from '@mui/material';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     title: 'Import',
//     description: 'Suppose, I have a import export and door to door service related website. Now, give me a tag line that can be used at the first section of the website. My company name is ROHMAN TRADINGS. give me at least 5 options to choose',
    
//     imgPath:
//       'https://assets-global.website-files.com/617a2ab2ffe6cf153dbc87b0/654db567a01afbcbb29115d1_Starting%20an%20Import-Export%20Business%20in%20Singapore.jpg',
//   },
//   {
//     title: 'Export',
//     description: 'Suppose, I have a import export and door to door service related website. Now, give me a tag line that can be used at the first section of the website. My company name is ROHMAN TRADINGS. give me at least 5 options to choose',
//     imgPath:
//       'https://afs.net/wp-content/uploads/International-Shipping.jpeg',
//   },
//   {
//     title: 'Door to Door Service',
//     description: 'Suppose, I have a import export and door to door service related website. Now, give me a tag line that can be used at the first section of the website. My company name is ROHMAN TRADINGS. give me at least 5 options to choose',
//     imgPath:
//       'https://ksllogistics.com.pk/wp-content/uploads/2022/08/door-to-door-cargo.jpg',
//   },
// ];

// function Service() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box >
//       <h3 className='text-4xl mt-36 mb-20 font-bold'>OUR SERVICES</h3>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.title}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Grid container >
//                 <Grid item md={6} >
//                 <Box
//                   component="img"
//                   sx={{
//                     ml: 'auto',
//                     width: {sx: '100%', md:'70%'},
//                   }}
//                   src={step.imgPath}
//                   alt={step.title}
//                 />
//                 </Grid>

//                 <Grid item md={6}>
//                     <Box sx={{textAlign: 'left', ml: {md: 5}, width: '70%', mt: {xs: 5, md: 0}}}>
//                       <h3 className='text-4xl font-bold'>{images[activeStep].title}</h3>
//                       <h3 className='text-2xl  mt-5'>{images[activeStep].description}</h3>
//                     </Box>
//                 </Grid>
//               </Grid>
            

//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//     </Box>
//   );
// }

// export default Service;