import { Router } from "express";
const route = Router();

import { AuthGET, AuthPOST } from "../controllers/Auth.controller";

route.get("/auth", AuthGET);
route.post("/auth", AuthPOST);

export default route;
