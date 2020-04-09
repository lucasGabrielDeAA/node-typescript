import { Router } from "express";

// importing controllers.
import UserController from "./controllers/UserController";

// creating the routing.
const routes = Router();

// Declaring routes.
routes.get("/users", UserController.index);
routes.post("/users", UserController.sendEmail);

export default routes;
