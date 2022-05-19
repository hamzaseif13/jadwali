import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().catch(error => console.log(error))
const hanza = new User();

