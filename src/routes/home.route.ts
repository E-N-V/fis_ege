import {Router} from "express"
const route = Router()

import { HomeGET } from "../controllers/Home.controller"

route.get(["/", "/home", "/index", "/index.html", "/home.html"], HomeGET)

export default route