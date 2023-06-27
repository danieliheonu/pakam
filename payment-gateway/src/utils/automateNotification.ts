import axios from "axios";
import { sendMail } from "./email";
import { sendSMS } from "./sms";
// import { NotificationProps } from "../../types";

export interface NotificationProps {
	userId: string;
	amount: number;
	notificationType: string;
}

export const automateNotification = async ({
	userId,
	amount,
	notificationType,
}: NotificationProps) => {
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
				sendMail({
					from: "support@pakam.com",
					to: email,
					subject: "Insufficient funds",
					text: "You have insufficient funds in your wallet. You can fund your wallet by visiting our website and clicking on the fund wallet button or by clicking on this link: https://pakam.com/fund-wallet",
				});
			} else if (notificationType === "mobile") {
				// Send SMS
				sendSMS({
					to: phoneNumber,
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
