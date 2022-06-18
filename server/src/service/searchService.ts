import { Request,Response } from "express"
import { courseRepo } from "../config/DataSource"
const search=async(req: Request, res: Response)=>{
    try{
        const query=req.query.query
        const courses= await courseRepo.createQueryBuilder("course").select("course").where(`course.name like '%${query}%' or course.symbol like '%${query}%' `).getMany()
        res.json(courses.slice(0,10))
      }catch(error:any){
        res.status(505).json({errorm: error.message})
      }
}
export {search}