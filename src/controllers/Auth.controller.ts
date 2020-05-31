import {Request, Response} from "express"

export const AuthGET = async (req: Request, res: Response): Promise<void> =>{
    return res.status(200).render("auth")
}