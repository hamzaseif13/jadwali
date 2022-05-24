import {useState,createContext} from 'react'

 const JadwaliContext = createContext();


export const  JadwaliProvider = ({children})=> {
    const [options,setOptions]=useState({sun:true,mon:true,tue:true,wed:true,thu:true,startTime:8.5,endTime:18.5,minNumberOfDays:5})
    const [registeredCourses,setRegisteredCourses] = useState([])
    const [generatedSchedules,setGeneratedSchedules] = useState([])
    
  return (
    <JadwaliContext.Provider value={{options,setOptions,registeredCourses,setRegisteredCourses,generatedSchedules,setGeneratedSchedules}}>
        {children}
    </JadwaliContext.Provider>
  )
}

export default JadwaliContext