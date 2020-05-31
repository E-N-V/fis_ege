import { Router } from "express";
const route = Router();

import { SerachGET } from "../controllers/Search.controller";

route.get("/search", SerachGET);

export default route;
