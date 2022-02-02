import { createSlice } from '@reduxjs/toolkit';

export const ActivitieSlice = createSlice({
    name: 'Activities',
    initialState: [],
    reducers: { 
        AddActivities: (state,action) => {
            const AddActi = { 
                id: state.length +1,
                title: action.payload.title,
                description: action.payload.description,
                concluded: action.payload.concluded    
            }

            state.push(AddActi)
        },
        updateAct: (state, action) => { 
            const IndexAct = state.findIndex((item) => item.id === action.payload.id)

            state[IndexAct].title = action.payload.titulo
            state[IndexAct].description = action.payload.description
            state[IndexAct].concluded = action.payload.concluded
        },
        removeAct: (state, action) => { 
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { AddActivities, updateAct, removeAct  } = ActivitieSlice.actions;
export default ActivitieSlice.reducer
