import { WorkoutResponse } from '../workout/workout-response';
import {ExerciseResponse} from '../exercise/exercise-response';
import {SetResponse} from '../set/set-response'
export interface WorkoutExerciseResponse {
    work_exo_id: string;
    workout: WorkoutResponse;
    exercise: ExerciseResponse;
    sets: SetResponse[]
  }