import React from 'react'
import TabLayout from '../TabLayout'
import DaysFilter from './DaysFilter'
import MinimumFilter from './MinimumFilter'
import TimeRange from './TimeRange'
function Options() {
  return (

    <TabLayout>
        <div>
            <DaysFilter/>
            <MinimumFilter/>
            <TimeRange/>
        </div>
    </TabLayout>
  )
}

export default Options