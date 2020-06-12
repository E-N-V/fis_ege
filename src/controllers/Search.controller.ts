import { Request, Response } from "express";
import Applicant from "../database/entity/Applicant";
import { Like } from "typeorm";
import Region from "../database/entity/Region";

export const SearchGET = async (req: Request, res: Response): Promise<void> => {
	let oblasti = await Region.find()
	return res.status(200).render("search", {oblasti});
};

export const SearchPOST = async (req: Request, res: Response): Promise<any> => {
	//let data = await Applicant.find({ select: ["id"] });
	//return res.status(200).render("view_search", { data });
	return res.json(req.body)
};

export const SearchApplicantPOST = async (req: Request, res: Response): Promise<any> => {
	let applicants = await Applicant.find({ where: { fio: Like(`%${req.body.applicant}%`) }, relations: ["admission", "request"]});
	return res.render("home", {applicants});
};
