import {Router} from "express"
const route = Router()

import { HomeGET, HomeGETAdd, HomePOSTAdd } from "../controllers/Home.controller"

route.get(["/", "/home", "/index", "/index.html", "/home.html"], HomeGET)
route.get("/add", HomeGETAdd)
route.get("/auth", )
route.post("/add", HomePOSTAdd)

export default route