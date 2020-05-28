import { Router } from "express"
const route = Router()

import { AuthGET } from "../controllers/Auth.controller"

route.get("auth", AuthGET)

export default route