import { Types } from "mongoose";

interface IWallet {
	userId: Types.ObjectId;
	amount: number;
}

interface WalletDocument {
	_id: Types.ObjectId;
	userId: Types.ObjectId;
	amount: number;
}
