import { WorkoutForm } from '../workout/workout-form';
import {ExerciseForm} from '../exercise/exercise-form';
import {SetForm} from '../set/set-form';
export interface WorkoutExerciseForm {
  workout: WorkoutForm;
  exercise: ExerciseForm;
  sets: SetForm[];
}
