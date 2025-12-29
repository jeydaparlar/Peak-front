import { WorkoutExerciseResponse } from '../workoutExercise/workoutExercise-response';
export interface WorkoutResponse {
    work_id: string;
    name: string;
    date: Date;
    note: string;
    workoutExercises: WorkoutExerciseResponse[];
  }