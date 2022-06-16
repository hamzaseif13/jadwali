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
        case "SET_DAYS": return {
            ...state, days: action.payload
        }
        default:;
       
    }
}
export default JadwaliReducer