import {Request, Response} from "express"
import Abbiturient from "../database/entity/Abbiturient"

export const HomeGET = async (req: Request, res: Response) => {
    let data = await Abbiturient.find()
    return res.status(200).render("home", {data})
}

export const HomeGETAdd = async (req: Request, res: Response) => {
    let id = (await Abbiturient.find()).length + 1
    return res.status(200).render("add", {id})
}

export const HomePOSTAdd = async(req: Request, res: Response) => {
    console.log(req.body)
    console.log(req.body.date_rozhd)
    if (!req.body) return res.redirect("/add")
    let ab = new Abbiturient()
    ab.p_p = req.body.arr[0]
    ab.date_zayv = req.body.date_zayavlenia
    ab.fio = req.body.fio
    ab.forma_poluch_obraz = req.body.forma_polychenia_obrazovania == "o"? "очная" : "заочная"
    ab.specialnost = req.body.Specialnost
    ab.prioritet = req.body.Prioritet
    ab.nomer_lichnoe_delo = req.body.Nomer_lichnogo_dela
    ab.nomer_ekz_lista = req.body.Nomer_egz_lista
    ab.osnova_obych = req.body.osnova_obychenia == "bugzet"? "бюджет"  : "вне бюджет"
    ab.obshaga = req.body.obshaga == "t"? "Да" : "Нет"
    ab.sex = req.body.Sex == "b"? "мальчик" : "девочка"
    ab.birthday = req.body.date_rozhd
    ab.grazhdanstvo = req.body.grazhdanstvo
    ab.addres_mesto_zitelstva = req.body.addres_mesto_zitelstva
    ab.oblast = req.body.oblast
    ab.pasport = req.body.passport
    ab.tel = req.body.tel
    ab.soc_category = req.body.soc_cat
    ab.SPO_vpervie_nevpervie = req.body.spo
    ab.lvl_obraz = req.body.lvl
    ab.god_okonchania = req.body.god_okonchania
    ab.osobie_yspexi_v_echebe = req.body.osobie_yspexi_v_echebe
    ab.orig_doc_obraz = req.body.orig_doc_obraz
    ab.copy_doc_obraz = req.body.copy_doc_obraz
    ab.vstup_ispitanie_1 = req.body.vstup_ispitanie_1
    ab.avg_ball_obrazovanie_2 = req.body.avg_ball_obrazovanie_2
    ab.reshenie_komissi = req.body.reshenie_komissi
    ab.nomer_i_data_prikaza_o_zachislenie = req.body.nomer_i_data_prikaza_o_zachislenie
    ab.prioritet_vid_orig_atestata = req.body.prioritet_vid_orig_atestata
    ab.save()
    return res.status(200).redirect("/")
}