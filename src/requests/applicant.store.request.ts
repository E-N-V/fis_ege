import {body, validationResult} from 'express-validator/check'
import {sanitizeBody} from 'express-validator/filter'

body('name', 'Имя не задано').isLength({min: 1})