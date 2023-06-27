import "dotenv/config";
import express, { Express } from "express";
import { automateNotification } from "./utils/automateNotification";

const app: Express = express();

const PORT = process.env.PORT || 5002;

automateNotification({
	userId: "649ab2b3ba0a7e028b8a3315",
	amount: 0,
	notificationType: "email" /* notificationType is either 'email' or 'mobile' */,
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
