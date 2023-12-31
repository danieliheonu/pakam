import axios from "axios";
import { sendEmail } from "./email";
import { sendSMS } from "./sms";
import { NotificationOptions } from "../../types";

export const automateNotification = async ({
	userId,
	amount,
	notificationType,
}: NotificationOptions) => {
	try {
		const userOptions = {
			method: "GET",
			url: `${process.env.USER_API_URL}/api/v1/users/${userId}`,
		};

		const walletOptions = {
			method: "GET",
			url: `${process.env.WALLET_API_URL}/api/v1/wallets/${userId}`,
		};

		const userRes = await axios(userOptions);
		const walletRes = await axios(walletOptions);

		const { email, phoneNumber } = userRes.data.data;
		const { amount: walletAmount } = walletRes.data.data;

		if (amount <= walletAmount) {
			// Deduct amount from wallet
			console.log("Amount deducted from wallet");
		} else {
			// Send notification
			if (notificationType === "email") {
				sendEmail({
					from: "support@pakam.com",
					to: email,
					subject: "Insufficient funds",
					text: "You have insufficient funds in your wallet. You can fund your wallet by visiting our website and clicking on the fund wallet button or by clicking on this link: https://pakam.com/fund-wallet",
				});
			} else if (notificationType === "mobile") {
				// Send SMS
				sendSMS({
					to: phoneNumber /* number format is +234 */,
					body: "You have insufficient funds in your wallet. You can fund your wallet by visiting our website and clicking on the fund wallet button or by clicking on this link: https://pakam.com/fund-wallet",
				});
			} else {
				throw new Error(
					"Invalid notification type. Please specify either email or mobile"
				);
			}
		}
	} catch (err: any) {
		console.log(`Error: ${err.message}`);
	}
};
