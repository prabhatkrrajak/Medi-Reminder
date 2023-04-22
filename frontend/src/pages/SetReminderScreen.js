import { Button, Grid, Paper, TextField} from "@mui/material";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useParams } from "react-router-dom";

const SetReminderScreen = () => {
  const [reminderMsg, setReminderMsg] = useState("");
  const[qty, setQty] = useState("");
  const [remindAt, setRemindAt] = useState();
  const [ reminderList, setReminderList ] = useState([])
  const param = useParams();


  useEffect(() => {
    Axios.get(`http://localhost:5000/api/reminders/${param.id}/getAllReminder`).then( res => setReminderList(res.data))
    
}, [param])

const addReminder = () => {
  Axios.post(`http://localhost:5000/api/reminders/${param.id}/addReminder`, { reminderMsg, qty, remindAt })
  .then( res => setReminderList(res.data))
  setReminderMsg("")
  setRemindAt()
}


const deleteReminder = (id) => {
  Axios.post(`http://localhost:5000/api/reminders/${param.id}/deleteReminder`, { id })
  .then( res => setReminderList(res.data))
}

  const paperStyle = {
    padding: "30px 20px",
    width: "80%",
    margin: "20px auto",
  };

  function pill(qty){
    var a = "";
    while(qty>0){
      a += '💊';
      qty--; 
    }
    return a;
  }
  return (
    <Paper className="setReminderPaper" variant="outlined" style={paperStyle}>
      <div className="setReminder">
        <h1>Remind Me 🙋‍♂️</h1>
        <Grid
          container
          spacing={1}
          direction={"row"}
          justify={"center"}
          alignItems={"center"}
          marginBottom={"2rem"}
        >
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Medicine Name"
              value={reminderMsg}
              onChange={(e) => setReminderMsg(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={2}>
          <TextField
              type="number"
              fullWidth
              label="Quantity"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Enter Date Time"
                value={remindAt}
                onChange={setRemindAt}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth onClick={addReminder}>
              Add Reminder
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={1} direction={"column"}>
        {reminderList.map((reminder) => (
          <Grid item key={reminder._id}>
            <Grid
              sx={{ border: 1, borderColor: "grey.500" }}
              container
              spacing={1}
              direction={"row"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item xs={3}>
                <p>🏥{reminder.reminderMsg} - {pill(reminder.qty)}</p>
              </Grid>
              <Grid item xs={7}>
              <p>Remind Me at: ⏲️{String(new Date(reminder.remindAt.toLocaleString(undefined, {timezone:"Asia/Kolkata"})))}</p>
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" color="error" size="small" onClick={() => deleteReminder(reminder._id)}>
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}

        </Grid>
      </div>
    </Paper>
  );
};

export default SetReminderScreen;
