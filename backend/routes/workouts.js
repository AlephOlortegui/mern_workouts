const express = require('express')
const router = express.Router();
const {getWorkouts, createWorkout,
     getWorkout, deleteWorkout,
     updateWorkout} = require('../controller/workoutController')

// Specific to General routes

router
    .route('/:id')
    .get(getWorkout)
    .delete(deleteWorkout)
    .patch(updateWorkout)

router
    .route('/')
    .get(getWorkouts)
    .post(createWorkout)


module.exports = router