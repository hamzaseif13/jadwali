import {DataSource} from 'typeorm'
import { Course } from '../entity/Course'
import "reflect-metadata"
import { Section } from '../entity/Section'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "hamza",
    password: "1253",
    database: "jadwali",
    synchronize: true,
    logging: false,
    entities: [Course,Section],
    subscribers: [],
    migrations: [],
})
export const sectionRepo=AppDataSource.getRepository(Section)
export const courseRepo=AppDataSource.getRepository(Course)

