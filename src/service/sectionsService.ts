import { Request, Response } from "express";
import { sectionRepo } from "../config/DataSource";
import { Section } from "../entity/Section";
const getSections = async (req: Request, res: Response) => {
    try{
        const sections  = await sectionRepo.createQueryBuilder('sections').where('sections.lineNumber = :lineNumber',{lineNumber:req.params.linenumber}).getMany()
        if(req.query.similar==='1'){
            const sectionString = req.query.sectionString
            res.json(sections.filter(section=>section.days+section.startTime+section.endTime===sectionString))
            return
        }
        res.json(sections)
    }catch(err){
        res.status(505).send(err)
    }
};

export { getSections };
