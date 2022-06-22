import { AppDataSource } from "./config/DataSource";
import { Course } from "./entity/Course";
import { Section } from "./entity/Section";
import cors from 'cors'
import express, { Express } from "express";
import path from 'path'
import {searchController} from './controller/searchController';
import { generateController } from "./controller/generateController";

AppDataSource.initialize()
  .then(() => {console.log("db connected")})
  .catch((err) => console.log(err));
const app: Express = express();
const PORT=process.env.PORT || 5050;
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.use(express.json());
app.use(cors())
app.use(searchController)
app.use(generateController)





app.listen(PORT, () => console.log(`server running on port ${PORT}`));


/*
const dbUrl =
  "mongodb+srv://hamzaseif:125369325147@unischedulercluster.fhjnr.mongodb.net/uniSchedulerDb?retryWrites=true&w=majority";
mongoose
  .connect(dbUrl)
  .then(() => {console.log("db connected");add()})
  .catch((err) => console.log(err));
async function add() {
  const courseRepo = AppDataSource.getRepository(Course);
  const sectionRepo = AppDataSource.getRepository(Section);
 
  
  const courses = await mongoCourse.find();
  
  courses.forEach(async(course:any) =>{
      
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
            section.courseSymbol=course.symbol
              await sectionRepo.save(section)
        }
      
    }
  )
  
   
   
 

}

*/