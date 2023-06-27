export interface EmailOptions {
	to: string;
	from: string;
	subject: string;
	text: string;
}

export interface SMSOptions {
	to: string;
	body: string;
}

export interface NotificationOptions {
	userId: string;
	amount: number;
	notificationType: string;
}
