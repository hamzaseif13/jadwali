import {useState,createContext, useReducer} from 'react'
import JadwaliReducer from './JadwaliReducer'
 const JadwaliContext = createContext();


export const  JadwaliProvider = ({children})=> {
   const initialState ={
    minNumberOfDays:5,
    startTime:8.5,
    endTime:18.5,
    generatedSchedules:[],
    registeredCourses:[],
    sun:true,mon:true,tue:true,wed:true,thu:true
   }
    const [state,dispatch] = useReducer(JadwaliReducer,initialState)
  return (
    <JadwaliContext.Provider value={{...state,dispatch}}>
        {children}
    </JadwaliContext.Provider>
  )
}

export default JadwaliContext