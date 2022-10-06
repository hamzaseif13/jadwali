import { sectionRepo, courseRepo } from "../../config/DataSource";
import { Request, Response } from "express";
import { BruteForceGenerator, Generator } from "./BruteForceGenerator";
import { Section } from "../../entity/Section";
import { GeneticGenerator } from "./GeneticGenerator";


const generateService = async (req: Request, res: Response) => {
  
  const options:Options=req.body.options
  //req.params.id=='1'?averageCase:intensiveCase;
  const sections:Section[][] = await Generator.fetchSections(options.courses);
  const generator =new BruteForceGenerator(options)
  
  
  try {
    
    res.json(generator.generate(sections));
  } catch (error) {
    res.json(error)
  }
};

export { generateService, Options };

interface Options {
  startTime: number;
  endTime: number;
  courses: string[];
  minNumOfDays: number;
  days: string;
  pinnedSections:Section[]
}
