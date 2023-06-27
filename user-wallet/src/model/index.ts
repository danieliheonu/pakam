import { Schema, model } from "mongoose";
import { IWallet } from "../../types";

const userWalletSchema = new Schema<IWallet>(
	{
		userId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
			index: true,
		},
		amount: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export default model<IWallet>("Wallet", userWalletSchema);
