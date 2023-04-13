import mongoose from "mongoose";

const Schema = mongoose.Schema;
const reminderSchema = new Schema({
    userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
        required: true,
	},
    reminderMsg : { type: String},
    qty: { type: Number},
    remindAt : { type: String},
    isRemindedBefore : { type: Boolean},
    isRemindedAfter : {type : Boolean}, 
    isConfirmed :{ type: Boolean}
});

const Reminder = mongoose.model("reminder", reminderSchema)
export default Reminder;