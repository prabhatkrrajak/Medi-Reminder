import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";
import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../redux/actions/userActions";
const Signup = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: "80%",
    margin: "20px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "rgb(255 200 1)" };
  const marginTop = { marginTop: 5 };


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender,setGender] = useState('male');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const [msg, setMsg] = useState("");

  const userSignup = useSelector((state) => state.userSignup);
  const { userInfo, loading, error } = userSignup;
  console.log(userInfo);

  const handleGender = (e)=>{
    setGender(e.target.value)
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(signup(name, email, gender, phoneNumber, password));
    }
  };

  const navigate = useNavigate();
    useEffect(() => {
      if (userInfo) {
        navigate(`/${userInfo._id}/profile`);
      }
    }, [navigate, userInfo]);

  return (
    <div style={{ padding: 30 }}>
      <Paper elevation={0} variant="outlined" style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Grid
          container
          spacing={1}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={"auto"}>
            <TextField fullWidth label="Name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" style={marginTop}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                style={{ display: "initial" }}
                value={gender}
                onChange={handleGender}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              type={"password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="I accept the terms and conditions."
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" onClick={submitHandler}>
              Sign up
            </Button>
          </Grid>
          <Grid item xs={12}>
          <Typography>
            {" "}
            Already have an account ?<Link to="/signin" style={{color:"rgb(255 200 1)"}}>LogIn</Link>
          </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Signup;
