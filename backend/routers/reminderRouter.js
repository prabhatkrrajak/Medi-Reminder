import express from "express";
import Reminder from "../models/reminderModel.js";
import expressAsyncHandler from 'express-async-handler';
import User from "../models/userModel.js";

const reminderRouter = express.Router();

// reminderRouter.post(
//     '/',
//     isAuth,
//     expressAsyncHandler(async (req, res) => {
//       if (req.body.orderItems.length === 0) {
//         res.status(400).send({ message: 'No Reminder Set' });
//       } else {
//         const reminder = new Reminder({
//           user: req.user._id,
//           reminderMsg : req.body.reminderMsg,
//           remindAt : req.body.remindAt,
//           isReminded : false,
//         });
//         const createdReminder = await order.save();
//         res
//           .status(201)
//           .send({ message: 'New Reminder Created', reminder: createdReminder });
//       }
//     })
//   );


  reminderRouter.get(
    '/:id/getAllReminder',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send({ message: "Invalid link" });
        const reminderList = await Reminder.find({userId : user._id});
        if(reminderList){
            res.send(reminderList)
        }
        else {
            return res.status(400).send({ message: "Invalid link Dada" });
        }
    })
  );

  reminderRouter.post("/:id/addReminder", expressAsyncHandler(async (req, res) => {

    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });
    const {reminderMsg, qty, remindAt } = req.body
    const reminder = new Reminder({
        userId : user._id,
        reminderMsg,
        qty,
        remindAt,
        isReminded: false
    })
    await reminder.save();
        const reminderList = await Reminder.find({userId : user._id});
            if(reminderList){
                res.send(reminderList)
            }
            else {
                return res.status(400).send({ message: "Invalid link Dada" });
            }
    })
  )


  reminderRouter.post("/:id/deleteReminder", expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });
    await Reminder.deleteOne({_id: req.body.id}); 
        const reminderList = await Reminder.find({userId : user._id});
        if(reminderList){
            res.send(reminderList)
        }
        else {
            return res.status(400).send({ message: "Invalid link Dada" });
        }

    }))

    reminderRouter.get("/:id/verify", expressAsyncHandler(async (req, res) => {
        // try {
          const reminder = await Reminder.findOne({ _id: req.params.id });
          console.log(reminder)
          if (!reminder) return res.status(400).send({ message: "Invalid link" });
      
          await Reminder.updateOne({ _id: reminder.id}, {$set:{isConfirmed: true }});
          // await token.remove();
      
          res.status(200).send({ message: "Medicine Taken Successfully" });
        // } catch (error) {
        //   res.status(500).send({ message: "Internal Server Error" });
        // }
      }));


export default reminderRouter;