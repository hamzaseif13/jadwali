import { Entity, Column,PrimaryColumn } from "typeorm";

@Entity({name:"sections"})
 export class Section{
    @PrimaryColumn()
    number:number
    @Column()
    courseLineNumber:number
}