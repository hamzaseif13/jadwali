import React, { useState } from 'react'
import TabButton from '../components/tabs/TabButton'
import TabWrapper from '../components/tabs/TabWrapper'
import AddCourses from '../components/tabs/AddCourses/AddCourses'
import Options from '../components/tabs/Options/Options'
import Results from '../components/tabs/Results/Results'
import JadwaliContext from '../context/jadwaliContext/JadwaliContext'
import { useContext } from 'react'
import Favorites from '../components/tabs/Favorites/Favorites'
function Generator() {
  const {dispatch,activeTab} = useContext(JadwaliContext)
  const renderActiveTap = ()=>{
    switch(activeTab){
      case 1:return<AddCourses/>
      case 2:return<Options/>
      case 3:return <Results favorite={false}/>
      case 4:return <Favorites/>
      default:return<AddCourses/>
    }
    
  }
  return (
    <div className="  pb-20 ">
      <h1 className="pt-4 text-2xl  text-white   ml-3 md:ml-40 sm:ml-10 ">Generator</h1>
      <TabWrapper>
        <TabButton name="Add courses" order={1} />
        <TabButton name="Options" order={2} />
        <TabButton name="Results" order={3} />
        <TabButton name="Favorites" order={4} />
      </TabWrapper>
      {renderActiveTap()}
    </div>
  )
}

export default Generator