import { Router } from "express";
const route = Router();

import { index, show, edit, create, store, update, destroy } from "../controllers/Applicant.controller";

route.get("/applicants", index);
route.post("/applicants", store);
//route.get("/applicants/create", create);
route.get("/applicants/:applicantId", show);
route.post("/applicants/:applicantId/update", update);
route.get("/applicants/:applicantId/destroy", destroy);
route.get("/applicants/:applicantId/edit", edit);

export default route;
