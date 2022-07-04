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
          .where("line_number = :lineNumber", { lineNumber })
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
  protected scheduleIsValid(schedule: Section[]): boolean {
    return (
      this.checkDaysValidation(schedule) &&
      this.checkTimeValidation(schedule) &&
      this.checkForConflicts(schedule)
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
}

export class BruteForceGenerator extends Generator {
  constructor(options: Options) {
    super(options);
  }
  /**
   * brute force generator that uses cartesian Product method (it generates every posiable combination)
   */
  private cartesianProduct(a: Section[][]): Section[][] {
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
  /**
   * generates schedules
   * @param sections sections to generate the schedules from
   * @returns a promise of final schedules
   */
  public generate(sections: Section[][]) {
    this._sections = sections;
    console.time();
    const filteredSchedules: Section[][] = this.cartesianProduct(
      this._sections
    ).filter((schedule) => this.scheduleIsValid(schedule));
    console.timeEnd();
    return filteredSchedules;
  }
}
