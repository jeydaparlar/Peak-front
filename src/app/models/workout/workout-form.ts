import { ExerciseForm } from "../exercise/exercise-form";
export interface WorkoutForm {
    work_id: string;
    name: string;
    date: Date;
    note: string;
    exercises: ExerciseForm[];
  }