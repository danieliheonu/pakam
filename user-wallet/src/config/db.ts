import mongoose, { ConnectOptions } from "mongoose";

export default async () => {
	try {
		await mongoose.connect(
			process.env.MONGO_URI as string,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			} as ConnectOptions
		);
		console.log("Connected to database");
	} catch (err) {
		console.log(err);
	}
};
