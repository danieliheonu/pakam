import express, { Express, Request, Response } from "express";
import cors from "cors";
import route from "./route";

const app: Express = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
	res.send("user wallet server is up and running 🚀");
});

app.use("/api/v1/wallets", route);

export default app;
