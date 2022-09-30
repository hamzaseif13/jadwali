import { Request,Response } from "express"
import { feedbackRepo } from "../config/DataSource"
import { Feedback } from "../entity/Feedback"
const feedbackService = async (req:Request,res:Response)=>{
    const feedback = new Feedback()
    feedback.email = req.body.email
    feedback.message = req.body.message
    feedback.subject = req.body.subject
    try{
        await feedbackRepo.save(feedback)
        res.status(200).json({message: "Feedback saved successfully"})
    }
    catch(error:any){
        console.log(error)
        res.status(505).json({errorm: error.message})
    }

}
export {feedbackService}