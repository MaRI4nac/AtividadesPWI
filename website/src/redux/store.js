import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from './reducers/activities'

export default configureStore({
    reducer: {
        activities: activitiesReducer
    }
}) 