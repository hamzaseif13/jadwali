import React from 'react'

function TabLayout({children}) {
  return (
    <div className="text-white ml-3 sm:ml-10 md:ml-26 lg:ml-60 mt-5 sm:mr-10 md:mr-26 lg:mr-60 mr-3">
        {children}
    </div>
    
  )
}

export default TabLayout