import {Router }from 'express'
import { getSections } from '../service/sectionsService'
const router = Router()
router.get('/api/v1/sections/:linenumber',getSections)

export{ router as sectionsController}