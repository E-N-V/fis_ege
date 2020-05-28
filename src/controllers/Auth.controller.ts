import {Request, Response} from "express"

export const AuthGET = async (req: Request, res: Response): Promise<Response> =>{
    return res.status(200).send("<p>Hello world</p>")
}