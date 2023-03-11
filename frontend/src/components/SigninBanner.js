import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg';

const SigninBanner = () => {
  return (
    <Box sx={{ mt: { lg: '1rem', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="rgb(255 200 1)" fontWeight="600" fontSize="26px">Medicine Reminder</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Stay Healthy,<br />
      Stay on Schedule.
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Stay on track with your medication
    </Typography>
    <Stack direction='row'
    justifyContent='space-around'
    sx={{gap:{sm:'50px',xs:'20px'},mt:{sm:'32px',xs:'20px',justifyContent:'none'}}} px='20px'>
      <Link to='/signin' style={{ marginTop: '3rem', textDecoration: 'none', width: '10rem', textAlign: 'center', background: 'rgb(255 200 1)', padding: '1rem', fontSize: '1.4rem', textTransform: 'none', color: 'white', borderRadius: '0.3rem' }}>Signin</Link>
      <Link to='/signup' style={{ marginTop: '3rem', textDecoration: 'none', width: '10rem', textAlign: 'center', background: 'rgb(255 200 1)', padding: '1rem', fontSize: '1.4rem', textTransform: 'none', color: 'white', borderRadius: '0.3rem' }}>Signup</Link>
    </Stack>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>

  )
}

export default SigninBanner