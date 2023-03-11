import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
        auth: {
          user: "prabhat.photos1911@gmail.com",
          pass: "prwo itkr rnsk bylj",
        },
		});

		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};