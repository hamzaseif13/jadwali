import { Router} from 'express'
import { generateService} from '../service/generateServices/generateService';

const generateRouter:Router= Router();
generateRouter.post("/api/v1/generate",generateService)

export {generateRouter };