import React from 'react'

function TabButton({name,isActive,setActive,order}) {
    const handleClick=()=>{
        setActive(order)
    }
    return (
        <li className="mr-2" onClick={handleClick}>
            <a href="#"  className={`inline-block p-4 rounded-t-lg border-b-2${isActive?' text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500':'  border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>{name}</a>
        </li>
    )
}

export default TabButton