import { AppDataSource } from "./config/DataSource";
import { Course } from "./entity/Course";
import { Section } from "./entity/Section";
import cors from 'cors'
import express, { Express } from "express";

AppDataSource.initialize()
  .then(() => {console.log("db connected")})
  .catch((err) => console.log(err));

const app: Express = express();


app.use(cors());
app.use(express.json());
app.get("/search", async (req, res) => {
  try{
    const query=req.query.query
    const courseRepo = AppDataSource.getRepository(Course);
    const courses= await courseRepo.createQueryBuilder("course").select("course").where(`course.name like '%${query}%' or course.symbol like '%${query}%' `).getMany()
    res.json(courses)
  }catch(error:any){
    res.status(505).json({errorm: error.message})
  }
    
});

/*
async function add() {
  const courseRepo = AppDataSource.getRepository(Course);
  const sectionRepo = AppDataSource.getRepository(Section);
 
  
  const courses = await mongoCourse.find();
  
  courses.forEach(async(course) =>{
      
        const sCourse = new Course();
        sCourse.name = course.name;
        sCourse.creditHours = course.creditHours;
        sCourse.department = course.department;
        sCourse.lineNumber = course.lineNumber;
        sCourse.symbol = course.symbol;
        sCourse.faculty = course.faculty;
        await courseRepo.save(sCourse);
        for(let i = 0; i < course.sections.length; i++){
          
            let section = new Section();
           
            section.capacity=course.sections[i].capacity
            section.days=course.sections[i].days
            section.startTime=course.sections[i].startTime
            section.endTime=course.sections[i].endTime
            section.hall = course.sections[i].hall
            section.number=course.sections[i].sectionNumber
            section.instructor  =course.sections[i].instructor
            section.status=course.sections[i].status
            section.capacity=course.sections[i].capacity
            section.registered=course.sections[i].registered
            section.seatCount=course.sections[i].seatCount
            section.teachingType=course.sections[i].teachingType
            section.course=course
              await sectionRepo.save(section)
        }
      
    }
  )
  
   
   
 

}*/

app.listen(5000, () => console.log("server running"));
