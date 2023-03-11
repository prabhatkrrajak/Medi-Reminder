import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#ffc8011f">
    <Stack direction='row' gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="20px" justifyContent='center'>
      <img src={Logo} alt="logo" style={{ width: '50px', height:'50px'}} />
      <Typography variant="h5" sx={{ fontSize: { lg: '15px', xs: '10px' } }} mt="5px" textAlign="center" pb="5px">Made with ❤️ by Prabhat</Typography>
    </Stack>
  </Box>
);

export default Footer;