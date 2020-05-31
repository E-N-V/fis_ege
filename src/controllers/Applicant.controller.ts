import {Request, Response} from "express"
import Applicant from "../database/entity/Applicant"
import {body, validationResult} from 'express-validator/check'
import {sanitizeBody} from 'express-validator/filter'

// TODO: Защитить методы контролллера от неавторизованных пользователей

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
 * TODO: Сделать валидацию входящего запроса
 * TODO: Добавить Observer для параметров, которые динамично создаются/изменяются
 *
 * @param req
 * @param res
 */
export const store = async (req: Request, res: Response) => {
    let data = new Applicant()

    let result = await data.save(req.params)

    if (result) {
        return res.status(200).send(data)
    } else  {
        return res.status(500).send('Ошибка создания аббитуриента')
    }
}

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
    let id = req.params['applicantId']
    let data = await Applicant.findOne(id)

    let result = data?.save(req.params)

    if (result) {
        return res.status(200).send(data)
    } else  {
        return res.status(500).send('Ошибка обновления аббитуриента')
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
        return res.status(500).send('Ошибка удаления аббитуриента')
    }
}