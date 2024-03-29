import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    phoneNumber: { type: String,required: true},
    guardianPhoneNumber: { type: String,required: true},
    password: { type: String, required: true },
    verified: { type: Boolean, default: false},
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;