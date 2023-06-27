import { Types } from "mongoose";

export interface IWallet {
	userId: Types.ObjectId;
	amount: number;
}
