import nodemailer from "nodemailer";
import { EmailOptions } from "../../types";

const transport = nodemailer.createTransport({
	host: "sandbox.smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
});

export const sendEmail = async ({ to, from, subject, text }: EmailOptions) => {
	try {
		await transport.sendMail({ to, from, subject, text });
		console.log("Email sent successfully");
	} catch (error: any) {
		console.log(`Error: ${error.message}`);
	}
};
