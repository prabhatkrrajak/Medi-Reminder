import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CarouselComp from '../components/CarouselComp'

const paperStyle = {
    padding: "30px 20px",
    width: "80%",
    margin: "20px auto",
  };

const UserWelcomePage = () => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
    const navigate = useNavigate();
    const setReminder=()=>{
        navigate(`/${userInfo._id}/setReminder`)
    };

  
  return (
    <div style={{ padding: 5 }}>
      <Paper variant="outlined" style={paperStyle}>
        <Typography variant="h2" style={{display:"flex", justifyContent:"center"}}>Welcome😃 {userInfo.name}</Typography>
        <Typography variant="h5" style={{display:"flex", justifyContent:"center"}}>Set ⏲️reminders and stay on track with your 💊medication</Typography>
        <CarouselComp/>
        <div style={{textAlign: "center", paddingTop:"2rem"}}>
        <Button variant="contained" onClick={setReminder}>Set Reminder</Button>
        </div>
      </Paper>
    </div>

  )
}

export default UserWelcomePage