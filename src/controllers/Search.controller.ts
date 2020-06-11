import { Request, Response } from "express";

export const SearchGET = async (req: Request, res: Response): Promise<void> => {
	return res.status(200).render("search");
};
