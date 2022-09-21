import { Column,Entity ,OneToMany,PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class LastUpdated {
    @PrimaryGeneratedColumn("uuid")
    id:number
    
    @Column({name:"last_updated",default:()=>`CURRENT_TIMESTAMP`})
    lastUpdated:Date
   
}