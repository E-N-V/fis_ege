import { Router } from "express";
const route = Router();

import { SearchGET } from "../controllers/Search.controller";

route.get("/search", SearchGET);
route.post("/search")

export default route;
