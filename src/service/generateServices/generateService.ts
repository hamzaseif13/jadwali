import { sectionRepo, courseRepo } from "../../config/DataSource";
import { Request, Response } from "express";
import { BruteForceGenerator, Generator } from "./BruteForceGenerator";
import { Section } from "../../entity/Section";
import { GeneticGenerator } from "./GeneticGenerator";
const averageCase:Options={
  courses: [
      "1763210",
      "1764300",
      "1763710",
      "1763240",
      "1763250",
      "1733180"
  ],
  minNumOfDays: 5,
  startTime: 8.5,
  endTime: 18.5,
  days: "Sun Mon Tue Wed Thu"
}
const intensiveCase:Options={
  courses: [
      "821190",
      "2511120",
      "901010",
      "901020",
      "801012"
  ],
  minNumOfDays: 5,
  startTime: 8.5,
  endTime: 18.5,
  days: "Sun Mon Tue Wed Thu"
}
const generateService = async (req: Request, res: Response) => {
  
  const options:Options=req.body.options
  //req.params.id=='1'?averageCase:intensiveCase;
  const sections = await Generator.fetchSections(options.courses);
  const generator =new BruteForceGenerator(options)
  let possiableCombinationCount=1;
  sections.forEach(section=>possiableCombinationCount*=section.length);
  console.log(possiableCombinationCount);
 
  //const course = await courseRepo.find({ where:{symbol:"SE324"},relations:["sections"]});
  try {
    res.json(generator.generate(sections));
  } catch (error) {
    res.json(error)
  }
};
const all =async(req:Request,res:Response)=>{
  console.log("start")
  const courses=await (await courseRepo.find({relations:["sections"]})).filter(course=>course.sections.length>15);
  console.log("end")
  console.log(courses.length)
  res.json(courses.map(course=>({name:course.name,sections:course.sections.length})))
}
export { generateService, Options,all };

interface Options {
  startTime: number;
  endTime: number;
  courses: string[];
  minNumOfDays: number;
  days: string;
}
