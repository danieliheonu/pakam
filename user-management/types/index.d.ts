import { Types } from "mongoose";

interface IUser {
	email: string;
	phoneNumber: string;
}

interface UserDocument {
	_id: Types.ObjectId;
	email: string;
	phoneNumber: string;
	createdAt: string;
}
