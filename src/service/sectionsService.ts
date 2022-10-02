import { Request, Response } from "express";
import { sectionRepo } from "../config/DataSource";
import { Section } from "../entity/Section";
const getSections = async (req: Request, res: Response) => {
    try{
        const sections  = await sectionRepo.createQueryBuilder('sections').where('sections.lineNumber = :lineNumber',{lineNumber:req.params.linenumber}).getMany()
        res.json(sections)
    }catch(err){
        res.status(505).send(err)
    }
};

export { getSections };
