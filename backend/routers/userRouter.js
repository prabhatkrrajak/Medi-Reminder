import bcrypt from "bcryptjs";
import crypto from "crypto";
import express from "express";
import expressAsyncHandler from "express-async-handler";
import Token from "../models/tokenModel.js";
import User from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";
import { sendEmail } from "../utils/sendEmail.js";

const userRouter = express.Router();


userRouter.post("/signin", expressAsyncHandler(async (req, res) => {
	try {

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		if (!user.verified) {
			let token = await Token.findOne({ userId: user._id });
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString("hex"),
				}).save();
				const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
				await sendEmail(user.email, "Verify Email", url);
			}

			return res
				.status(400)
				.send({ message: "An Email sent to your account please verify" });
		}

		res.status(200).send({
            _id: user._id,
            name: user.name,
            email: user.email,
            gender: user.gender,
            phoneNumber: user.phoneNumber,
            token: generateToken(user),
          });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}));

userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(401).send({ message: "User already registered" });
    }

    user = await new User({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      phoneNumber: req.body.phoneNumber,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = user.save();

    const token = await new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
    const url = `http://localhost:3000/users/${user.id}/verify/${token.token}`;
    await sendEmail(user.email, "Verify Email", url);
    return res
				.status(400)
				.send({ message: "An Email sent to your account please verify" });
  })
);

userRouter.get("/:id/verify/:token/", expressAsyncHandler(async (req, res) => {
  // try {
    const user = await User.findOne({ _id: req.params.id });
    console.log(user)
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    await User.updateOne({ _id: user.id}, {$set:{verified: true }});
    // await token.remove();

    res.status(200).send({ message: "Email verified successfully" });
  // } catch (error) {
  //   res.status(500).send({ message: "Internal Server Error" });
  // }
}));

export default userRouter;
