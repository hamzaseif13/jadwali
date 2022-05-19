import { Entity, Column ,PrimaryColumn, ManyToMany, OneToMany} from "typeorm";
import {Section} from './Section'
@Entity({name:"courses"})
export class Course{
    @Column()
    name:string;
    @PrimaryColumn()
    lineNumber:number
    @Column()
    symbol:string;
    @Column()
    creditHour:number
    @Column()
    departmentName:string;
    @OneToMany()
    sections:Section

}
