import React from 'react'

function TabWrapper({ children }) {
    return (
        <div className="text-sm font-medium text-center 
          mt- text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700
          
          ">
            <ul className="flex flex-wrap  -mb-px">
                {children}
            </ul>
        </div>
    )
}

export default TabWrapper