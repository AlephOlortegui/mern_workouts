/* LA MEJOR EXPLICACION DE LA VIDA
https://www.youtube.com/watch?v=NKsVV7wJcDM&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=11
*/
import {createContext, useReducer} from 'react';

const initialState = {workouts: null}

export const GlobalContext = createContext()

export const AppReducer = (state,action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {workouts: action.payload}
        
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return{
                workouts: state.workouts.filter(w => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value={{...state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}