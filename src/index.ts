import { AppDataSource } from "./config/DataSource";
import { Course } from "./entity/Course";
import { Section } from "./entity/Section";
import { LastUpdated } from "./entity/LastUpdated";
import cors from 'cors'
import express, { Express } from "express";
import path from 'path'
import {searchController} from './controller/searchController';
import { generateController } from "./controller/generateController";
import compression from 'compression'
AppDataSource.initialize()
  .then(() => {console.log("db connected")})
  .catch((err) => console.log(err));
const app: Express = express();
const PORT=process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../client/build')));

app.use(compression())
app.use(express.json());
app.use(cors())
app.use(searchController)
app.use(generateController)

app.post('/api/v1/update_date',async(req,res)=>{
  try{
    const lastUpdatedRepo = AppDataSource.getRepository(LastUpdated)
    const lastUpdatedDate = new LastUpdated()
    lastUpdatedDate.lastUpdatedMS = new Date().getTime()
    await lastUpdatedRepo.save(lastUpdatedDate)
    res.status(200).send(lastUpdatedDate)
  }
  catch(err){
    res.status(505).send(err)
  }
})
app.get('/api/v1/last_updated',async(req,res)=>{
  try{
    
    const lastUpdatedRepo = AppDataSource.getRepository(LastUpdated)
    const lastUpdatedDate = await lastUpdatedRepo.createQueryBuilder('last_updated').orderBy('last_updated','DESC').getMany()
    
    res.json({milliseconds:new Date().getTime()-lastUpdatedDate[0].lastUpdatedMS})
  }
  catch(err){
    res.status(505).send(err)
  }
})


app.get("/*",(req,res)=>{
  res.sendFile(path.join(__dirname+'/../client/build/index.html'))
})


function calcDate(date1:any, date2:any) {
  /*
  * calcDate() : Calculates the difference between two dates
  * @date1 : "First Date in the format MM-DD-YYYY"
  * @date2 : "Second Date in the format MM-DD-YYYY"
  * return : Array
  */

  //new date instance
  const dt_date1 = new Date(date1);
  const dt_date2 = new Date(date2);
  
  //Get the Timestamp
  const date1_time_stamp = dt_date1.getTime();
  const date2_time_stamp = dt_date2.getTime();

  let calc;

  //Check which timestamp is greater
  if (date1_time_stamp > date2_time_stamp) {
      calc = new Date(date1_time_stamp - date2_time_stamp);
  } else {
      calc = new Date(date2_time_stamp - date1_time_stamp);
  }
  //Retrieve the date, month and year
  const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
  //Convert to an array and store
  const calcFormat:any = calcFormatTmp.split("-");
  //Subtract each member of our array from the default date
  const days_passed = Number(Math.abs(calcFormat[0]) - 1);
  const months_passed = Number(Math.abs(calcFormat[1]) - 1);
  const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

  //Set up custom text
  const yrsTxt = ["year", "years"];
  const mnthsTxt = ["month", "months"];
  const daysTxt = ["day", "days"];

  //Convert to days and sum together
  const total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;
  const total_secs = total_days * 24 * 60 * 60;
  const total_mins = total_days * 24 * 60;
  const total_hours = total_days * 24;
  const total_weeks = total_days / 7;

  //display result with custom text
  const result = ((years_passed == 1) ? years_passed + ' ' + yrsTxt[0] + ' ' : (years_passed > 1) ?
      years_passed + ' ' + yrsTxt[1] + ' ' : '') +
      ((months_passed == 1) ? months_passed + ' ' + mnthsTxt[0] : (months_passed > 1) ?
          months_passed + ' ' + mnthsTxt[1] + ' ' : '') +
      ((days_passed == 1) ? days_passed + ' ' + daysTxt[0] : (days_passed > 1) ?
          days_passed + ' ' + daysTxt[1] : '');

  //return the result
  return {
      "total_days": Math.round(total_days),
      "total_weeks": Math.round(total_weeks),
      "total_hours" : Math.round(total_hours),
      "total_minutes" : Math.round(total_mins),
      "total_seconds": Math.round(total_secs),
      "result": result.trim()
  }

}

app.listen(PORT, () => console.log(`server running on port ${PORT}`));


