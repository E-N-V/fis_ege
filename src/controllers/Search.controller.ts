import { Request, Response } from "express";
import Applicant from "../database/entity/Applicant";
import { Like, Between, In, Any, Not } from "typeorm";
import Region from "../database/entity/Region";
import { isArray } from "util";
import Specialty from "../database/entity/Specialty";
import { parse_excel } from "../util/parse_excel";
import { join } from "path";

const MemorySearch = new Map<string, Applicant[]>();

export const SearchGET = async (req: Request, res: Response): Promise<void> => {
	let oblasti = await Region.find();
	return res.status(200).render("search", { oblasti });
};

export const SearchPOST = async (req: Request, res: Response): Promise<any> => {
	let Date_ = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toString();
	Date_ = Date_.split("T")[0];
	let applicants = await Applicant.find({
		where: {
			/**
			 * Категория Личной  Информации
			 */
			date_zayv: Between(
				req.body.data_zayav_ot ? req.body.data_zayav_ot : Date_,
				req.body.data_zayav_do ? req.body.data_zayav_do : Date_
			),
			forma_poluch_obraz: req.body.forma_poluch_obraz
				? isArray(req.body.forma_poluch_obraz)
					? In(req.body.forma_poluch_obraz)
					: req.body.forma_poluch_obraz
				: In(["Очная", "Заочная"]),
			osnova_obych: req.body.osnova_obych
				? isArray(req.body.osnova_obych)
					? In(req.body.osnova_obych)
					: req.body.osnova_obych
				: In(["бюджет", "комерция"]),
			obshaga: req.body.obshaga
				? isArray(req.body.obshaga)
					? In(req.body.obshaga)
					: req.body.obshaga
				: In(["Да", "Нет"]),
			sex: req.body.sex ? (isArray(req.body.sex) ? In(req.body.sex) : req.body.sex) : In(["М", "Ж"]),
			birthday: Between(
				req.body.birthday_ot ? req.body.birthday_ot : Date_,
				req.body.birthday_do ? req.body.birthday_do : Date_
			),
			grazhdanstvo: req.body.grazhdanstvo
				? isArray(req.body.grazhdanstvo)
					? In(req.body.grazhdanstvo)
					: req.body.grazhdanstvo
				: In(["РФ", "ИГ"]),
			oblast: req.body.oblast ? req.body.oblast : Not(""),
			/* request: {
				name_spec_1: req.body.spec
				? isArray(req.body.spec)
					?
						In(req.body.spec)
					: req.body.spec
				: In(spec_arr)
			} */
			/**
			 * Категория Контактов
			 */
			passport: req.body.passport ? req.body.passport : Not(""),
			soc_category: req.body.soc_category
				? isArray(req.body.soc_category)
					? In(req.body.soc_category)
					: req.body.soc_category
				: Not(""),
			SPO_vpervie_nevpervie: req.body.SPO_vpervie_nevpervie
				? isArray(req.body.SPO_vpervie_nevpervie)
					? In(req.body.SPO_vpervie_nevpervie)
					: req.body.SPO_vpervie_nevpervie
				: Not(""),
			lvl_obraz: req.body.lvl_obraz
				? isArray(req.body.lvl_obraz)
					? In(req.body.lvl_obraz)
					: req.body.lvl_obraz
				: Not(""),
			god_okonchania: Between(
				req.body.god_okonchania_ot ? req.body.god_okonchania_ot : Date_,
				req.body.god_okonchania_do ? req.body.god_okonchania_do : Date_
			),
			osobie_yspexi_v_echebe: req.body.osobie_yspexi_v_echebe ? req.body.osobie_yspexi_v_echebe : Not(""),
			orig_doc_obraz: req.body.orig_doc_obraz
				? isArray(req.body.orig_doc_obraz)
					? In(req.body.orig_doc_obraz)
					: req.body.orig_doc_obraz
				: Not(""),
			/**
			 * Категория Результаты
			 */
			vstup_ispitanie_1: Between(
				req.body.vstup_ispitanie_1_ot ? req.body.vstup_ispitanie_1_ot : "0",
				req.body.vstup_ispitanie_1_do ? req.body.vstup_ispitanie_1_do : "5"
			),
			avg_ball_obrazovanie_2: Between(
				req.body.avg_ball_obrazovanie_2_ot ? req.body.avg_ball_obrazovanie_2_ot : "0",
				req.body.avg_ball_obrazovanie_2_do ? req.body.avg_ball_obrazovanie_2_do : "5"
			),
			reshenie_komissi: req.body.reshenie_komissi ? req.body.reshenie_komissi : Not(""),
		},
		relations: ["admission", "request"],
	});
	//return res.json(applicants)
	MemorySearch.set(req.cookies.usr, applicants);
	return res.status(200).render("home", { applicants, export_: true });
};

export const SearchApplicantPOST = async (req: Request, res: Response): Promise<any> => {
	let applicants = await Applicant.find({
		where: { fio: Like(`%${req.body.applicant}%`) },
		relations: ["admission", "request"],
	});
	return res.render("home", { applicants, export_: true });
};

export const SearchExportGET = async (req: Request, res: Response): Promise<any> => {
	let nameFile = `Приемная коммисия ${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
	let isGeneratedFile = await parse_excel(nameFile, MemorySearch.get(req.cookies.usr));
	if (isGeneratedFile) {
		let file = join(__dirname, "..", "database", "excel", nameFile + ".xlsx");
		res.download(file);
	}
};
