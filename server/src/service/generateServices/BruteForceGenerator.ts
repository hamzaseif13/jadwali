import { Options } from "./generateService";
import { courseRepo, sectionRepo } from "../../config/DataSource";
import { Course } from "../../entity/Course";
import { Section } from "../../entity/Section";

export class BruteForceGenerator {
  private options: Options;
  private _sections: Section[][] = [];
  constructor(options: Options) {
    this.options = options;
  }
  public fetchSections():Promise<Section[][]> {
    return Promise.all(
      this.options.courses.map((lineNumber: string) => {
        return sectionRepo
          .createQueryBuilder("section")
          .where("line_number = :lineNumber", { lineNumber })
          .getMany();
      })
    );
  }
  private cartesianProduct(a:Section[][]) {
    // a = array of array
    var i,
      j,
      l,
      m,
      a1,
      o = [];
    if (!a || a.length == 0) return a;

    a1 = a.splice(0, 1)[0]; // the first array of a
    a = this.cartesianProduct(a);
    for (i = 0, l = a1.length; i < l; i++) {
      if (a && a.length)
        for (j = 0, m = a.length; j < m; j++) o.push([a1[i]].concat(a[j]));
      else o.push([a1[i]]);
    }
    return o;
  }
  private filterTime(schedule: Section[]): boolean {
    let valid =true;
    schedule.forEach((section:Section)=>{
        if(section.startTime<this.options.startTime)valid=false;
        if(section.endTime>this.options.endTime)valid=false;
    })
    return valid;
  }
 
  private noConflicts(schedule: Section[]): boolean {
    let noConflict = true;
    let days: Section[][] = [[], [], [], [], []];
    schedule.forEach((section: Section) => {
      if (section.days.includes("Sun")) days[0].push(section);
      if (section.days.includes("Mon")) days[1].push(section);
      if (section.days.includes("Tue")) days[2].push(section);
      if (section.days.includes("Wed")) days[3].push(section);
      if (section.days.includes("Thu")) days[4].push(section);
    });

    days.forEach((day) => {
      if (day.length > 1) {
        for (let j = 0; j < day.length - 1; j++)
          for (let i = j + 1; i < day.length; i++)
            if (this.checkInterSection(day[j], day[i])) noConflict = false;
      }
    });
    return noConflict;
  }

  private checkInterSection(first: Section, second: Section): boolean {
    if (first.startTime == second.startTime) {
      return true;
    }
    else if (first.startTime < second.startTime) {
      if (first.endTime > second.startTime) return true;
      else return false;
    } else  {
      if (second.endTime > first.startTime) return true;
      else  return false;
    }
  
  }

  public generate(sections: Section[][]) {
    var generatedSchedules = this.cartesianProduct(sections);
    var filteredSchedules: Section[][] = [];
    generatedSchedules.forEach((sch: Section[]) => {
      if (this.noConflicts(sch)&&this.filterTime(sch)&&this.filterDays(sch)) {filteredSchedules.push(sch);
    }});
    return filteredSchedules;
  }
  public get sections() {
    return this._sections;
  }
  public set sections(sections: Section[][]) {
    this._sections = sections;
  }
  private filterDays(sch: Section[]):boolean{
    let valid =true;
    sch.forEach((section:Section)=>{
      let days = section.days.split(" ")
      days.forEach(day=>{
        if(!this.options.days.includes(day))valid =false;
      })
    })
    return valid;
}
 
}

