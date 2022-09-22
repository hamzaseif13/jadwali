import { Column,Entity ,OneToMany,PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";


@Entity()
export class LastUpdated {
    @PrimaryGeneratedColumn("uuid")
    id:number
    
    @Column({name:'last_updated',type:'bigint'})
    lastUpdatedMS:number
    
}