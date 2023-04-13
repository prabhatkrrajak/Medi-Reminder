import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import SetReminderScreen from './pages/SetReminderScreen';
import EmailVerify from './pages/EmailVerfy';
import Profile from './pages/Profile';
import Sticky from 'react-stickynode';
import UserWelcomePage from './pages/UserWelcomePage';
import ReminderVerify from './pages/ReminderVerify';

const App = () => {
  return (
    <Box width="400px" sx={{width: { xl : '1488px'}}} m = "auto">
      <Sticky enabled={true} top={0} bottomBoundary={0} innerZ={2}>
      <Navbar/>
      </Sticky>
      
      <Routes>
        <Route path="/:id/setreminder" element={<SetReminderScreen/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path=":id" element={<UserWelcomePage/>}/>
        <Route path=":id/profile" element={<Profile/>}/>
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        <Route path="/reminders/:id/verify" element={<ReminderVerify/>}/>
        <Route path="/" element={<Home/>} exact/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App