import {Router }from 'express'
import { getSections } from '../service/sectionsService'
const sectionsRouter = Router()
sectionsRouter.get('/api/v1/sections/:linenumber',getSections)

export{ sectionsRouter }