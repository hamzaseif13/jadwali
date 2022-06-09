import { Column,Entity ,OneToMany,PrimaryColumn} from "typeorm";
import { Section } from "./Section";

@Entity()
export class Course {
    @PrimaryColumn({name:"line_number"})
    lineNumber:number
    @Column({name:"credit_hours"})
    creditHours:number
    @Column()
    name:string
    @Column()
    department:string
    @Column ()
    faculty:string
    @Column ()
    symbol:string

    @OneToMany(()=>Section,section=>section.course,{onDelete:"CASCADE"})
    sections:Section[]

   
}