import { WorkoutExerciseForm } from '../workoutExercise/workoutExercise-form';
export interface WorkoutForm {
    work_id: string;
    name: string;
    date: Date;
    note: string;
    workoutExercises: WorkoutExerciseForm[];
  }