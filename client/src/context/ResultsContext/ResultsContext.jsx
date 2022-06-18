import React,{createContext} from 'react'

const ResultsContext= createContext()
export function ResultsProvider({children}) {
  
  return (
    <ResultsContext.Provider >
      {children}
    </ResultsContext.Provider>
  )
}

export default ResultsContext