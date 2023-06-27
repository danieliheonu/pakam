import { Schema, model } from "mongoose";
import { IUser } from "../../types";

const userSchema = new Schema<IUser>(
	{
		email: {
			type: String,
			lowercase: true,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default model<IUser>("User", userSchema);
