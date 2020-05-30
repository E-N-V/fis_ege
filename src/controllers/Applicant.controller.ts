import {Request, Response} from "express"
import Applicant from "../database/entity/Applicant"

/**
 * Получить страницу всех аббитуриентов
 *
 * @param req
 * @param res
 */
export const index = async (req: Request, res: Response) => {
    let data = await Applicant.find()

    return res.status(200).render('home', {data})
}

/**
 * Получить страницу аббитуриента
 *
 * @param req
 * @param res
 */
export const show = async (req: Request, res: Response) => {
    let id = req.params['applicantId']
    let data = await Applicant.findOne(id)

    if (data) {
        return res.status(200).send(data)
    } else  {
        return res.status(404).send('Запись не найдена')
    }
}

/**
 * Получить страницу редактирования аббитуриента
 *
 * @param req
 * @param res
 */
export const edit = async (req: Request, res: Response) => {
    let id = req.params['applicantId']
    let data = await Applicant.findOne(id)

    if (data) {
        return res.status(200).send(data)
    } else  {
        return res.status(404).send('Запись не найдена')
    }
}

/**
 * Получить страницу создания аббитуриента
 *
 * @param req
 * @param res
 */
export const create = async (req: Request, res: Response) => {
    let data = new Applicant()

    return res.status(200).send(data)
}

/**
 * Сохранить аббитуриента в базе данных
 *
 * @param req
 * @param res
 */
export const store = async (req: Request, res: Response) => {
    let data = new Applicant()

    await data.save(req.params)

    return res.status(200)
}

/**
 * Обновить аббитуриента в базе данных
 *
 * @param req
 * @param res
 */
export const update = async (req: Request, res: Response) => {
    let id = req.params['applicantId']
    let data = await Applicant.findOne(id)

    let result = data?.save(req.params)

    if (result) {
        return res.status(200).send(data)
    } else  {
        return res.status(404).send('Ошибка обновления')
    }
}

/**
 * Удалить аббитуриента из базы данных
 *
 * @param req
 * @param res
 */
export const destroy = async (req: Request, res: Response) => {
    let id = req.params['applicantId']
    let data = await Applicant.findOne(id)

    let result = data?.softRemove()

    if (result) {
        return res.status(200).send(data)
    } else  {
        return res.status(404).send('Ошибка удаления')
    }
}