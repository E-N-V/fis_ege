import {Router} from "express"
const route = Router()

import { HomeGET, HomeGETAdd } from "../controllers/Home.controller"

route.get(["/", "/home", "/index", "/index.html", "/home.html"], HomeGET)
route.get("/add", HomeGETAdd)

export default route