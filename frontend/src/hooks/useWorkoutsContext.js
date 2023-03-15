import { GlobalContext } from "../context/WorkoutContext";
import { useContext } from 'react';

const useWorkoutsContext = () => {
    const context = useContext(GlobalContext)
    //where context = {state, dispatch} 
    
    if(!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }
    
  return context
}

export default useWorkoutsContext