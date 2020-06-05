import {Request, Response} from "express"
import Applicant from "../database/entity/Applicant"

export const HomeGET = async (req: Request, res: Response) => {
    let data = await Applicant.find()
    return res.status(200).render("home", {data, usr: req.cookies.usr})
}

/* 
export const HomePOSTAdd = async(req: Request, res: Response) => {
    console.log(req.body)
    if (!req.body) return res.redirect("/add")
    
    let ab = new Abbiturient()
    ab.p_p = req.body.p_p
    ab.date_zayv = req.body.date_zayv
    ab.fio = req.body.fio
    ab.forma_poluch_obraz = req.body.forma_poluch_obraz
    ab.specialnost = req.body.specialnost
    ab.prioritet = req.body.prioritet
    ab.nomer_lichnoe_delo = req.body.nomer_lichnoe_delo
    ab.nomer_ekz_lista = req.body.nomer_ekz_lista
    ab.osnova_obych = req.body.osnova_obych
    ab.obshaga = req.body.obshaga
    ab.sex = req.body.sex
    ab.birthday = req.body.birthday
    ab.grazhdanstvo = req.body.grazhdanstvo
    ab.addres_mesto_zitelstva = req.body.addres_mesto_zitelstva
    ab.oblast = req.body.oblast
    ab.passport = req.body.passport
    ab.tel = req.body.tel
    ab.soc_category = req.body.soc_category
    ab.SPO_vpervie_nevpervie = req.body.SPO_vpervie_nevpervie
    ab.lvl_obraz = req.body.lvl_obraz
    ab.god_okonchania = req.body.god_okonchania
    ab.osobie_yspexi_v_echebe = req.body.osobie_yspexi_v_echebe
    ab.orig_doc_obraz = req.body.orig_doc_obraz
    ab.copy_doc_obraz = req.body.copy_doc_obraz
    ab.vstup_ispitanie_1 = req.body.vstup_ispitanie_1
    ab.avg_ball_obrazovanie_2 = req.body.avg_ball_obrazovanie_2
    ab.reshenie_komissi = req.body.reshenie_komissi
    ab.nomer_i_data_prikaza_o_zachislenie = req.body.nomer_i_data_prikaza_o_zachislenie
    ab.prioritet_vid_orig_atestata = req.body.prioritet_vid_orig_atestata
    let result = await ab.save()
    console.log("result: ", result)
    return res.status(200).redirect("/")
} */