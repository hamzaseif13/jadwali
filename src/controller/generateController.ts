import { Router} from 'express'
import { generateService,all } from '../service/generateServices/generateService';

const generateRouter:Router= Router();
generateRouter.post("/api/v1/generate",generateService)
generateRouter.get("/all",all)
export {generateRouter as generateController};