import mongoose from "mongoose";

const Schema = mongoose.Schema;
const reminderSchema = new Schema({
    userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
        required: true,
	},
    reminderMsg : { type: String},
    remindAt : { type: String},
    isReminded : { type: Boolean}
});

const Reminder = mongoose.model("reminder", reminderSchema)
export default Reminder;