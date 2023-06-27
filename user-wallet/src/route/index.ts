import { userWallet } from "../controller";
import { Router } from "express";

const walletRoute = Router();

walletRoute.get("/:userId", userWallet);

export default walletRoute;
