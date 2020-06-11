import { Request, Response } from "express";
import Applicant from "../database/entity/Applicant";

export const SearchGET = async (req: Request, res: Response): Promise<void> => {
	return res.status(200).render("search");
};

export const SearchPOST = async (req: Request, res: Response): Promise<void> => {
	let data = await Applicant.find({select: ["id"]})
	return res.status(200).render("view_search", { data })
};
