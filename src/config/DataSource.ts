import {DataSource} from 'typeorm'
import { Course } from '../entity/Course'
import "reflect-metadata"
import { Section } from '../entity/Section'
import dotenv from 'dotenv'
import { LastUpdated } from '../entity/LastUpdated'
import { Feedback } from '../entity/Feedback'
dotenv.config()
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: process.env.ALLOW_SYNC==="true",
    logging: false,
    entities: [Course,Section,LastUpdated,Feedback],
    subscribers: [],
    migrations: [],
})
export const sectionRepo=AppDataSource.getRepository(Section)
export const courseRepo=AppDataSource.getRepository(Course)
export const feedbackRepo=AppDataSource.getRepository(Feedback)

