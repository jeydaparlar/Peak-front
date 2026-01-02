import { ExerciseResponse } from '../exercise/exercise-response';
export interface WorkoutResponse {
    work_id: string;
    name: string;
    date: Date;
    note: string;
    exercises: ExerciseResponse[];
  }