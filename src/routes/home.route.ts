import { Router } from "express"
const route = Router()

import { HomeGET, HomeGETAdd, HomePOSTAdd, HomeGETAuth } from "../controllers/Home.controller"

route.get(["/", "/home", "/index", "/index.html", "/home.html"], HomeGET)
route.get("/add", HomeGETAdd)
route.get("/auth", HomeGETAuth)
route.post("/add", HomePOSTAdd)

export default route