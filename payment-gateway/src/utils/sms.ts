import { SMSOptions } from "../../types";

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require("twilio")(accountSid, authToken);

export const sendSMS = async ({ to, body }: SMSOptions) => {
	try {
		await client.messages.create({ to, from: process.env.TWILIO_NUMBER, body });
		console.log("SMS sent successfully");
	} catch (error: any) {
		console.log(`Error: ${error.message}`);
	}
};
