import { Router } from "express";
const route = Router();

import { SearchGET, SearchPOST, SearchApplicantPOST, SearchExportGET } from "../controllers/Search.controller";

route.get("/search", SearchGET);
route.get("/search/export", SearchExportGET);
route.post("/search", SearchPOST);
route.post("/search/applicant", SearchApplicantPOST);

export default route;
