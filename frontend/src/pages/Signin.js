import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
  Avatar,
  Typography,
} from "@mui/material";

import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../redux/actions/userActions";
const Signin = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const paperStyle = {
    padding: "30px 20px",
    width: "80%",
    margin: "20px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "rgb(255 200 1)" };


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const navigate = useNavigate();
    useEffect(() => {
      if (userInfo) {
        navigate(`/${userInfo._id}/profile`);
      }
    }, [navigate, userInfo]);



  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div style={{ padding: 30 }}>
      <Paper variant="outlined" style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <HttpsOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign In</h2>
        </Grid>
        <Grid
          container
          spacing={1}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField label="Email" onChange={(e) => setEmail(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={"password"} onChange={(e) => setPassword(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={"Keep me logged in"}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" onClick={submitHandler}>
              {" "}
              Sign in{" "}
            </Button>
          </Grid>
          <Grid item xs={12}>
          <Typography>
            <Link to="/signup" style={{color:"rgb(255 200 1)"}}>Forgot password ?</Link>
          </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography>
            {" "}
            Do you have an account ?<Link to="/signup" style={{color:"rgb(255 200 1)"}}>Sign Up</Link>
          </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Signin;
