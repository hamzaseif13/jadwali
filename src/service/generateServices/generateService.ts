import { sectionRepo, courseRepo } from "../../config/DataSource";
import { Request, Response } from "express";
import { BruteForceGenerator } from "./BruteForceGenerator";
import { Section } from "../../entity/Section";

const generateService = async (req: Request, res: Response) => {
  const generator = new BruteForceGenerator(req.body.options);

  try {
    generator.fetchSections().then((sections:Section[][])=>{
      res.json(generator.generate(sections))
    })
  } catch (error) {
    res.json(error);
  }
};

export { generateService ,Options};

interface Options {
  startTime: number;
  endTime: number;
  courses: string[];
  minNumOfDays: number;
  days: string;
}
