import { Router } from "express";
import { getUser } from "../controller";

const userRoute = Router();

userRoute.get("/:id", getUser);

export default userRoute;
