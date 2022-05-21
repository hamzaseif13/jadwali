import React, { useState } from 'react'
import TabButton from '../components/tabs/TabButton'
import TabWrapper from '../components/tabs/TabWrapper'
import AddCourses from '../components/tabs/AddCourses/AddCourses'
import Options from '../components/tabs/Options/Options'
//xd sxws
import Results from '../components/tabs/Results/Results'
function Generator() {
  const [active, setActive] = useState(3)
  const renderActiveTap = ()=>{
    switch(active){
      case 1:return<AddCourses/>
      case 2:return<Options/>
      case 3:return <Results/>
      default:return<AddCourses/>
    }
  }
  return (
    <div className="min-h-[88vh] bg-mydark">
      <h1 className="pt-8 text-3xl text-white   ml-3 md:ml-26 sm:ml-10 lg:ml-60">Jadwali generator</h1>
      <TabWrapper>
        <TabButton name="add courses" order={1} setActive={setActive} isActive={active===1?true:false}/>
        <TabButton name="Options" order={2} setActive={setActive} isActive={active===2?true:false}/>
        <TabButton name="results" order={3}setActive={setActive} isActive={active===3?true:false}/>
      </TabWrapper>
      {renderActiveTap()}
    </div>
  )
}

export default Generator