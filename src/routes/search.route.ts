import { Router } from "express";
const route = Router();

import { SearchGET, SearchPOST, SearchApplicantPOST } from "../controllers/Search.controller";

route.get("/search", SearchGET);
route.post("/search", SearchPOST)
route.post("/search/applicant", SearchApplicantPOST)

export default route;
