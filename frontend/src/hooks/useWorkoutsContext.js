import { GlobalContext } from "../context/WorkoutContext";
import { useContext } from 'react';

const useWorkoutsContext = () => {
    const context = useContext(GlobalContext)
    //where context = {state, dispatch} = {workouts: Arr or null, dispatch: function}
    
    if(!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }
    
  return context
}

export default useWorkoutsContext