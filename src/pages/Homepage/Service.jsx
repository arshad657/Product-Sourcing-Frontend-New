// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import { Container, Typography } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh', // Adjust the height according to your needs
//     backgroundImage: 'url("https://friendscargoservice.com/images/services/door-to-door-delivery-qatar.jpg?")', // Replace with your image path
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white', // Text color
//   },
// }));

// const Carousal = () => {
//   const classes = useStyles();

//   return (
//     <Container className={classes.root}>
//       <Typography variant="h2" align="center">
//         Your Title
//       </Typography>
//       <Typography variant="subtitle1" align="center">
//         Your subtitle or description
//       </Typography>
//       {/* Add more text components as needed */}
//     </Container>
//   );
// };

// export default Carousal;







import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@mui/material';
import { Img, Text } from 'components';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    title: 'Import',
    description: 'Suppose, I have a import export and door to door service related website. Now, give me a tag line that can be used at the first section of the website. My company name is ROHMAN TRADINGS. give me at least 5 options to choose',
    
    imgPath:
      'https://assets-global.website-files.com/617a2ab2ffe6cf153dbc87b0/654db567a01afbcbb29115d1_Starting%20an%20Import-Export%20Business%20in%20Singapore.jpg',
  },
  {
    title: 'Export',
    description: 'Suppose, I have a import export and door to door service related website. Now, give me a tag line that can be used at the first section of the website. My company name is ROHMAN TRADINGS. give me at least 5 options to choose',
    imgPath:
      'https://afs.net/wp-content/uploads/International-Shipping.jpeg',
  },
  {
    title: 'Door to Door Service',
    description: 'Suppose, I have a import export and door to door service related website. Now, give me a tag line that can be used at the first section of the website. My company name is ROHMAN TRADINGS. give me at least 5 options to choose',
    imgPath:
      'https://ksllogistics.com.pk/wp-content/uploads/2022/08/door-to-door-cargo.jpg',
  },
];

function Carousal() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid container sx={{}}>
                <Grid item xs={12} md={5} sx={{height: {xs: '300px'}}}>
                <Img
                  className="h-[301px] md:h-auto max-h-[301px] object-cover sm:w-[]"
                  src={step.imgPath}
                  alt={step.title}
                />
                </Grid>

                <Grid item xs={12} md={7} >
                    <Box sx={{ height: '100%',   color: 'white', textAlign: {md: 'left', xs: 'center'}, width: '100%'}}>
                      <h3 className='text-4xl font-bold mb-10 ml-4 sm:ml-0'>{images[activeStep].title}</h3>
                      <Text
                            className="px-4 text-gray-400 text-xl tracking-[-0.50px] w-full"
                            size="txtRubikRegular18Gray500"
                        >
                            {images[activeStep].description}
                        </Text>
                    </Box>
                </Grid>
              </Grid>
            

            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Carousal;