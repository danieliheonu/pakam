import { Request, Response } from "express";
import User from "../model";

export const getUser = async (req: Request, res: Response) => {
	const user = await User.findById(req.params.id);

	return res.status(200).json({
		message: "user successfully retrieved",
		data: user,
	});
};
