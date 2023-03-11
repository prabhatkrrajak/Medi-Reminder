import express from "express";
import mongoose from "mongoose";
import userRouter from './routers/userRouter.js';
import cors from "cors";

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/medicineReminderDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use('/api/users', userRouter);


app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
