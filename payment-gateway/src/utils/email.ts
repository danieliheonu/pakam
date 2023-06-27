import nodemailer from "nodemailer";

export interface EmailProps {
	from: string;
	to: string;
	subject: string;
	text: string;
}

const transport = nodemailer.createTransport({
	host: "sandbox.smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
});

export const sendMail = async ({ to, from, subject, text }: EmailProps) => {
	try {
		await transport.sendMail({ to, from, subject, text });
		console.log("Email sent successfully");
	} catch (error: any) {
		console.log(`Error: ${error.message}`);
	}
};
