import { Router} from 'express'
import { search } from '../service/searchService';

const searchRouter:Router= Router();
searchRouter.get("/api/v1/search",search)

export {searchRouter };