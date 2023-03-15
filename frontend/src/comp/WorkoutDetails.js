import useWorkoutsContext from "../hooks/useWorkoutsContext"

//date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
  
  const {dispatch, state: {workoutToEdit}} = useWorkoutsContext()

  const handleClick = async () => { 
      const res = await fetch(`/api/workouts/${workout._id}`,{method: 'DELETE'})

      //getting the doc we've just deleted
      const json = await res.json()
    //console.log(json)
      if(res.ok){
        dispatch({type: 'DELETE_WORKOUT', payload: json})
      }
   }

  const oneWorkout = () => { 
    console.log(workout)
    dispatch({type: 'GET_ONE_WORKOUT', payload: workout})
  }

  return (
     <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>Original created {formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
      {!workoutToEdit && 
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span> }
      <span className="edit" onClick={oneWorkout}>Edit</span>
    </div>
  )
}

export default WorkoutDetails