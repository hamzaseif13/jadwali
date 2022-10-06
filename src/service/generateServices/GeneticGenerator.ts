import { Course } from "../../entity/Course";
import { Section } from "../../entity/Section";
import { Generator } from "./BruteForceGenerator";
import { Options } from "./generateService";

export class GeneticGenerator extends Generator {
  constructor(options: Options) {
    super(options);
    
  }
  public generate(sections: Section[][]): Section[][] {
    return [];
  }
}
class Schedule {
  private sectionsSize: number;
  private _fitness: number;
  private _sections: number[];
  private courses: Course[];
  constructor(courses: Course[]) {
    this.courses = courses;
    this._fitness = courses.length;
    for (let j = 0; j < courses.length; j++) {
      this.sections[j] = Math.floor(Math.random() * courses[j].sections.length);
    }
  }
  get fitness() {
    return this._fitness;
  }

  get sections() {
    return this._sections;
  }

  public calculateFitness(): void {}
  public toString(): string {
    return `fitness : ${this.fitness} : [sections = ${this.sections}]`;
  }
  private checkConflicts(): boolean {
    return false;
  }
}
