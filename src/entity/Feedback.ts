import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Feedback {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column()
    subject: string;
    
    @Column()
    email: string;
    
    @Column()
    message: string;
}