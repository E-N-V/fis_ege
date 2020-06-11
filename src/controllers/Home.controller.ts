import {Request, Response} from "express"
import Applicant from "../database/entity/Applicant"
import RequestApplicant from "../database/entity/RequestApplicant"
import Admission from "../database/entity/Admission"

export const HomeGET = async (req: Request, res: Response) => {
    let applicants = await Applicant.find()
    let requestApplicants = await RequestApplicant.find()
    let admissions = await Admission.find()
    return res.status(200).render("home", {applicants, requestApplicants, admissions, usr: req.cookies.usr})
}