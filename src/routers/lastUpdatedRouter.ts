import { LastUpdated } from '../entity/LastUpdated'
import { AppDataSource } from '../config/DataSource'
import { Request, Response, Router } from 'express'
const lastUpdatedRouter = Router()
lastUpdatedRouter.post('/api/v1/update_date',async(req:Request,res:Response)=>{
    try{
      const lastUpdatedRepo = AppDataSource.getRepository(LastUpdated)
      const lastUpdatedDate = new LastUpdated()
      lastUpdatedDate.lastUpdatedMS = new Date().getTime()
      await lastUpdatedRepo.save(lastUpdatedDate)
      res.status(200).send(lastUpdatedDate)
    }
    catch(err){
      res.status(505).send(err)
    }
  })
  lastUpdatedRouter.get('/api/v1/last_updated',async(req:Request,res:Response)=>{
    try{
      
      const lastUpdatedRepo = AppDataSource.getRepository(LastUpdated)
      const lastUpdatedDate = await lastUpdatedRepo.createQueryBuilder('last_updated').orderBy('last_updated','DESC').getMany()
      
      res.json({milliseconds:new Date().getTime()-lastUpdatedDate[0].lastUpdatedMS})
    }
    catch(err){
      res.status(505).send(err)
    }
  })

export {lastUpdatedRouter}