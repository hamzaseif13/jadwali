import React from 'react'

function TabWrapper({ children }) {
    return (
        <div className="text-sm font-medium text-center sm:ml-10 md:ml-40
          mt- text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700
          sm:mr-10 md:mr-40
          ">
            <ul className="flex flex-wrap  -mb-px">
                {children}
            </ul>
        </div>
    )
}

export default TabWrapper