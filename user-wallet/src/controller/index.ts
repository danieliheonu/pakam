import { Response, Request, NextFunction } from "express";
import Wallet from "../model";

export const userWallet = async (req: Request, res: Response, next: NextFunction) => {
	const wallet = await Wallet.findOne({ userId: req.params.userId });

	return res.status(200).json({
		message: "wallet successfully retrieved",
		data: wallet,
	});
};
