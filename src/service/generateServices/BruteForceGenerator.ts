import { Options } from "./generateService";
import { courseRepo, sectionRepo } from "../../config/DataSource";
import { Course } from "../../entity/Course";
import { Section } from "../../entity/Section";
//generator class have the implementation of common methods between Brute force generator and genetic one
export abstract class Generator {
  protected options: Options;
  protected _sections: Section[][] = [];
  constructor(options: Options) {
    this.options = options;
  }
  /**
   * generates schedules
   */

  public abstract generate(sections: Section[][]): Section[][];

  /**
   * checks if a schedule timing meets the user needs
   * @param schedule schedule to check its timing
   * @returns true if the schedule is valid false otherwise
   */
  private checkTimeValidation(schedule: Section[]): boolean {
    let valid = true;
    schedule.forEach((section: Section) => {
      if (section.startTime < this.options.startTime) valid = false;
      if (section.endTime > this.options.endTime) valid = false;
    });
    return valid;
  }
  /** 
  returns a promise of query of the all sections
  */
  public static fetchSections(courses: string[]): Promise<Section[][]> {
    return Promise.all(
      courses.map((lineNumber: string) => {
        return sectionRepo
          .createQueryBuilder("section")
          .where(`line_number = :lineNumber and days!='U'`, { lineNumber })
          .getMany();
      })
    );
  }
  /**
   * checks if a schedule is valid
   * @param schedule distinct schedule that you wanna validate
   * @returns true if the schedule is valid otherwise false
   */
  private checkForConflicts(schedule: Section[]): boolean {
    let noConflict = true;
    let days: Section[][] = [[], [], [], [], []];
    schedule.forEach((section: Section) => {
      if (section.days.includes("sun")) days[0].push(section);
      if (section.days.includes("mon")) days[1].push(section);
      if (section.days.includes("tue")) days[2].push(section);
      if (section.days.includes("wed")) days[3].push(section);
      if (section.days.includes("thu")) days[4].push(section);
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
  private checkIfActiveOrFull(schedule: Section[]) {
    let validSchedule = true;
    schedule.forEach((section) => {
      if (section.status.toLowerCase() == "cancelled") validSchedule = false;
    });
    return validSchedule;
  }
  protected checkIfMeetsPinned(schedule: Section[]): boolean {
    const pinnedIds = this.options.pinnedSections.map((section) => section.id);
    return pinnedIds.every((id) =>
      schedule.map((section) => section.id).includes(id)
    );
  }
  protected scheduleIsValid(schedule: Section[]): boolean {
    return (
      this.checkDaysValidation(schedule) &&
      this.checkTimeValidation(schedule) &&
      this.checkForConflicts(schedule) &&
      this.checkIfActiveOrFull(schedule) 
      
    );
  }
  /**
   * checks if tow sections intersect with each other
   * @param first first section to check
   * @param second second section to check
   * @returns true if they intersect, false otherwise
   */
  private checkInterSection(first: Section, second: Section): boolean {
    if (first.startTime == second.startTime) {
      return true;
    } else if (first.startTime < second.startTime) {
      if (first.endTime > second.startTime) return true;
      else return false;
    } else {
      if (second.endTime > first.startTime) return true;
      else return false;
    }
  }
  /**
   * checks if the days of a schedule are the same that the user wants
   * @param schedule a schedule to check
   * @returns true if the schedule is the valid false otherwise
   */
  private checkDaysValidation(schedule: Section[]): boolean {
    let valid = true;
    schedule.forEach((section: Section) => {
      let days = section.days.split(" ");
      days.forEach((day) => {
        if (!this.options.days.includes(day)) valid = false;
      });
    });
    return valid;
  }
  protected sortByScore(schedules: Section[][]) {
    schedules.sort((a: Section[], b: Section[]) => {
      return this.getScore(a) - this.getScore(b);
    });
  }
  private getScore(schedule: Section[]): number {
    const weekDays = ["sun", "mon", "tue", "wed", "thu", "sat"];
    const daysArr: any = {
      sun: [],
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      sat: [],
    };

    for (const day of weekDays) {
      for (let sec of schedule) {
        if (sec.days.includes(day)) daysArr[day].push(sec);
      }
    }

    let identicalDays = true;
    let score = 0;
    let sumUniT = 0;
    let sumDays = 0;
    let uniTArr = [];
    for (const day of weekDays) {
      if (daysArr[day].length > 0) {
        daysArr[day] = this.dayStats(daysArr[day]);
        score -= daysArr[day].studyPer * 10; //better score if most of your school day is not free
        sumUniT += daysArr[day].uniT; // worse score for longer school days
        sumDays++;
        uniTArr.push(daysArr[day].uniT);
      } else score -= 10000; //better score for less days per week

      // if(!schoolDays.includes("all") && schoolDays.includes(day.toLowerCase())){
      //     if(identicalDays && daysArr[day].length === 0){
      //         identicalDays = false;
      //     }
      // }
    }
    //this make the score higher(worse) if the time spent in the university is very different between school days (high variance)
    let avg = sumUniT / sumDays;
    score += Math.sqrt(
      uniTArr.reduce((sum, val) => {
        return sum + (val - avg) ** 2;
      }, 0) / sumDays
    );

    // if(!schoolDays.includes("all") && identicalDays)
    //     score -= 20000;//better score if the school days are exactly as inputed by user

    return ~~score; //round num
  }
  private dayStats(dayArr: Section[]) {
    dayArr.sort((a, b) => {
      return a.endTime - b.endTime;
    });

    const uniT = dayArr[dayArr.length - 1].endTime - dayArr[0].startTime;

    let studyT = 0;
    for (const sec of dayArr) {
      studyT += sec.endTime - sec.startTime;
    }
    let obj = { uniT: uniT, studyPer: (studyT / uniT) * 100 };
    // console.log(obj);
    return obj;
  }
  protected sortByDays(schedules: Section[][]) {
      for (let schedule of schedules){
          schedule.sort((a: Section, b: Section) => {
              return this.getDayScore(a) - this.getDayScore(b);
          });
      }
  }
   private getDayScore(section:Section):number{
      let score =0
      score+=section.days.includes("mon")? -2:2
      score+=section.days.includes("wed")? -2:2
      return score
   }
}

export class BruteForceGenerator extends Generator {
  constructor(options: Options) {
    super(options);
  }
  /**
   * brute force generator that uses backtracking
   */
  private getAllCombinations(sections: Section[][]): Section[][] {
    const result: Section[][] = [];
    const backtrack = (i: number, state: Section[]) => {
      if (!this.scheduleIsValid(state)||result.length > 100000) {
        return;
      }
      if (state.length === sections.length || result.length > 1000000) {
        result.push(state);
        return;
      }
      for (let y of sections[i]) {
        const concate = state.slice();
        concate.push(y);
        backtrack(i + 1, concate);
      }
    };
    backtrack(0, []);
    return result.filter((schedule) => this.checkIfMeetsPinned(schedule));
  }
  private compressSections(sections: Section[][]): Section[][] {
    const compressedSections:Section[][]=[]
    for(let courseSections of sections){
        let visited:string[]=[]
        let newSections:Section[]=[]
        courseSections.forEach(section=>{
          if(!visited.includes(`${section.startTime}${section.endTime}${section.days}`)){
            visited.push(`${section.startTime}${section.endTime}${section.days}`)
            newSections.push(section)
          }
        })
        compressedSections.push(newSections)
    }

    return compressedSections
  }
  /**
   * generates schedules
   * @param sections sections to generate the schedules from
   * @returns a promise of final schedules
   */
  public generate(sections: Section[][]) {
    
    this._sections = sections.filter((section) => section.length > 0);
    this._sections= this.compressSections(this._sections);
    let possibleCombinationCount=1;
    this._sections.forEach(section=>possibleCombinationCount*=section.length);
    console.log('possible combinations : ',possibleCombinationCount) 
    console.time("generate time");
    this.sortByDays(this._sections);
    const filteredSchedules: Section[][] = this.getAllCombinations(
      this._sections
    );
    this.sortByScore(filteredSchedules);
    console.timeEnd("generate time");
    console.log('possible schedules',filteredSchedules.length);
    return filteredSchedules.slice(0, 10000);
  }
}
