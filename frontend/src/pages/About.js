import {Grid, Paper, Typography } from '@mui/material';
import CreatorImage from '../assets/images/prabhat.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: "80%",
    margin: "20px auto",
  };
  return (
    <div style={{ padding: 5 }}>
      <Paper elevation={0} variant="outlined" style={paperStyle}>
      <Typography variant="h3" style={{display:"flex", justifyContent:"center"}}>About Us</Typography>
      <Typography variant="body1" style={{marginTop:"1rem"}}>MEDI-Reminder is designed to help you manage your medications and ensure that you never miss a dose again. I understand that keeping track of your medications can be challenging, especially if you have multiple prescriptions or complex dosing schedules. That's why I created this app to make it easy for you to stay on top of your medication regimen.</Typography>
      <Typography variant="body1" style={{marginTop:"1rem"}}>Certainly! MEDI-Reminder Web App is designed to provide you with a comprehensive solution for managing your medications. Here are some of the key features and benefits of this app:</Typography>
      <Typography variant="body1" style={{marginLeft:"2rem"}}>✅ Customizable medication schedules: You can enter all of your medications into our web app and set up personalized schedules with specific dosing instructions.</Typography>
      <Typography variant="body1" style={{marginLeft:"2rem"}}>✅ Reminder notifications: MEDI-Reminder will send you reminders using SMS to your mobile number when it's time to take your medications, so you never forget.</Typography>
      <Typography variant="body1" style={{marginLeft:"2rem"}}>✅ Reminder verification: MEDI-Reminder will send you link for verification whether you have taken your medication or not, and let your guardian know if you have not taken the medicine on time.</Typography>
      <Typography variant="body1" style={{marginLeft:"2rem"}}>✅ User-friendly interface: Our app is designed to be easy to use, even for those who are not tech-savvy. You can access your medication schedule and other features with just a few clicks.</Typography>
      <Typography variant="body1" style={{marginLeft:"2rem"}}>✅ Secure and private: We take your privacy and security seriously. All of your personal and medical information is safely stored in our app, and we never share your data with third parties.</Typography>  
      <Typography variant="body1" style={{marginTop:"1rem"}}>In summary, our Medicine Reminder Web App is a powerful tool that can help you manage your medications more effectively. With customizable schedules, reminder notification, and reminder verification, our app can help you stay on top of your medications and achieve better health outcomes.</Typography>
      <hr></hr>
      <Typography variant="h4">About The Creator</Typography>
      <Grid
          container
          spacing={1}
          direction={"row"}
          alignItems={"center"}
          justify={"center"}
          marginTop={"1rem"}
        >
      <Grid item xs = {4}>
            <img style = {{borderRadius: "300px",width:"300px",height:"300px"}}src= {CreatorImage} alt="creator"/>
      </Grid>
      <Grid item xs = {8}>
        <Typography variant="h5">Prabhat Kumar Rajak</Typography>
        <Typography variant="body1">📖Student at IIITG - B.Tech(CSE)</Typography>
        <Typography variant="body1">🟢I have created this web-app under the supervision of Dr. Angshuman Jana</Typography>
        <Link to="https://www.linkedin.com/in/prabhat-kumar-rajak-a64261202/">
          <LinkedInIcon/>
        </Link>
        <Link to="https://github.com/prabhatkrrajak">
          <GitHubIcon/>
        </Link>
      </Grid>
      </Grid>
      </Paper>
    </div>
  )
}

export default About