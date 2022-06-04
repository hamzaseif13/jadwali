import React from 'react'
import TabLayout from '../TabLayout'
import DaysFilter from './DaysFilter'
import MinimumFilter from './MinimumFilter'
import TimeRange from './TimeRange'
function Options() {
  return (

    <TabLayout>
        <div className="mt-3">
            <DaysFilter/>
            <MinimumFilter/>
            <TimeRange/>
            <h1 className="text-right mt-7">Continue to results</h1>
        </div>
    </TabLayout>
  )
}

export default Options