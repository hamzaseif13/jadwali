  const JadwaliReducer = (state, action) => {
    switch (action.type) {
        case "SET_MIN": return {
            ...state, minNumberOfDays: action.payload
        }
        case "SET_START_TIME": return {
            ...state, startTime: action.payload
        }
        case "SET_END_TIME": return {
            ...state, endTime: action.payload
        }
        case "SET_GEN": return {
            ...state, generatedSchedules: action.payload
        }
        case "SET_REG": return {
            ...state, registeredCourses: action.payload
        }
        case "SET_SUN": return {
            ...state, sun: action.payload
        }
        case "SET_MON": return {
            ...state, mon: action.payload
        }
        case "SET_TUE": return {
            ...state, tue: action.payload
        }
        case "SET_WED": return {
            ...state, wed: action.payload
        }
        case "SET_THU":return{
            ...state,thu:action.payload
        }
    }
}
export default JadwaliReducer