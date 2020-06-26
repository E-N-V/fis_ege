import { Request, Response } from "express";
import Applicant from "../database/entity/Applicant";

export const HomeGET = async (req: Request, res: Response) => {
	let applicants = await Applicant.find({ order: { id: "DESC" }, take: 10, relations: ["admission", "request"] });
	applicants.sort((a, b) => {
		return a.id - b.id;
	});
	return res.status(200).render("home", { applicants, usr: req.cookies.usr, export_: false });
};
