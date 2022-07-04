import { PrimaryColumn, Column, Entity, ManyToOne, JoinColumn ,PrimaryGeneratedColumn, Index} from "typeorm";
import { Course } from "./Course";

@Entity()
export class Section {
  @PrimaryGeneratedColumn("uuid")
  id:string
  @Column()
  number: number;
  @Column({ name: "start_time" ,nullable:true,type:"double"})
  startTime: number;
  @Column({ name: "end_time" ,nullable:true,type:"double"})
  endTime: number;
  @Column({nullable:true})
  days: string;
  @Column({nullable:true})
  instructor: string;
  @Column({nullable:true})
  status: string;
  @Column({nullable:true})
  hall: string;
  @Column({nullable:true})
  capacity: number;

  @Column({nullable:true})
  registered: number;

  @Column({ name: "seat_count" ,nullable:true})
  seatCount: string;

  @Column({ name: "teaching_type" ,nullable:true})
  teachingType: string;


 

  @Column({name:"line_number"})
  lineNumber:number
  @Index("idx_line_number")
  @ManyToOne(() => Course, (course) => course.sections)
  @JoinColumn({ name: "line_number" })
  course: Course;
}
