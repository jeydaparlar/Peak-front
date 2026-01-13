import { ExerciseForm } from "../exercise/exercise-form";
export interface WorkoutForm {
    name: string;
    date: Date;
    note: string;
    exercises: ExerciseForm[];
  }