/* LA MEJOR EXPLICACION DE LA VIDA
https://www.youtube.com/watch?v=NKsVV7wJcDM&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=11
*/
import {createContext, useReducer} from 'react';

const initialState = {
    workouts: [],
    workoutToEdit: null
}

export const GlobalContext = createContext()

export const AppReducer = (state,action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                ...state,
                workouts: action.payload
            }
        
        case 'CREATE_WORKOUT':
            return {
                ...state,
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return{
                ...state,
                workouts: state.workouts.filter(w => w._id !== action.payload._id)
            }
        case 'GET_ONE_WORKOUT':
            return {
                ...state,
                workoutToEdit: action.payload
            }
        case 'PATCH_WORKOUT':
            // console.log(action.payload)
            return{
                ...state,
                workoutToEdit: null,
                workouts: state.workouts.map(w => {
                    if(w._id === action.payload._id){
                        return {
                            ...w,
                            title:action.payload.title, 
                            reps:action.payload.reps, 
                            load:action.payload.load
                        }
                    }
                    return w
                })
            }
        default:
            return state
    }
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        // <GlobalContext.Provider value={{...state,dispatch}}>
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}