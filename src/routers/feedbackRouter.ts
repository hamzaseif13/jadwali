import { Router} from 'express'
import { feedbackService} from '../service/feedbackService';

const feedbackRouter:Router= Router();
feedbackRouter.post("/api/v1/feedback",feedbackService)

export {feedbackRouter };