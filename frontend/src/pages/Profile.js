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
    <div style={{ padding: 30 }}>
      <Paper elevation={0} variant="outlined" style={paperStyle}>
      <Grid
          container
          spacing={1}
          direction={"row"}
          justify={"center"}
          alignItems={"center"}
        >
      <Grid item xs = {4}>
            <img style = {{border:"2px solid"}}src= {`https://robohash.org/${userInfo.name}.png`} alt="profile-image"/>
            </Grid>
      <Grid item xs={4}>     
      <Grid
          container
          spacing={0}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
            <Grid item>
                <Typography variant = "h5">Name : {userInfo.name}</Typography>
            </Grid>
            <Grid item>
            <Typography variant = "h5">Email : {userInfo.email}</Typography>
            </Grid>
            <Grid item>
            <Typography variant = "h5">Gender : {userInfo.gender}</Typography>
            </Grid>
            <Grid item>
            <Typography variant = "h5">Phone Number : {userInfo.phoneNumber}</Typography>
            </Grid>
        </Grid>
        </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Profile;
