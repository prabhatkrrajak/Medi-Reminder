import React from 'react'
import { Box } from '@mui/material'
import SigninBanner from '../components/SigninBanner'
import { useSelector } from 'react-redux';
import UserWelcomePage from './UserWelcomePage';

const Home = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin; 
  if(userInfo){
    return (
      <Box>
        <UserWelcomePage/>
      </Box>
    )
  }else{
    return(
      <Box>
        <SigninBanner/>
      </Box>
    )
  }
  
}

export default Home