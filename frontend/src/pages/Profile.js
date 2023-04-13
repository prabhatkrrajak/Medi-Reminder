import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: "80%",
    margin: "20px auto",
  };

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  return (
    <div style={{ padding: 5 }}>
      <Paper elevation={0} variant="outlined" style={paperStyle}>
      <Grid
          container
          spacing={1}
          direction={"row"}
          justify={"center"}
          alignItems={"center"}
        >
      <Grid item xs = {4}>
            <img style = {{border:"2px solid"}}src= {`https://robohash.org/${userInfo.name}.png`} alt="profile"/>
            </Grid>
      <Grid item xs={8} >     
            <Grid container justify="space-between">
                <Grid item xs={4.5}><Typography inline variant = "h5" align="left">Name : </Typography></Grid>
                <Grid item xs={3.5}><Typography color="primary" inline variant = "h5">{userInfo.name}</Typography></Grid>
            </Grid>
            <Grid container justify="space-between">
            <Grid item xs={4.5}><Typography variant = "h5">Email : </Typography></Grid>
            <Grid item xs={3.5}><Typography color="primary" inline variant = "h5">{userInfo.email}</Typography></Grid>
            </Grid>
            <Grid container justify="space-between">
            <Grid item xs={4.5}><Typography variant = "h5">Gender : </Typography></Grid>
            <Grid item xs={3.5}><Typography color="primary" inline variant = "h5" >{userInfo.gender}</Typography></Grid>
            </Grid>
            <Grid container justify="space-between">
            <Grid item xs={4.5}><Typography variant = "h5">Phone Number : </Typography></Grid>
            <Grid item xs={3.5}><Typography color="primary" inline variant = "h5">{userInfo.phoneNumber}</Typography></Grid>
            </Grid>
            <Grid container justify="space-between">
            <Grid item xs={4.5}><Typography variant = "h5">Guardian Ph-Number : </Typography></Grid>
            <Grid item xs={3.5}><Typography color="primary" inline variant = "h5">{userInfo.guardianPhoneNumber}</Typography></Grid>
            </Grid>
        </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Profile;
