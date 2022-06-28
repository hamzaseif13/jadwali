import { sectionRepo, courseRepo } from "../../config/DataSource";
import { Request, Response } from "express";
import { BruteForceGenerator, Generator } from "./BruteForceGenerator";
import { Section } from "../../entity/Section";
import { GeneticGenerator } from "./GeneticGenerator";

const generateService = async (req: Request, res: Response) => {
  const options:Options=req.body.options;
  let generationType ="brute"//genetic//brute
  const generator =
  generationType=="brute"?new BruteForceGenerator(options):new GeneticGenerator(options)
  try {
    generator.generate().then((result) => res.json(result));
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
}
