import {Request, Response} from "express"

export const HomeGET = async (req: Request, res: Response) => {
    return res.status(200).render("home")
}

export const HomeGETAdd = async (req: Request, res: Response) => {
    return res.status(200).render("add")
}