import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import cors from "cors";
import reminderRouter from "./routers/reminderRouter.js";
import Reminder from "./models/reminderModel.js";
import twilio from "twilio";
import User from "./models/userModel.js";

dotenv.config();

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/medicineReminderDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/api/users", userRouter);
app.use("/api/reminders", reminderRouter);

//Send SMS using twilio
setInterval(async () => {
  const reminderList = await Reminder.find({});
  if (reminderList) {
    Array.from(reminderList).forEach(async (reminder) => {
      if (!reminder.isReminded) {
        const user = await User.findOne({_id:reminder.userId})
        const now = new Date();
        if (new Date(reminder.remindAt) - now < 0) {
          await Reminder.findOneAndUpdate({_id :reminder._id},{$set:{isReminded: true }})
              const accountSid = process.env.ACCOUNT_SID 
              const authToken = process.env.AUTH_TOKEN
              const client = twilio(accountSid, authToken);
              client.messages
                .create({
                  body: reminder.reminderMsg,
                  messagingServiceSid:  process.env.MESSAGINGsERVICE_SID,
                  to: `+91${user.phoneNumber}`,
                })
                .then((message) => console.log(message.sid));
            }
      }
    });
  }
}, 1000);



app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
