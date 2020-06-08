import { Request, Response } from "express";
import Applicant from "../database/entity/Applicant";
import RequestApplicant from "../database/entity/RequestApplicant";
import Admission from "../database/entity/Admission";
import Specialty from "../database/entity/Specialty"

// TODO: Защитить методы контролллера от неавторизованных пользователей

/**
 * Получить страницу всех аббитуриентов
 *
 * @param req
 * @param res
 */
export const index = async (req: Request, res: Response) => {
	let id = (await Applicant.count()) + 1;
	let specialnosti = await Specialty.find()
	return res.status(200).render("add", { id, spec: specialnosti, usr: req.cookies.usr, opt: "add", url_: "/applicants" });
};

/**
 * Получить страницу аббитуриента
 *
 * @param req
 * @param res
 */
export const show = async (req: Request, res: Response) => {
	let id = req.params["applicantId"];
	let data = await Applicant.findOne(id);

	if (data) {
		return res
			.status(200)
			.render("add", { id, data, usr: req.cookies.usr, opt: "redact", url_: req.url + "/update" });
	} else {
		return res.status(404).send("Запись не найдена");
	}
};

/**
 * Получить страницу редактирования аббитуриента
 *
 * @param req
 * @param res
 */
export const edit = async (req: Request, res: Response) => {
	let id = req.params["applicantId"];
	let data = await Applicant.findOne(id);

	if (data) {
		return res.status(200).send(data);
	} else {
		return res.status(404).send("Запись не найдена");
	}
};

/**
 * Получить страницу создания аббитуриента
 *
 * @param req
 * @param res
 */
export const create = async (req: Request, res: Response) => {
	let data = new Applicant();

	return res.status(200).send(data);
};

/**
 * Сохранить аббитуриента в базе данных
 *
 * TODO: Сделать валидацию входящего запроса
 * TODO: Добавить Observer для параметров, которые динамично создаются/изменяются
 *
 * @param req
 * @param res
 */
export const store = async (req: Request, res: Response) => {
	let data = new Applicant();
	data.date_zayv = req.body.date_zayv;
	data.fio = req.body.fio;
	data.forma_poluch_obraz = req.body.forma_poluch_obraz;
	data.specialnost = req.body.specialnost;
	data.nomer_lichnoe_delo = req.body.nomer_lichnoe_delo;
	data.nomer_ekz_lista = req.body.nomer_ekz_lista;
	data.osnova_obych = req.body.osnova_obych;
	data.obshaga = req.body.obshaga;
	data.sex = req.body.sex;
	data.birthday = req.body.birthday;
	data.grazhdanstvo = req.body.grazhdanstvo;
	data.addres_mesto_zitelstva = req.body.addres_mesto_zitelstva;
	data.oblast = req.body.oblast;
	data.passport = req.body.passport;
	data.tel = req.body.tel;
	data.soc_category = req.body.soc_category;
	data.SPO_vpervie_nevpervie = req.body.SPO_vpervie_nevpervie;
	data.lvl_obraz = req.body.lvl_obraz;
	data.god_okonchania = req.body.god_okonchania;
	data.osobie_yspexi_v_echebe = req.body.osobie_yspexi_v_echebe;
	data.orig_doc_obraz = req.body.orig_doc_obraz;
	data.copy_doc_obraz = req.body.copy_doc_obraz;
	data.vstup_ispitanie_1 = req.body.vstup_ispitanie_1;
	data.avg_ball_obrazovanie_2 = req.body.avg_ball_obrazovanie_2;
	data.reshenie_komissi = req.body.reshenie_komissi;
	let request_Applicant = new RequestApplicant();
	request_Applicant.priority = req.body.prioritet;
	request_Applicant.id_aplicant = data;
	request_Applicant.name_spec = req.body.specialnost;
	let admission = new Admission();
	admission.id_applicant = data;
	admission.date = new Date(Date.now());
	admission.number = req.body.nomer_i_data_prikaza_o_zachislenie;
	Admission.save(admission)
	RequestApplicant.save(request_Applicant)
	let result = await data.save();

	if (result) {
		return res.status(200).redirect("/");
	} else {
		return res.status(500).json({ err: "Ошибка создания аббитуриента" }).redirect("/applicants");
	}
};

/**
 * Обновить аббитуриента в базе данных
 *
 * TODO: Сделать валидацию входящего запроса
 * TODO: Добавить Observer для параметров, которые динамично создаются/изменяются
 *
 * @param req
 * @param res
 */
export const update = async (req: Request, res: Response) => {
	let data = await Applicant.findOne(Number(req.params["applicantId"]));
	if (!data) return res.status(505).redirect("/");
	data.date_zayv = req.body.date_zayv;
	data.fio = req.body.fio;
	data.forma_poluch_obraz = req.body.forma_poluch_obraz;
	data.specialnost = req.body.specialnost;
	data.nomer_lichnoe_delo = req.body.nomer_lichnoe_delo;
	data.nomer_ekz_lista = req.body.nomer_ekz_lista;
	data.osnova_obych = req.body.osnova_obych;
	data.obshaga = req.body.obshaga;
	data.sex = req.body.sex;
	data.birthday = req.body.birthday;
	data.grazhdanstvo = req.body.grazhdanstvo;
	data.addres_mesto_zitelstva = req.body.addres_mesto_zitelstva;
	data.oblast = req.body.oblast;
	data.passport = req.body.passport;
	data.tel = req.body.tel;
	data.soc_category = req.body.soc_category;
	data.SPO_vpervie_nevpervie = req.body.SPO_vpervie_nevpervie;
	data.lvl_obraz = req.body.lvl_obraz;
	data.god_okonchania = req.body.god_okonchania;
	data.osobie_yspexi_v_echebe = req.body.osobie_yspexi_v_echebe;
	data.orig_doc_obraz = req.body.orig_doc_obraz;
	data.copy_doc_obraz = req.body.copy_doc_obraz;
	data.vstup_ispitanie_1 = req.body.vstup_ispitanie_1;
	data.avg_ball_obrazovanie_2 = req.body.avg_ball_obrazovanie_2;
	data.reshenie_komissi = req.body.reshenie_komissi;
	let result = await data.save();

	if (result) {
		return res.status(200).send(data);
	} else {
		return res.status(500).send("Ошибка обновления аббитуриента");
	}
};

/**
 * Удалить аббитуриента из базы данных
 *
 * @param req
 * @param res
 */
export const destroy = async (req: Request, res: Response) => {
	let id = req.params["applicantId"];
	let data = await Applicant.findOne(id);

	let result = await data?.remove();

	if (result) {
		return res.status(200).redirect("/");
	} else {
		return res.status(500).send("Ошибка удаления аббитуриента");
	}
};
