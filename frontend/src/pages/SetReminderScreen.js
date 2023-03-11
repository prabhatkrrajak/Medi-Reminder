import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const SetReminderScreen = () => {
  const [reminderMsg, setReminderMsg] = useState("");
  const [remindAt, setRemindAt] = useState();
  const [reminderList, setReminderList] = useState([]);

  const addReminder = () => {};

  const deleteReminder = (id) => {};

  const paperStyle = {
    padding: "30px 20px",
    width: "80%",
    margin: "20px auto",
  };
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
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Medicine Name"
              value={reminderMsg}
              onChange={(e) => setReminderMsg(e.target.value)}
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
          <Grid item>
            <Grid
              sx={{ border: 1, borderColor: "grey.500" }}
              container
              spacing={1}
              direction={"row"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item xs={3}>
                <p>Medicine Name</p>
              </Grid>
              <Grid item xs={3}>
                <p>Remind Me at:</p>
              </Grid>
              <Grid item xs={3}>
                <p>26/10/2023 @ 2AM</p>
              </Grid>
              <Grid item xs={3}>
                <Button variant="outlined" color="error" size="small">
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              sx={{ border: 1, borderColor: "grey.500" }}
              container
              spacing={1}
              direction={"row"}
              justify={"center"}
              alignItems={"center"}
            >
              <Grid item xs={3}>
                <p>Medicine Name</p>
              </Grid>
              <Grid item xs={3}>
                <p>Remind Me at:</p>
              </Grid>
              <Grid item xs={3}>
                <p>26/10/2023 @ 2AM</p>
              </Grid>
              <Grid item xs={3}>
                <Button variant="outlined"color="error" size="small">
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <div className="homepage_body">
          {reminderList.map((reminder) => (
            <div className="reminder_card" key={reminder._id}>
              <h2>{reminder.reminderMsg}</h2>
              <h3>Remind Me at:</h3>
              <p>
                {String(
                  new Date(
                    reminder.remindAt.toLocaleString(undefined, {
                      timezone: "Asia/Kolkata",
                    })
                  )
                )}
              </p>
              <div
                className="button"
                onClick={() => deleteReminder(reminder._id)}
              >
                Delete
              </div>
            </div>
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default SetReminderScreen;
