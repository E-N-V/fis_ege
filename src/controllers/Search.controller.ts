import { Request, Response } from "express";
import Applicant from "../database/entity/Applicant";
import { Like, Between, In, Not } from "typeorm";
import Region from "../database/entity/Region";

export const SearchGET = async (req: Request, res: Response): Promise<void> => {
	let oblasti = await Region.find();
	return res.status(200).render("search", { oblasti });
};

export const SearchPOST = async (req: Request, res: Response): Promise<any> => {
	let applicants = await Applicant.find({
		where: {
			date_zayv: Between(
				req.body.data_zayav_ot ? req.body.data_zayav_ot : "NOW()",
				req.body.data_zayav_do ? req.body.data_zayav_do : "NOW()"
			),/*
			forma_poluch_obraz: Between(
				req.body.forma_poluch_obraz[0] ? req.body.forma_poluch_obraz[0] : "",
				req.body.forma_poluch_obraz[1] ? req.body.forma_poluch_obraz[1] : "",
			),
			osnova_obych: In([
				req.body.osnova_obych[0] ? req.body.osnova_obych[0] : "",
				req.body.osnova_obych[1] ? req.body.osnova_obych[1] : "",
			]),
			obshaga: In([
				req.body.obshaga[0] ? req.body.obshaga[0] : "",
				req.body.obshaga[1] ? req.body.obshaga[1] : "",
			]),
			sex: In([req.body.sex[0] ? req.body.sex[0] : "", req.body.sex[1] ? req.body.sex[1] : ""]),
			birthday: Between(
				req.body.birthday_ot ? req.body.birthday_ot : "",
				req.body.birthday_do ? req.body.birthday_do : ""
			),
			grazhdanstvo: In([
				req.body.grazhdanstvo[0] ? req.body.grazhdanstvo[0] : "",
				req.body.grazhdanstvo[1] ? req.body.grazhdanstvo[1] : "",
			]),
			oblast: req.body.oblast? req.body.oblast : "" */
		},
		relations: ["admission", "request"],
	});
	//return res.status(200).render("view_search", { data });
	return res.json(applicants);
};

export const SearchApplicantPOST = async (req: Request, res: Response): Promise<any> => {
	let applicants = await Applicant.find({
		where: { fio: Like(`%${req.body.applicant}%`) },
		relations: ["admission", "request"],
	});
	return res.render("home", { applicants });
};
