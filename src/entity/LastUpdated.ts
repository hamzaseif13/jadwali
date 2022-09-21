import { Column,Entity ,OneToMany,PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";


@Entity()
export class LastUpdated {
    @PrimaryGeneratedColumn("uuid")
    id:number
    
    @CreateDateColumn({name:'last_updated'})
    lastUpdated:Date
   
}