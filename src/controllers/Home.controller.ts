import { Request, Response } from "express";
import Applicant from "../database/entity/Applicant";

export const HomeGET = async (req: Request, res: Response) => {
	let applicants = await Applicant.find({ take: 10, relations: ["admission", "request"] });
	return res.status(200).render("home", { applicants, usr: req.cookies.usr });
};